// Claude Code Beginner Guide — App Logic
// Handles: routing, rendering, progress tracking, sidebar, keyboard nav

(function () {
  'use strict';

  const STORAGE_KEY = 'ccbeginner_progress';
  const TOTAL_LESSONS = window.LESSON_INDEX.length;

  // ============================================================
  // Progress storage
  // ============================================================

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        return {
          version: 1,
          completedLessons: Array.isArray(data.completedLessons) ? data.completedLessons : [],
          currentLesson: data.currentLesson || window.LESSON_INDEX[0]
        };
      }
    } catch (e) { /* ignore */ }
    return { version: 1, completedLessons: [], currentLesson: window.LESSON_INDEX[0] };
  }

  function saveProgress(p) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) { /* ignore */ }
  }

  function isComplete(id) {
    return progress.completedLessons.includes(id);
  }

  function markComplete(id) {
    if (!isComplete(id)) {
      progress.completedLessons.push(id);
      saveProgress(progress);
    }
  }

  function getProgressPct() {
    return Math.round((progress.completedLessons.length / TOTAL_LESSONS) * 100);
  }

  // ============================================================
  // Look up lesson/module by id
  // ============================================================

  function findLesson(lessonId) {
    for (const module of window.LESSONS) {
      for (const lesson of module.lessons) {
        if (lesson.lessonId === lessonId) return { module, lesson };
      }
    }
    return null;
  }

  function getAdjacentIds(currentId) {
    const idx = window.LESSON_INDEX.indexOf(currentId);
    return {
      prevId: idx > 0 ? window.LESSON_INDEX[idx - 1] : null,
      nextId: idx < window.LESSON_INDEX.length - 1 ? window.LESSON_INDEX[idx + 1] : null
    };
  }

  // ============================================================
  // Rendering helpers
  // ============================================================

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Allow a small set of safe inline HTML tags in content strings
  function renderContent(raw) {
    // Replace \n with <br> for multi-line content, preserve safe tags
    return raw
      .replace(/\n/g, '<br>')
      .replace(/&lt;strong&gt;/g, '<strong>')
      .replace(/&lt;\/strong&gt;/g, '</strong>')
      .replace(/&lt;em&gt;/g, '<em>')
      .replace(/&lt;\/em&gt;/g, '</em>')
      .replace(/&lt;code&gt;/g, '<code>')
      .replace(/&lt;\/code&gt;/g, '</code>');
  }

  // Convert content that may contain <strong>, <em>, <code> tags directly
  function safeContent(content) {
    // Content is written by us (not user input) so we trust basic inline tags.
    // Replace newlines with <br>.
    return content.replace(/\n/g, '<br>');
  }

  function renderStep(step, index) {
    const typeClass = (step.type === 'tip' || step.type === 'warning' || step.type === 'quiz') ? ` ${step.type}` : '';

    // Determine step number label
    let numberLabel = String(index + 1);
    if (step.type === 'tip') numberLabel = '💡';
    if (step.type === 'warning') numberLabel = '⚠';
    if (step.type === 'quiz') numberLabel = '?';

    // Build inner body
    let bodyHtml = `<div class="step-title">${escapeHtml(step.title)}</div>`;
    bodyHtml += `<div class="step-content">${safeContent(step.content)}</div>`;

    // Command block
    if (step.type === 'command' && step.command) {
      const escapedCmd = escapeHtml(step.command);
      bodyHtml += `
        <div class="code-block" data-cmd="${escapedCmd}">
          <div class="code-block-header">
            <span class="code-block-label">Terminal command</span>
            <button class="copy-btn" data-copy="${escapedCmd}">Copy</button>
          </div>
          <code>${escapedCmd}</code>
        </div>`;
      if (step.commandExplanation) {
        bodyHtml += `<p class="code-explanation">↳ ${safeContent(step.commandExplanation)}</p>`;
      }
    }

    // Checklist
    if (step.type === 'checklist' && Array.isArray(step.checklist)) {
      const items = step.checklist.map(item =>
        `<li>${safeContent(item)}</li>`
      ).join('');
      bodyHtml += `<ul class="step-checklist">${items}</ul>`;
    }

    // Quiz
    if (step.type === 'quiz' && Array.isArray(step.options)) {
      const optionsHtml = step.options.map((opt, i) =>
        `<label class="quiz-option" data-idx="${i}">
          <input type="radio" name="quiz-${escapeHtml(step.stepId)}" value="${i}">
          <span class="quiz-option-text">${escapeHtml(opt)}</span>
        </label>`
      ).join('');
      bodyHtml += `
        <div class="quiz-options" id="quiz-opts-${escapeHtml(step.stepId)}">${optionsHtml}</div>
        <button class="quiz-check-btn" data-step="${escapeHtml(step.stepId)}" data-correct="${step.correctIndex}">Check Answer</button>
        <div class="quiz-feedback" id="quiz-fb-${escapeHtml(step.stepId)}"></div>`;
      if (step.explanation) {
        bodyHtml += `<div class="quiz-explanation hidden" id="quiz-exp-${escapeHtml(step.stepId)}">${safeContent(step.explanation)}</div>`;
      }
    }

    return `
      <div class="step${typeClass}">
        <div class="step-number">${numberLabel}</div>
        <div class="step-body">${bodyHtml}</div>
      </div>`;
  }

  function renderLesson(lessonId) {
    const found = findLesson(lessonId);
    if (!found) return;
    const { module, lesson } = found;
    const { prevId, nextId } = getAdjacentIds(lessonId);
    const complete = isComplete(lessonId);

    // Module label style
    const labelStyle = `background: ${module.moduleColor}22; color: ${module.moduleColor}; border: 1px solid ${module.moduleColor}44;`;

    // Steps HTML
    const stepsHtml = lesson.steps.map((step, i) => renderStep(step, i)).join('');

    // Complete button
    const completeBtnHtml = complete
      ? `<button class="mark-complete-btn is-complete" disabled>✓ Completed</button>`
      : `<button class="mark-complete-btn" id="mark-complete-btn">Mark Lesson Complete</button>`;

    const html = `
      <div class="lesson-wrapper">
        <div class="lesson-header">
          <span class="module-label" style="${labelStyle}">Module ${module.moduleId}: ${escapeHtml(module.moduleTitle)}</span>
          <h1 class="lesson-title">${escapeHtml(lesson.title)}</h1>
          <p class="lesson-intro">${safeContent(lesson.intro)}</p>
          <div class="lesson-meta">
            <span>⏱ ${lesson.estimatedMinutes} min</span>
            <span>${lesson.steps.length} steps</span>
          </div>
        </div>
        <div class="steps-container">${stepsHtml}</div>
        <div class="lesson-footer">
          ${completeBtnHtml}
          <div class="nav-buttons">
            <button class="nav-btn" id="prev-btn" ${!prevId ? 'disabled' : ''}>← Previous</button>
            <button class="nav-btn" id="next-btn" ${!nextId ? 'disabled' : ''}>Next →</button>
          </div>
        </div>
      </div>`;

    const contentEl = document.getElementById('content');
    contentEl.innerHTML = html;
    contentEl.scrollTop = 0;
    window.scrollTo(0, 0);

    // Attach events
    const markBtn = document.getElementById('mark-complete-btn');
    if (markBtn) {
      markBtn.addEventListener('click', () => {
        markComplete(lessonId);
        markBtn.textContent = '✓ Completed';
        markBtn.classList.add('is-complete');
        markBtn.disabled = true;
        updateProgressUI();
        updateSidebarItem(lessonId, true);
        // Pulse the Next button
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn && !nextBtn.disabled) {
          nextBtn.classList.add('pulse');
          setTimeout(() => nextBtn.classList.remove('pulse'), 600);
        }
        // Trigger completion screen if last lesson
        if (lessonId === window.LESSON_INDEX[window.LESSON_INDEX.length - 1]) {
          setTimeout(showCompletion, 800);
        }
      });
    }

    document.getElementById('prev-btn')?.addEventListener('click', () => {
      if (prevId) navigateTo(prevId);
    });

    document.getElementById('next-btn')?.addEventListener('click', () => {
      if (nextId) navigateTo(nextId);
    });

    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => copyText(btn, btn.dataset.copy));
    });

    // Quiz check buttons
    document.querySelectorAll('.quiz-check-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const stepId = btn.dataset.step;
        const correct = parseInt(btn.dataset.correct, 10);
        const selected = document.querySelector(`input[name="quiz-${stepId}"]:checked`);
        const fb = document.getElementById(`quiz-fb-${stepId}`);
        const exp = document.getElementById(`quiz-exp-${stepId}`);

        if (!selected) {
          fb.textContent = 'Please select an answer first.';
          fb.className = 'quiz-feedback quiz-neutral';
          return;
        }

        const selectedIdx = parseInt(selected.value, 10);
        const allRadios = document.querySelectorAll(`input[name="quiz-${stepId}"]`);
        const allOptions = document.querySelectorAll(`#quiz-opts-${stepId} .quiz-option`);

        // Disable all options
        allRadios.forEach(r => r.disabled = true);
        allOptions.forEach(opt => opt.style.cursor = 'default');

        if (selectedIdx === correct) {
          fb.textContent = '✓ Correct!';
          fb.className = 'quiz-feedback quiz-correct';
          allOptions[correct].classList.add('correct');
          btn.disabled = true;
          btn.textContent = '✓ Answered';
        } else {
          fb.textContent = '✗ Not quite — see the explanation below.';
          fb.className = 'quiz-feedback quiz-wrong';
          allOptions[selectedIdx].classList.add('wrong');
          allOptions[correct].classList.add('correct');
          btn.disabled = true;
          btn.textContent = 'See Answer';
        }

        if (exp) exp.classList.remove('hidden');
      });
    });

    // Close mobile sidebar when navigating
    closeMobileSidebar();
  }

  // ============================================================
  // Completion screen
  // ============================================================

  function showCompletion() {
    launchConfetti();
    const contentEl = document.getElementById('content');
    contentEl.innerHTML = `
      <div class="completion-screen">
        <span class="completion-emoji">🎉</span>
        <h1>You did it!</h1>
        <p>You've completed all ${TOTAL_LESSONS} lessons. You know how to use Claude Code, manage code with GitHub, deploy a live website — and use Claude's power features like agents, skills, context, structured workspaces, and MCP-connected knowledge bases.</p>
        <div class="completion-stats">
          <div class="stat-box">
            <span class="stat-number">${TOTAL_LESSONS}</span>
            <span class="stat-label">Lessons completed</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">${window.LESSONS.length}</span>
            <span class="stat-label">Modules finished</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">1</span>
            <span class="stat-label">Live website deployed</span>
          </div>
        </div>
        <p style="font-weight: 600; color: #111827;">What to do next:</p>
        <p>Copy your Vercel URL and share it! Then keep building — ask Claude to add new features, try a different project, or explore more of what Claude Code can do.</p>
        <div class="completion-actions">
          <button class="btn-secondary" id="restart-btn">Review lessons again</button>
        </div>
      </div>`;
    document.getElementById('restart-btn')?.addEventListener('click', () => {
      navigateTo(window.LESSON_INDEX[0]);
    });
  }

  function launchConfetti() {
    const colors = ['#0070f3', '#7c3aed', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.cssText = `
        left: ${Math.random() * 100}vw;
        top: -10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        animation-duration: ${1.5 + Math.random() * 2}s;
        animation-delay: ${Math.random() * 0.8}s;
        width: ${6 + Math.random() * 6}px;
        height: ${6 + Math.random() * 6}px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      `;
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4000);
    }
  }

  // ============================================================
  // Navigation
  // ============================================================

  function navigateTo(lessonId) {
    if (!window.LESSON_INDEX.includes(lessonId)) return;
    progress.currentLesson = lessonId;
    saveProgress(progress);
    window.location.hash = lessonId;
    renderLesson(lessonId);
    updateSidebarActive(lessonId);
  }

  // ============================================================
  // Sidebar rendering
  // ============================================================

  function renderSidebar() {
    const container = document.getElementById('module-list');
    let html = '';

    window.LESSONS.forEach(module => {
      const dotStyle = `background: ${module.moduleColor};`;
      const lessonsHtml = module.lessons.map(lesson => {
        const complete = isComplete(lesson.lessonId);
        const active = progress.currentLesson === lesson.lessonId;
        const classes = ['lesson-item', complete ? 'completed' : '', active ? 'active' : ''].filter(Boolean).join(' ');
        return `
          <li class="${classes}" data-lesson-id="${lesson.lessonId}">
            <a href="#${lesson.lessonId}" data-lesson="${lesson.lessonId}">
              <span class="check-icon"></span>
              ${escapeHtml(lesson.title)}
            </a>
          </li>`;
      }).join('');

      html += `
        <div class="module" data-module-id="${module.moduleId}">
          <button class="module-toggle">
            <span class="module-dot" style="${dotStyle}"></span>
            Module ${module.moduleId}: ${escapeHtml(module.moduleTitle)}
            <span class="module-chevron">▼</span>
          </button>
          <ul class="lesson-list">${lessonsHtml}</ul>
        </div>`;
    });

    container.innerHTML = html;

    // Attach lesson link events
    container.querySelectorAll('a[data-lesson]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        navigateTo(link.dataset.lesson);
      });
    });

    // Attach module toggle events
    container.querySelectorAll('.module-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.module').classList.toggle('collapsed');
      });
    });
  }

  function updateSidebarActive(lessonId) {
    document.querySelectorAll('.lesson-item').forEach(item => {
      item.classList.toggle('active', item.dataset.lessonId === lessonId);
    });
  }

  function updateSidebarItem(lessonId, complete) {
    const item = document.querySelector(`.lesson-item[data-lesson-id="${lessonId}"]`);
    if (item && complete) item.classList.add('completed');
  }

  function updateProgressUI() {
    const pct = getProgressPct();
    const text = `${progress.completedLessons.length} of ${TOTAL_LESSONS} lessons complete`;

    const bar = document.getElementById('progress-bar');
    const textEl = document.getElementById('progress-text');
    const topBar = document.getElementById('topbar-progress-bar');

    if (bar) bar.style.width = `${pct}%`;
    if (textEl) textEl.textContent = text;
    if (topBar) topBar.style.width = `${pct}%`;
  }

  // ============================================================
  // Copy to clipboard
  // ============================================================

  async function copyText(btn, text) {
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    } catch (e) {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = text;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    }
  }

  // ============================================================
  // Mobile sidebar
  // ============================================================

  function openMobileSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebar-overlay').classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('visible');
    document.body.style.overflow = '';
  }

  // ============================================================
  // Keyboard navigation
  // ============================================================

  function setupKeyboard() {
    document.addEventListener('keydown', e => {
      // Don't intercept if user is typing in an input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const currentId = progress.currentLesson;
      const { prevId, nextId } = getAdjacentIds(currentId);

      if (e.key === 'ArrowRight' || e.key === 'n') {
        if (nextId) navigateTo(nextId);
      } else if (e.key === 'ArrowLeft' || e.key === 'p') {
        if (prevId) navigateTo(prevId);
      } else if (e.key === 'm') {
        if (!isComplete(currentId)) {
          markComplete(currentId);
          updateProgressUI();
          updateSidebarItem(currentId, true);
          // Re-render to show completed state
          renderLesson(currentId);
        }
      } else if (e.key === 'Escape') {
        closeMobileSidebar();
      }
    });
  }

  // ============================================================
  // Hash routing
  // ============================================================

  function getLessonFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash && window.LESSON_INDEX.includes(hash)) return hash;
    return null;
  }

  window.addEventListener('hashchange', () => {
    const id = getLessonFromHash();
    if (id && id !== progress.currentLesson) {
      progress.currentLesson = id;
      saveProgress(progress);
      renderLesson(id);
      updateSidebarActive(id);
    }
  });

  // ============================================================
  // Init
  // ============================================================

  const progress = loadProgress();

  document.addEventListener('DOMContentLoaded', () => {
    // Render sidebar
    renderSidebar();
    updateProgressUI();

    // Mobile sidebar toggle
    document.getElementById('sidebar-toggle')?.addEventListener('click', openMobileSidebar);
    document.getElementById('sidebar-overlay')?.addEventListener('click', closeMobileSidebar);

    // Keyboard nav
    setupKeyboard();

    // Navigate to starting lesson
    const hashLesson = getLessonFromHash();
    const startLesson = hashLesson || progress.currentLesson || window.LESSON_INDEX[0];
    navigateTo(startLesson);
  });

})();
