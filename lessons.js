// All lesson content for the Claude Code Beginner Guide
// Structure: window.LESSONS = array of modules, each with array of lessons, each with array of steps

window.LESSONS = [

  // ============================================================
  // MODULE 0: Before You Start
  // ============================================================
  {
    moduleId: 0,
    moduleTitle: "Before You Start",
    moduleColor: "#6366f1",
    lessons: [

      {
        lessonId: "0-0",
        title: "What is a Terminal?",
        estimatedMinutes: 5,
        intro: "Before we can use Claude Code, we need to get comfortable with the terminal — a text-based way to give your computer instructions. Don't worry, it's much simpler than it looks!",
        steps: [
          {
            stepId: "0-0-0",
            type: "info",
            title: "Think of the terminal like texting your computer",
            content: "When you use a regular app, you click buttons and icons. The terminal is different — you type commands, press Enter, and your computer does what you asked. It's like sending a text message to your computer and getting a reply back."
          },
          {
            stepId: "0-0-1",
            type: "info",
            title: "How to open the terminal on a Mac",
            content: "Press <strong>Command (⌘) + Space</strong> to open Spotlight Search. Type <strong>Terminal</strong> and press Enter. A window with a dark or white background and a blinking cursor will open — that's your terminal!"
          },
          {
            stepId: "0-0-2",
            type: "info",
            title: "How to open the terminal on Windows",
            content: "Press the <strong>Windows key</strong>, type <strong>Terminal</strong> or <strong>cmd</strong>, and press Enter. If you don't see Terminal, look for <strong>Command Prompt</strong>. Either works for our purposes."
          },
          {
            stepId: "0-0-2b",
            type: "tip",
            title: "Even easier: use VSCode's built-in terminal",
            content: "Since you're using VSCode, you have a terminal right inside your editor. Go to <strong>Terminal → New Terminal</strong> in the menu, or press <strong>Ctrl + ` </strong> (backtick). A terminal panel opens at the bottom — you never need to switch apps."
          },
          {
            stepId: "0-0-3",
            type: "info",
            title: "What you'll see: the prompt",
            content: "When the terminal opens, you'll see a line ending in <code>$</code> or <code>%</code> (Mac) or <code>&gt;</code> (Windows). This is called the <strong>prompt</strong> — it means the terminal is ready and waiting for your command."
          },
          {
            stepId: "0-0-4",
            type: "command",
            title: "Try your very first command",
            content: "Type this exactly as shown and press Enter. You should see your computer reply with the word <strong>hello</strong>.",
            command: "echo hello",
            commandExplanation: "echo means \"print this text on screen\". Your computer will reply: hello — and you just ran your first command!"
          },
          {
            stepId: "0-0-5",
            type: "warning",
            title: "Important: never copy the dollar sign $",
            content: "In guides like this one, commands are sometimes shown with a <code>$</code> at the start (e.g. <code>$ echo hello</code>). The <code>$</code> represents the prompt — it's already there in your terminal. Only type what comes <em>after</em> the <code>$</code>."
          },
          {
            stepId: "0-0-6",
            type: "tip",
            title: "Tip: the terminal is case-sensitive",
            content: "Commands must be typed in the exact case shown. <code>echo hello</code> works, but <code>Echo Hello</code> might not. When in doubt, use lowercase."
          }
        ]
      },

      {
        lessonId: "0-1",
        title: "Accounts You'll Need",
        estimatedMinutes: 10,
        intro: "Before we install anything, let's create the three free accounts you'll need for this course. Having all three ready now will make everything much smoother.",
        steps: [
          {
            stepId: "0-1-0",
            type: "info",
            title: "You'll need three accounts — all free",
            content: "Here's a quick overview of what each one is for:\n\n• <strong>GitHub</strong> — stores your code online, like Google Drive for code\n• <strong>Vercel</strong> — publishes your website so anyone on the internet can see it\n• <strong>Anthropic</strong> — gives you access to Claude Code (the AI assistant you'll be using)\n\nTip: use the same email address for all three — it keeps things simple!"
          },
          {
            stepId: "0-1-1",
            type: "info",
            title: "Step 1: Create a GitHub account",
            content: "1. Go to <strong>github.com</strong>\n2. Click <strong>Sign up</strong>\n3. Enter your email, create a password, and choose a username\n4. Verify your email when GitHub sends you a confirmation\n\nYour GitHub username will be part of your public profile, so choose something professional."
          },
          {
            stepId: "0-1-2",
            type: "info",
            title: "Step 2: Create a Vercel account",
            content: "1. Go to <strong>vercel.com</strong>\n2. Click <strong>Sign Up</strong>\n3. Choose <strong>Continue with GitHub</strong> — this links both accounts automatically\n4. Authorize Vercel to access your GitHub\n\nUsing GitHub login is the easiest option and skips an extra verification step."
          },
          {
            stepId: "0-1-3",
            type: "info",
            title: "Step 3: Create an Anthropic account",
            content: "1. Go to <strong>claude.ai</strong>\n2. Click <strong>Sign up</strong>\n3. Enter your email and create a password\n4. Verify your email\n\nClaude Code will ask you to log in the first time you use it in the terminal."
          },
          {
            stepId: "0-1-4",
            type: "checklist",
            title: "Checklist: make sure you have all three",
            content: "Before moving on, confirm you've created all three accounts:",
            checklist: [
              "GitHub account created and email verified",
              "Vercel account created (using GitHub login)",
              "Anthropic / Claude account created and email verified"
            ]
          },
          {
            stepId: "0-1-5",
            type: "tip",
            title: "Tip: save your passwords in a password manager",
            content: "You'll be logging into these accounts often. Save your passwords now in your browser's built-in password manager or an app like 1Password or Bitwarden."
          }
        ]
      },

      {
        lessonId: "0-2",
        title: "Installing VSCode & Claude Code",
        estimatedMinutes: 8,
        intro: "You'll set up VSCode — the code editor you'll be working in — and install the Claude Code extension that gives you an AI assistant right inside your editor.",
        steps: [
          {
            stepId: "0-2-0",
            type: "info",
            title: "What is VSCode?",
            content: "VSCode (Visual Studio Code) is a free code editor made by Microsoft. It's where you'll see, edit, and manage all your project files. Think of it as Word for code — but much more powerful. It has a built-in terminal, file explorer, and thousands of extensions including Claude Code."
          },
          {
            stepId: "0-2-1",
            type: "info",
            title: "Step 1: Download and install VSCode",
            content: "1. Go to <strong>code.visualstudio.com</strong>\n2. Click the big download button (it auto-detects your operating system)\n3. Run the installer and follow the prompts — just click Next/Continue\n4. Open VSCode when installation finishes\n\nYou'll see a welcome screen. That's your new home for coding!"
          },
          {
            stepId: "0-2-2",
            type: "info",
            title: "Step 2: Install the Claude Code extension",
            content: "Inside VSCode:\n1. Click the <strong>Extensions icon</strong> in the left sidebar — it looks like 4 squares\n2. In the search bar at the top, type <strong>Claude Code</strong>\n3. Find the extension published by <strong>Anthropic</strong>\n4. Click the blue <strong>Install</strong> button\n\nAfter a few seconds, a Claude icon will appear in your left sidebar."
          },
          {
            stepId: "0-2-3",
            type: "info",
            title: "Step 3: Sign in to your Anthropic account",
            content: "1. Click the <strong>Claude icon</strong> in the left sidebar to open the panel\n2. Click <strong>Sign in</strong>\n3. A browser window will open — log in with the Anthropic account you created\n4. Come back to VSCode after signing in\n\nThe Claude panel will now show a chat input at the bottom. You're ready to build!"
          },
          {
            stepId: "0-2-4",
            type: "checklist",
            title: "Checklist: everything in place",
            content: "Make sure you have all of this set up before moving on:",
            checklist: [
              "VSCode is installed and open on your computer",
              "Claude Code extension is installed (Anthropic, from the Extensions panel)",
              "You're signed in with your Anthropic account",
              "The Claude icon is visible in the VSCode left sidebar"
            ]
          },
          {
            stepId: "0-2-5",
            type: "tip",
            title: "Tip: keep the Claude panel open while you work",
            content: "You can keep the Claude chat panel open on the right side while your files are open on the left. Ask Claude questions, see its suggestions, approve changes — all without ever leaving VSCode."
          }
        ]
      }
    ]
  },

  // ============================================================
  // MODULE 1: Claude Code in VSCode
  // ============================================================
  {
    moduleId: 1,
    moduleTitle: "Claude Code in VSCode",
    moduleColor: "#7c3aed",
    lessons: [

      {
        lessonId: "1-0",
        title: "Opening a Project in VSCode",
        estimatedMinutes: 6,
        intro: "Before Claude can help you, you need to open a project folder in VSCode. This gives Claude access to all your files so it knows exactly what it's working with.",
        steps: [
          {
            stepId: "1-0-0",
            type: "info",
            title: "What is a 'project folder' in VSCode?",
            content: "VSCode works with folders, not just individual files. When you open a folder, VSCode treats it as your project — showing all files in the left sidebar and giving Claude access to everything inside. Always open a folder, not a single file."
          },
          {
            stepId: "1-0-1",
            type: "info",
            title: "Step 1: Create a new folder for your project",
            content: "Create a folder on your Desktop or Documents and name it <code>my-first-project</code>.\n\n• <strong>Mac</strong>: In Finder, right-click → New Folder\n• <strong>Windows</strong>: In File Explorer, right-click → New Folder\n\nThis folder will hold all your project files."
          },
          {
            stepId: "1-0-2",
            type: "info",
            title: "Step 2: Open the folder in VSCode",
            content: "In VSCode:\n1. Go to <strong>File → Open Folder...</strong>\n2. Navigate to your <code>my-first-project</code> folder\n3. Click <strong>Open</strong>\n\nThe Explorer panel on the left will now show your empty project folder. You're in."
          },
          {
            stepId: "1-0-3",
            type: "info",
            title: "The VSCode interface at a glance",
            content: "Here's what you'll see:\n\n• <strong>Left sidebar</strong> — your project files (Explorer)\n• <strong>Main area</strong> — the editor where files open for viewing/editing\n• <strong>Bottom panel</strong> — the terminal (press Ctrl + ` to open it)\n• <strong>Claude icon</strong> in the sidebar — your AI assistant\n\nYou'll use all of these as you build."
          },
          {
            stepId: "1-0-4",
            type: "info",
            title: "Step 3: Open the Claude panel",
            content: "Click the <strong>Claude icon</strong> in the left sidebar (it looks like the Claude logo). The chat panel will open — usually on the right side of your screen. Claude is now ready and can see your project folder."
          },
          {
            stepId: "1-0-5",
            type: "tip",
            title: "Always open a folder, not just a file",
            content: "If you open a single file (like index.html), Claude won't have visibility into your whole project. Always use <strong>File → Open Folder</strong> so Claude has all the context it needs to help you effectively."
          }
        ]
      },

      {
        lessonId: "1-1",
        title: "Chatting with Claude in VSCode",
        estimatedMinutes: 8,
        intro: "The Claude panel works like a chat. You type what you want in plain English, Claude reads your project files, writes code, and proposes changes — all without leaving VSCode.",
        steps: [
          {
            stepId: "1-1-0",
            type: "info",
            title: "Claude already knows your project",
            content: "Because you opened a folder, Claude can see all the files inside it. You don't need to paste code into the chat — just describe what you want. Claude reads the relevant files itself and proposes targeted changes."
          },
          {
            stepId: "1-1-1",
            type: "info",
            title: "How to send a message",
            content: "In the Claude panel:\n1. Click the text input at the bottom\n2. Type your request in plain English\n3. Press <strong>Enter</strong> to send\n\nClaude will read your project and respond — often showing what it wants to create or change."
          },
          {
            stepId: "1-1-2",
            type: "info",
            title: "Try this example prompt right now",
            content: "With your empty project folder open, type this in the Claude panel:\n\n<em>\"Create a simple webpage called index.html with a heading that says Hello World, a short welcome message, and a light blue background. Make the text dark so it's readable.\"</em>\n\nPress Enter and watch what Claude does."
          },
          {
            stepId: "1-1-3",
            type: "info",
            title: "Be specific to get better results",
            content: "The more detail you give, the better. Compare:\n\n❌ \"Make a website\" — too vague\n\n✓ \"Create index.html with a white background, a centered heading with my name, a 2-sentence bio, and a blue button at the bottom that says Contact Me\"\n\nThink of Claude as a contractor: precise instructions lead to better results."
          },
          {
            stepId: "1-1-4",
            type: "info",
            title: "You can reference files by name",
            content: "Mention specific files in your message and Claude will focus on those:\n\n<em>\"In index.html, change the background to white.\"</em>\n<em>\"Add a footer to the bottom of index.html.\"</em>\n<em>\"Create a style.css file and link it to index.html.\"</em>"
          },
          {
            stepId: "1-1-5",
            type: "tip",
            title: "Tip: if Claude misunderstands, just correct it",
            content: "Claude isn't always perfect on the first try. Reply in the same chat:\n\n<em>\"That's not quite right — I meant the heading should be centered, not left-aligned.\"</em>\n\nClaude uses the full conversation history, so you don't need to repeat yourself."
          }
        ]
      },

      {
        lessonId: "1-2",
        title: "Reviewing and Approving Changes",
        estimatedMinutes: 7,
        intro: "Claude never edits your files silently. Every change is shown to you first. Let's learn how to read proposals and approve, decline, or ask for adjustments.",
        steps: [
          {
            stepId: "1-2-0",
            type: "info",
            title: "Claude always shows changes before making them",
            content: "When Claude wants to create or edit a file, it shows the proposed content in the chat panel. Nothing happens until you approve. You are always in control."
          },
          {
            stepId: "1-2-1",
            type: "info",
            title: "Reading a diff: green and red",
            content: "When Claude edits an existing file, it shows a diff — the difference between old and new:\n\n• Lines in <strong style=\"color:#22c55e\">green</strong> are being <strong>added</strong>\n• Lines in <strong style=\"color:#ef4444\">red</strong> are being <strong>removed</strong>\n\nYou don't need to understand every line — just scan it to make sure it matches what you asked for."
          },
          {
            stepId: "1-2-2",
            type: "info",
            title: "How to approve a change",
            content: "After Claude proposes a change, you'll see an <strong>Accept</strong> button (or similar) in the panel:\n\n• Click <strong>Accept</strong> — Claude writes the change to the file\n• Click <strong>Decline</strong> — the file stays unchanged\n\nYou can also type a reply: \"looks good, go ahead\" or \"no, let me change something first\"."
          },
          {
            stepId: "1-2-3",
            type: "info",
            title: "How to ask for a revision",
            content: "If the proposal is close but not right, reply with what you'd like adjusted:\n\n<em>\"I like this but make the heading bigger.\"</em>\n<em>\"That's good except make the background white instead of blue.\"</em>\n\nClaude will revise and show you a new proposal."
          },
          {
            stepId: "1-2-4",
            type: "warning",
            title: "Always read before you approve",
            content: "It only takes 10 seconds to scan what Claude proposes. Build this habit — it saves a lot of frustration. You can undo mistakes, but catching them before they happen is faster."
          },
          {
            stepId: "1-2-5",
            type: "info",
            title: "Made a mistake? Easy to undo",
            content: "If you approved something that didn't work out:\n\n• Tell Claude: <em>\"That last change wasn't right — can you undo it?\"</em>\n• Or use VSCode's built-in undo: <strong>Ctrl + Z</strong> (Windows) / <strong>Cmd + Z</strong> (Mac)"
          },
          {
            stepId: "1-2-6",
            type: "tip",
            title: "Tip: ask Claude to explain before changing",
            content: "If you're unsure about a proposal, ask:\n\n<em>\"Before you make that change, can you explain in simple terms what it will do?\"</em>\n\nClaude will explain in plain English, and then you can decide whether to proceed."
          }
        ]
      },

      {
        lessonId: "1-3",
        title: "Your First Real File",
        estimatedMinutes: 10,
        intro: "Let's build something real! You'll use Claude to create a webpage, open it in your browser, and make your first edit — completing the full build-and-update cycle.",
        steps: [
          {
            stepId: "1-3-0",
            type: "info",
            title: "The goal: a working webpage in minutes",
            content: "By the end of this lesson, you'll have a real HTML file that displays in your browser. It's your first complete project — and the same foundation every website (including this one) is built on."
          },
          {
            stepId: "1-3-1",
            type: "info",
            title: "Step 1: Ask Claude to create your webpage",
            content: "In the Claude panel, send this message:\n\n<em>\"Create an index.html file for a simple personal homepage. Include my name as the main heading (use 'Your Name' as a placeholder), a short 2-sentence bio, and a list of 3 interests. Clean modern style — white background, dark text, centered layout.\"</em>"
          },
          {
            stepId: "1-3-2",
            type: "info",
            title: "Step 2: Review and approve",
            content: "Claude will show you the HTML it's about to create. Scan it quickly — it's okay if you don't understand every line. If it looks like a reasonable webpage structure, click <strong>Accept</strong>.\n\nThe file <code>index.html</code> will now appear in your project's Explorer panel on the left."
          },
          {
            stepId: "1-3-3",
            type: "info",
            title: "Step 3: Install Live Server (highly recommended)",
            content: "Live Server auto-refreshes your browser whenever you save a file. To install it:\n\n1. Click the Extensions icon in the VSCode sidebar\n2. Search for <strong>Live Server</strong> by Ritwick Dey\n3. Click <strong>Install</strong>\n\nAfter installing, right-click <code>index.html</code> in the Explorer and choose <strong>Open with Live Server</strong>."
          },
          {
            stepId: "1-3-4",
            type: "info",
            title: "Step 3 (alternative): Open the file directly",
            content: "If you prefer not to install Live Server:\n\n• In VSCode's Explorer, right-click <code>index.html</code>\n• Select <strong>Reveal in Finder</strong> (Mac) or <strong>Reveal in File Explorer</strong> (Windows)\n• Double-click the file to open it in your browser\n\nYou'll need to manually refresh after each change."
          },
          {
            stepId: "1-3-5",
            type: "info",
            title: "Step 4: Make your first change",
            content: "Go back to the Claude panel and ask:\n\n<em>\"Can you change the background color to a soft light blue, like #e8f4fd?\"</em>\n\nApprove the change — your browser will update automatically with Live Server, or refresh manually to see it."
          },
          {
            stepId: "1-3-6",
            type: "info",
            title: "This is the core workflow",
            content: "You just completed the full loop:\n\n1. <strong>Ask</strong> Claude for what you want\n2. <strong>Review</strong> the proposed change\n3. <strong>Accept</strong> it\n4. <strong>See</strong> the result in your browser\n5. <strong>Repeat</strong>\n\nThis is how you'll build everything from here."
          },
          {
            stepId: "1-3-7",
            type: "tip",
            title: "Keep experimenting!",
            content: "There's no limit to what you can ask. Try:\n\n• \"Add a profile photo placeholder with a gray circle\"\n• \"Change the font to something more modern\"\n• \"Add a footer with my email address\"\n\nEvery change is safe — Claude always asks before modifying anything."
          }
        ]
      }
    ]
  },

  // ============================================================
  // MODULE 2: GitHub Basics
  // ============================================================
  {
    moduleId: 2,
    moduleTitle: "GitHub Basics",
    moduleColor: "#0ea5e9",
    lessons: [

      {
        lessonId: "2-0",
        title: "What is GitHub?",
        estimatedMinutes: 6,
        intro: "Before we start using GitHub, let's understand what it is and why every developer — from beginners to Google engineers — uses it.",
        steps: [
          {
            stepId: "2-0-0",
            type: "info",
            title: "GitHub is like Google Drive — but for code",
            content: "Just like Google Drive stores your documents in the cloud so you can access them anywhere and share them with others, GitHub stores your code in the cloud. The main differences:\n\n• GitHub tracks <em>every change</em> you've ever made, with timestamps and notes\n• GitHub lets multiple people work on the same project simultaneously\n• GitHub is required by most hosting services (including Vercel) to deploy your site"
          },
          {
            stepId: "2-0-1",
            type: "info",
            title: "Key terms you'll hear",
            content: "<strong>Repository (repo)</strong> — your project's folder on GitHub. Every project gets its own repo.\n\n<strong>Commit</strong> — a saved snapshot of your code at a specific moment. Like a \"save point\" in a video game.\n\n<strong>Push</strong> — sending your latest commits from your computer up to GitHub.\n\n<strong>Pull</strong> — downloading the latest changes from GitHub to your computer.\n\n<strong>Branch</strong> — a separate copy of your code for experimenting, without affecting the main version."
          },
          {
            stepId: "2-0-2",
            type: "info",
            title: "Why do you need GitHub for Vercel?",
            content: "Vercel (the service that publishes your website) needs to know where your code is. When you connect your GitHub repo to Vercel:\n\n• Vercel reads your code from GitHub\n• Every time you push new code to GitHub, Vercel automatically republishes your site\n• Your live website is always in sync with your latest code"
          },
          {
            stepId: "2-0-3",
            type: "info",
            title: "Git vs. GitHub — what's the difference?",
            content: "<strong>Git</strong> is a program installed on your computer that tracks changes to your files. It's the engine.\n\n<strong>GitHub</strong> is a website that stores your Git history in the cloud. It's the garage.\n\nWhen you \"push to GitHub\", Git on your computer sends your saved history up to the GitHub website. Claude will handle all the Git commands for you."
          },
          {
            stepId: "2-0-4",
            type: "tip",
            title: "Good news: Claude does all the Git commands",
            content: "You don't need to memorize any Git commands. In the next lessons, you'll just tell Claude \"push my changes to GitHub\" and Claude will handle everything — adding files, creating commits, and pushing. You're the director; Claude is the crew."
          }
        ]
      },

      {
        lessonId: "2-1",
        title: "Creating Your First Repository",
        estimatedMinutes: 8,
        intro: "Let's create a home on GitHub for your project. This is called a repository, and it only takes about 2 minutes to set up.",
        steps: [
          {
            stepId: "2-1-0",
            type: "info",
            title: "What we're doing",
            content: "We'll create an empty repository on GitHub's website. Then in the next lesson, we'll connect it to the project folder on your computer and send your files up. Think of this as creating an empty folder on GitHub before filling it."
          },
          {
            stepId: "2-1-1",
            type: "info",
            title: "Step 1: Go to GitHub and start a new repo",
            content: "1. Go to <strong>github.com</strong> and log in\n2. Click the <strong>+</strong> button in the top-right corner\n3. Select <strong>New repository</strong>"
          },
          {
            stepId: "2-1-2",
            type: "info",
            title: "Step 2: Fill in the repository details",
            content: "• <strong>Repository name</strong>: type <code>my-first-project</code> (match your local folder name)\n• <strong>Description</strong>: optional — add something like \"My first webpage project\"\n• <strong>Visibility</strong>: select <strong>Public</strong> (required for free Vercel hosting)\n• <strong>Initialize this repository</strong>: leave all checkboxes UNCHECKED\n\nThen click the green <strong>Create repository</strong> button."
          },
          {
            stepId: "2-1-3",
            type: "warning",
            title: "Do NOT check the README or .gitignore boxes",
            content: "When creating the repo, leave all the \"Initialize this repository\" options unchecked. If you add a README or .gitignore through GitHub's interface, it can create a conflict when you try to connect your local files. We'll add those through Claude instead."
          },
          {
            stepId: "2-1-4",
            type: "info",
            title: "Step 3: Copy your repository URL",
            content: "After creating the repo, GitHub shows you a page with setup instructions. Near the top you'll see a URL that looks like:\n\n<code>https://github.com/yourusername/my-first-project.git</code>\n\nCopy this URL — you'll need it in the next lesson to connect your local project."
          },
          {
            stepId: "2-1-5",
            type: "tip",
            title: "Tip: keep this tab open",
            content: "Leave the GitHub tab open after creating the repo. You'll reference the URL in the next lesson, and later you'll come back to this page to see your files after pushing them."
          }
        ]
      },

      {
        lessonId: "2-2",
        title: "Connecting and Pushing with Claude",
        estimatedMinutes: 12,
        intro: "Time to connect your local project to GitHub and push your files up! You'll let Claude handle all the Git commands while you provide the GitHub URL.",
        steps: [
          {
            stepId: "2-2-0",
            type: "info",
            title: "How this works",
            content: "Git needs to know three things before it can push your files:\n1. Where to send them (your GitHub repo URL)\n2. Which files to include (all of them, in our case)\n3. A message describing what you're sending (the commit message)\n\nYou'll tell Claude your repo URL, and Claude will handle the rest."
          },
          {
            stepId: "2-2-1",
            type: "info",
            title: "Step 1: Tell Claude to connect to GitHub",
            content: "In your Claude session (make sure you're in the <code>my-first-project</code> folder), type:\n\n<em>\"Help me connect this project to GitHub and push all my files. My GitHub repository URL is: https://github.com/YOURUSERNAME/my-first-project.git\"</em>\n\nReplace YOURUSERNAME with your actual GitHub username."
          },
          {
            stepId: "2-2-2",
            type: "info",
            title: "Step 2: Claude will run several Git commands",
            content: "Claude will propose running a series of commands:\n• <code>git init</code> — initializes Git tracking in your folder\n• <code>git add .</code> — stages all your files to be saved\n• <code>git commit -m \"Initial commit\"</code> — saves a snapshot with a message\n• <code>git remote add origin [url]</code> — links your folder to GitHub\n• <code>git push -u origin main</code> — sends everything to GitHub\n\nApprove each one as Claude proposes them."
          },
          {
            stepId: "2-2-3",
            type: "info",
            title: "Step 3: Authenticate with GitHub",
            content: "When Git tries to push, it will ask for your GitHub credentials. <strong>Do not use your password</strong> — GitHub requires a Personal Access Token (PAT) instead. See the next step for how to create one."
          },
          {
            stepId: "2-2-4",
            type: "info",
            title: "How to create a GitHub Personal Access Token",
            content: "1. On GitHub, click your profile photo (top right) → <strong>Settings</strong>\n2. Scroll down to <strong>Developer settings</strong> (bottom of left sidebar)\n3. Click <strong>Personal access tokens</strong> → <strong>Tokens (classic)</strong>\n4. Click <strong>Generate new token</strong> → <strong>Generate new token (classic)</strong>\n5. Add a note (e.g. \"Claude Code access\")\n6. Set expiration to <strong>No expiration</strong> for convenience\n7. Check the <strong>repo</strong> checkbox\n8. Click <strong>Generate token</strong>\n9. <strong>Copy the token immediately</strong> — GitHub will never show it again!\n\nUse this token as your password when Git asks for credentials."
          },
          {
            stepId: "2-2-5",
            type: "warning",
            title: "Never share your Personal Access Token",
            content: "Your PAT is like a password — it gives access to your GitHub account. Never paste it into a chat, share it in a screenshot, or add it to a file you're about to push to GitHub. Store it somewhere private, like a password manager."
          },
          {
            stepId: "2-2-6",
            type: "info",
            title: "Step 4: Verify on GitHub",
            content: "Once the push succeeds, go back to your GitHub repository page in your browser and refresh it. You should now see your project files listed there — including your <code>index.html</code>. Congratulations, your code is on the internet!"
          },
          {
            stepId: "2-2-7",
            type: "tip",
            title: "Tip: save your token in a password manager",
            content: "You'll need this token every time you push to GitHub (unless you set up SSH keys later). Save it in your browser's password manager or an app like Bitwarden, 1Password, or even a secure note."
          }
        ]
      },

      {
        lessonId: "2-3",
        title: "Making Changes and Pushing Updates",
        estimatedMinutes: 8,
        intro: "Now that your project is on GitHub, let's practice the update cycle — make a change locally, then push it so GitHub stays in sync.",
        steps: [
          {
            stepId: "2-3-0",
            type: "info",
            title: "The update cycle",
            content: "From now on, every time you make changes to your project, you'll follow this three-step pattern:\n\n1. <strong>Edit</strong> — use Claude to make changes to your files\n2. <strong>Commit</strong> — save a snapshot of those changes with a description\n3. <strong>Push</strong> — send that snapshot to GitHub\n\nProfessional developers do this dozens of times per day."
          },
          {
            stepId: "2-3-1",
            type: "info",
            title: "Step 1: Make a change with Claude",
            content: "Ask Claude to make any small improvement to your webpage:\n\n<em>\"Can you add a simple footer at the bottom of my index.html page with the current year and my name?\"</em>\n\nReview and approve the change as usual."
          },
          {
            stepId: "2-3-2",
            type: "info",
            title: "Step 2: Ask Claude to save your changes to GitHub",
            content: "Once you're happy with the change, tell Claude:\n\n<em>\"Please save my changes to GitHub with a commit message describing what was added.\"</em>\n\nClaude will run <code>git add</code>, <code>git commit</code>, and <code>git push</code> for you."
          },
          {
            stepId: "2-3-3",
            type: "info",
            title: "Step 3: Check GitHub to confirm",
            content: "Go to your GitHub repository page and refresh. You'll see:\n• The updated files\n• A new commit in the history\n• The commit message Claude wrote\n\nYou can click on any commit to see exactly what changed — the green/red diff view."
          },
          {
            stepId: "2-3-4",
            type: "info",
            title: "What commit messages are for",
            content: "A commit message is a note to your future self explaining what changed and why. Good examples:\n\n✓ <em>\"Add footer with contact info\"</em>\n✓ <em>\"Fix typo in homepage heading\"</em>\n✓ <em>\"Change background color to match brand\"</em>\n\nBad examples:\n\n❌ <em>\"stuff\"</em>\n❌ <em>\"changes\"</em>\n❌ <em>\"asdfgh\"</em>"
          },
          {
            stepId: "2-3-5",
            type: "tip",
            title: "Commit often — small and frequent is better",
            content: "It's better to make many small commits than one massive one. If something goes wrong, you can always look back at your commit history and see exactly when a change was made. Small commits make that much easier."
          }
        ]
      }
    ]
  },

  // ============================================================
  // MODULE 3: Deploy to the Web with Vercel
  // ============================================================
  {
    moduleId: 3,
    moduleTitle: "Deploy to the Web",
    moduleColor: "#0070f3",
    lessons: [

      {
        lessonId: "3-0",
        title: "What is Deployment?",
        estimatedMinutes: 5,
        intro: "Right now your website only exists on your computer. Deployment is how you publish it so that anyone, anywhere in the world, can visit it with a URL.",
        steps: [
          {
            stepId: "3-0-0",
            type: "info",
            title: "Think of deployment as publishing",
            content: "When you write a document on your computer, only you can see it. When you upload it to Google Docs and share the link, anyone can see it. Deployment is the same idea — it takes your website files off your computer and puts them on a server that's always connected to the internet."
          },
          {
            stepId: "3-0-1",
            type: "info",
            title: "What Vercel is",
            content: "<strong>Vercel</strong> is a hosting platform that:\n\n• Stores your website files on fast servers around the world\n• Gives you a public URL like <code>my-first-project.vercel.app</code>\n• Automatically republishes your site every time you push new code to GitHub\n• Has a generous free tier — no credit card needed\n\nVercel is used by millions of developers and is trusted by companies like The Washington Post."
          },
          {
            stepId: "3-0-2",
            type: "info",
            title: "How GitHub and Vercel work together",
            content: "Here's the magic of the setup we're building:\n\n1. You make a change on your computer\n2. You push it to GitHub\n3. Vercel notices the push automatically\n4. Vercel rebuilds and republishes your site — usually in under 30 seconds\n\nYou never have to manually upload files or tell Vercel to update. It's all automatic."
          },
          {
            stepId: "3-0-3",
            type: "info",
            title: "After this module, you'll have a real live URL",
            content: "By the end of the next two lessons, your website will have a real public URL that you can:\n\n• Share with friends and family\n• Put on your resume\n• Access from your phone\n• Show to anyone, anywhere in the world\n\nThis is the same process professionals use to launch websites."
          },
          {
            stepId: "3-0-4",
            type: "tip",
            title: "You can always upgrade or use a custom domain later",
            content: "Vercel's free tier is generous and completely fine for personal projects. Later, if you want to use your own domain name (like <code>yourname.com</code>), Vercel makes that easy too."
          }
        ]
      },

      {
        lessonId: "3-1",
        title: "Connecting Vercel to GitHub",
        estimatedMinutes: 10,
        intro: "Let's deploy your site! We'll connect Vercel to your GitHub repository and watch it go live in real time.",
        steps: [
          {
            stepId: "3-1-0",
            type: "info",
            title: "Step 1: Go to Vercel and log in",
            content: "Go to <strong>vercel.com</strong> and log in with your GitHub account (you set this up in Module 0)."
          },
          {
            stepId: "3-1-1",
            type: "info",
            title: "Step 2: Create a new project",
            content: "From your Vercel dashboard:\n1. Click the <strong>Add New...</strong> button (top right)\n2. Select <strong>Project</strong>"
          },
          {
            stepId: "3-1-2",
            type: "info",
            title: "Step 3: Import your GitHub repository",
            content: "Vercel will show you a list of your GitHub repositories:\n1. Find <strong>my-first-project</strong> in the list\n2. Click <strong>Import</strong> next to it\n\nIf you don't see your repo, click <strong>Adjust GitHub App Permissions</strong> to give Vercel access."
          },
          {
            stepId: "3-1-3",
            type: "info",
            title: "Step 4: Configure and deploy",
            content: "Vercel will show you a configuration page:\n\n• <strong>Project name</strong>: leave as-is or customize\n• <strong>Framework preset</strong>: select <strong>Other</strong> (since we're using plain HTML)\n• <strong>Root directory</strong>: leave as <code>./</code>\n• <strong>Build and Output settings</strong>: leave everything blank\n\nThen click the big <strong>Deploy</strong> button."
          },
          {
            stepId: "3-1-4",
            type: "info",
            title: "Step 5: Watch it deploy",
            content: "Vercel shows a live deployment log. You'll see it:\n1. Downloading your code from GitHub\n2. Building the project (very fast for static HTML)\n3. Deploying to their global servers\n\nThe whole process takes about 20-30 seconds."
          },
          {
            stepId: "3-1-5",
            type: "info",
            title: "Step 6: Get your live URL!",
            content: "When it's done, Vercel shows a success screen with confetti and your live URL — something like:\n\n<code>my-first-project-abc123.vercel.app</code>\n\nClick it — that's your live website, accessible from anywhere in the world!"
          },
          {
            stepId: "3-1-6",
            type: "tip",
            title: "Bookmark your live URL",
            content: "Copy and save your Vercel URL somewhere handy — you'll want to share it after the next lesson when you make one final update. Also bookmark your Vercel dashboard; it's where you'll see all your future projects and deployment history."
          }
        ]
      },

      {
        lessonId: "3-2",
        title: "Making Your First Live Update",
        estimatedMinutes: 8,
        intro: "The moment of truth: let's make a change to your project, push it to GitHub, and watch your live website update automatically. This is the full developer workflow!",
        steps: [
          {
            stepId: "3-2-0",
            type: "info",
            title: "The full cycle you've built",
            content: "Take a moment to appreciate what you've set up:\n\n✓ Claude Code — your AI coding assistant\n✓ A local project folder on your computer\n✓ A GitHub repository for version control\n✓ Vercel automatically deploying your site\n\nNow let's test the whole thing end-to-end."
          },
          {
            stepId: "3-2-1",
            type: "info",
            title: "Step 1: Make a change with Claude",
            content: "Open your Claude session in the project folder and ask for an improvement:\n\n<em>\"Add a small banner to the top of my index.html that says 'This site was built with Claude Code 🤖'. Make it stand out with a purple background and white text.\"</em>\n\nReview and approve the change."
          },
          {
            stepId: "3-2-2",
            type: "info",
            title: "Step 2: Push to GitHub",
            content: "Tell Claude:\n\n<em>\"Push this change to GitHub with a commit message.\"</em>\n\nClaude will commit and push the update. You'll see a confirmation message when it succeeds."
          },
          {
            stepId: "3-2-3",
            type: "info",
            title: "Step 3: Watch Vercel redeploy automatically",
            content: "Go to your Vercel dashboard. Within seconds of the GitHub push, you'll see a new deployment start automatically. Watch the progress bar — in about 30 seconds, the deployment will be complete."
          },
          {
            stepId: "3-2-4",
            type: "info",
            title: "Step 4: Refresh your live site",
            content: "Go to your Vercel URL (e.g. <code>my-first-project.vercel.app</code>) and refresh the page. Your purple banner should be there! You just deployed a real update to a live website."
          },
          {
            stepId: "3-2-5",
            type: "info",
            title: "This is the professional workflow",
            content: "What you just did is exactly how professional developers at companies like Airbnb, Netflix, and Stripe deploy code:\n\n1. <strong>Write code</strong> (with Claude's help, in your case)\n2. <strong>Commit to Git</strong>\n3. <strong>Push to GitHub</strong>\n4. <strong>Automatic deployment</strong> via a CI/CD platform (Vercel in our case)\n\nThe scale is different, but the process is identical."
          },
          {
            stepId: "3-2-6",
            type: "tip",
            title: "Share your website link!",
            content: "You now have a real, live website with a public URL. Share it with friends, add it to your LinkedIn profile, or just feel proud — you built and deployed a real website from scratch using AI-assisted development tools."
          }
        ]
      }
    ]
  }
  ,

  // ============================================================
  // MODULE 4: Claude Power Features
  // ============================================================
  {
    moduleId: 4,
    moduleTitle: "Claude Power Features",
    moduleColor: "#f59e0b",
    lessons: [

      // ----------------------------------------------------------
      // 4-0: Slash Commands
      // ----------------------------------------------------------
      {
        lessonId: "4-0",
        title: "Slash Commands",
        estimatedMinutes: 8,
        intro: "Claude Code has special commands that start with / — they're shortcuts for powerful built-in actions. Learning a handful of them will make you significantly more productive.",
        steps: [
          {
            stepId: "4-0-0",
            type: "info",
            title: "What are slash commands?",
            content: "When you type <code>/</code> in the Claude chat panel, you trigger a special command. These aren't regular messages — they're built-in shortcuts that perform specific actions. Type <strong>/help</strong> to see everything available."
          },
          {
            stepId: "4-0-1",
            type: "command",
            title: "See all available commands",
            content: "In the Claude panel in VSCode, type this to see a list of every slash command and skill:",
            command: "/help",
            commandExplanation: "Shows a full list of available slash commands and skills."
          },
          {
            stepId: "4-0-2",
            type: "info",
            title: "/init — Analyze your project",
            content: "<strong>/init</strong> tells Claude to look at your entire project and create a <code>CLAUDE.md</code> file. This file is like a briefing document — Claude reads it automatically at the start of every session, so it always understands your project structure. Run it once when you start a new project."
          },
          {
            stepId: "4-0-3",
            type: "quiz",
            title: "Quick check: /init",
            content: "You just started a brand-new project. What command should you run so Claude always knows the project structure?",
            options: ["/help", "/init", "/compact", "/clear"],
            correctIndex: 1,
            explanation: "/init scans your project files and generates a CLAUDE.md briefing file. Claude reads this automatically at the start of every future session."
          },
          {
            stepId: "4-0-4",
            type: "info",
            title: "/compact — Free up context space",
            content: "Claude has a limited \"working memory\" called a context window. On long sessions, it fills up and Claude may start forgetting things from earlier. <strong>/compact</strong> compresses the conversation history so you can keep working without losing important context."
          },
          {
            stepId: "4-0-5",
            type: "command",
            title: "Compress conversation history",
            content: "Run this whenever you notice Claude starting to forget earlier context in a long session:",
            command: "/compact",
            commandExplanation: "Summarizes the conversation history to free up space in Claude's working memory."
          },
          {
            stepId: "4-0-6",
            type: "quiz",
            title: "Quick check: /compact",
            content: "After an hour of coding, Claude starts giving answers that contradict what it said earlier in the session. What's the best thing to try?",
            options: ["/clear", "/compact", "/help", "Close and reopen VSCode"],
            correctIndex: 1,
            explanation: "/compact shrinks the conversation history while keeping the important context. It's like summarizing your notes to make room for new information — without starting from scratch."
          },
          {
            stepId: "4-0-7",
            type: "tip",
            title: "Compact early, not late",
            content: "Don't wait until Claude is completely confused to run /compact. It's better to compact proactively on long sessions — every hour or so — to keep Claude's context fresh and accurate."
          }
        ]
      },

      // ----------------------------------------------------------
      // 4-1: Understanding Context
      // ----------------------------------------------------------
      {
        lessonId: "4-1",
        title: "Understanding Context",
        estimatedMinutes: 7,
        intro: "Claude can only \"see\" what's in its active context — the current conversation, any files it's read, and its CLAUDE.md briefing. Understanding this one concept will make you dramatically better at working with Claude.",
        steps: [
          {
            stepId: "4-1-0",
            type: "info",
            title: "Context is Claude's working memory",
            content: "Unlike a human colleague, Claude doesn't remember previous sessions. Every new session starts completely fresh. Think of context as Claude's active workspace — it only knows what's currently loaded into it. This is why giving Claude the right information is so important."
          },
          {
            stepId: "4-1-1",
            type: "info",
            title: "What Claude can see in VSCode",
            content: "In VSCode, Claude automatically reads your <code>CLAUDE.md</code> file if one exists. Beyond that, Claude reads files when you reference them in your messages, or when it decides to open them to answer your question. The more relevant context you provide, the better the answers."
          },
          {
            stepId: "4-1-2",
            type: "info",
            title: "How to give Claude better context",
            content: "Vague: <em>\"Fix the bug\"</em> — Claude doesn't know which file, which bug, or what the error is.\n\nSpecific: <em>\"Fix the bug in <code>app.js</code> line 42 — the price calculation is returning a negative number when the discount is above 100%\"</em>\n\nReferencing filenames, line numbers, and pasting error messages helps Claude understand exactly what needs fixing."
          },
          {
            stepId: "4-1-3",
            type: "quiz",
            title: "Quick check: Better context",
            content: "You're getting a JavaScript error and Claude keeps giving unhelpful answers. What's the most effective thing to do?",
            options: [
              "Ask Claude the same question again",
              "Paste the full error message and mention which file it came from",
              "Start a completely new chat",
              "Ask Claude to guess what might be wrong"
            ],
            correctIndex: 1,
            explanation: "Pasting the exact error message and the filename gives Claude the precise context it needs. More specific information = dramatically better answers. Claude can't help with what it can't see."
          },
          {
            stepId: "4-1-4",
            type: "info",
            title: "CLAUDE.md — your project briefing",
            content: "<code>CLAUDE.md</code> is a special file in your project root. Claude reads it automatically at the start of every session. It should contain: how to run your project, key architecture decisions, and anything Claude needs to know upfront. Run <strong>/init</strong> to generate one, then edit it to add project-specific notes."
          },
          {
            stepId: "4-1-5",
            type: "tip",
            title: "Keep CLAUDE.md updated",
            content: "Think of CLAUDE.md as onboarding documentation for Claude. Every time you make a significant architectural decision or add a key dependency, add a note to CLAUDE.md. Future Claude sessions (and future you) will thank you."
          }
        ]
      },

      // ----------------------------------------------------------
      // 4-2: Skills & Workflows
      // ----------------------------------------------------------
      {
        lessonId: "4-2",
        title: "Skills & Workflows",
        estimatedMinutes: 6,
        intro: "Skills are powerful pre-built workflows you trigger with a slash command. Instead of explaining a complex multi-step task, you run the skill and Claude handles everything automatically.",
        steps: [
          {
            stepId: "4-2-0",
            type: "info",
            title: "What are skills?",
            content: "A skill is a detailed expert workflow built into Claude Code. When you trigger one, Claude knows exactly what to do — for example, the <strong>/commit</strong> skill reads what changed, writes a clear commit message, stages all files, and creates the commit. You don't have to explain any of it."
          },
          {
            stepId: "4-2-1",
            type: "info",
            title: "The /commit skill",
            content: "Instead of writing a git commit message yourself, <strong>/commit</strong> does it all:\n1. Reads exactly what files changed and what the differences are\n2. Writes a clear, professional commit message explaining what and why\n3. Stages all modified files\n4. Creates the commit\n\nOne command. Done."
          },
          {
            stepId: "4-2-2",
            type: "command",
            title: "Create a commit with Claude",
            content: "After making changes to your project, run this to let Claude write and execute a proper commit:",
            command: "/commit",
            commandExplanation: "Claude reads your diff, writes a professional commit message, and creates the commit automatically."
          },
          {
            stepId: "4-2-3",
            type: "quiz",
            title: "Quick check: /commit",
            content: "You've made changes to 3 files and want to create a git commit with a clear, descriptive message. What's the fastest and best approach?",
            options: [
              "git commit -m 'changes'",
              "Ask Claude: 'write a commit message for my changes'",
              "/commit",
              "git add . && git commit"
            ],
            correctIndex: 2,
            explanation: "/commit is a skill that reads your diff, writes a professional message, and creates the commit — all in one command. It consistently writes better commit messages than typing one manually."
          },
          {
            stepId: "4-2-4",
            type: "info",
            title: "Other useful skills",
            content: "Skills available in Claude Code include:\n\n<strong>/commit</strong> — Write and create a git commit\n<strong>/simplify</strong> — Review changed code for quality and simplify it\n<strong>/review-pr</strong> — Review a pull request\n\nType <strong>/</strong> in the Claude panel to see all available skills in your current version."
          },
          {
            stepId: "4-2-5",
            type: "tip",
            title: "Skills save time on repetitive tasks",
            content: "Use skills for anything that has a well-defined process. The more you use /commit instead of writing messages manually, the better your git history becomes — and that makes it much easier to understand what changed and why."
          }
        ]
      },

      // ----------------------------------------------------------
      // 4-3: Claude Agents
      // ----------------------------------------------------------
      {
        lessonId: "4-3",
        title: "Claude Agents",
        estimatedMinutes: 10,
        intro: "Agents are like giving Claude a job to do independently. Instead of one message → one reply, an agent autonomously takes many steps — reading files, making decisions, writing code — and reports back when done.",
        steps: [
          {
            stepId: "4-3-0",
            type: "info",
            title: "Regular chat vs. agents",
            content: "<strong>Regular chat:</strong> You ask a question → Claude replies in one message.\n\n<strong>Agent:</strong> You describe a complex task → Claude works through it autonomously across many steps: reading files, searching code, writing summaries, making edits — then reports back.\n\nAgents are for tasks that are too big or complex for a single reply."
          },
          {
            stepId: "4-3-1",
            type: "info",
            title: "When to use an agent",
            content: "Use agents for multi-step tasks:\n\n✓ <em>\"Explore the entire codebase and explain how the authentication system works\"</em>\n✓ <em>\"Find every place we call the old payment API and list them all\"</em>\n✓ <em>\"Review all files and identify potential security vulnerabilities\"</em>\n\nFor simple, focused requests — regular chat is faster and just as good."
          },
          {
            stepId: "4-3-2",
            type: "quiz",
            title: "Quick check: When to use agents",
            content: "Which of these tasks is best suited for a Claude agent?",
            options: [
              "Fix a typo in line 12 of index.html",
              "What does this function return?",
              "Find every API call across the entire codebase and document them all",
              "Add a button to my page"
            ],
            correctIndex: 2,
            explanation: "Agents shine on large-scale, multi-step tasks that require exploring many files or coordinating multiple actions. Simple, focused tasks are faster with regular chat."
          },
          {
            stepId: "4-3-3",
            type: "info",
            title: "Types of agents in Claude Code",
            content: "Claude Code includes specialized agents for different jobs:\n\n<strong>Explore agent</strong> — Searches and analyzes your codebase to answer research questions\n<strong>Plan agent</strong> — Designs an implementation strategy before any code is written\n<strong>General-purpose agent</strong> — Handles complex multi-step tasks autonomously\n\nClaude automatically picks the right agent type based on what you describe."
          },
          {
            stepId: "4-3-4",
            type: "info",
            title: "Triggering agents in VSCode",
            content: "To use an agent, describe a complex, multi-step task in the Claude panel — for example:\n\n<em>\"Explore the codebase and tell me how the navigation system works across all files\"</em>\n\nClaude will detect that this needs multiple steps and automatically launch an agent. You don't need to say \"use an agent\" explicitly."
          },
          {
            stepId: "4-3-5",
            type: "quiz",
            title: "Quick check: Triggering agents",
            content: "You want Claude to analyze your entire project and find potential security issues across all files. What should you do?",
            options: [
              "Ask Claude: 'any security issues?' in regular chat",
              "Describe the full scope of the task — Claude will use an agent automatically",
              "Open every file manually and ask Claude about each one",
              "Run /compact first"
            ],
            correctIndex: 1,
            explanation: "Describing the full scope tells Claude this is a large multi-step task. It will automatically launch an Explore agent that systematically reads through your files. The more detail you give, the more focused the agent's work will be."
          },
          {
            stepId: "4-3-6",
            type: "tip",
            title: "Trust agents with complex tasks",
            content: "Agents aren't faster for simple things — they're for the jobs that would take you hours to do manually. For large-scale analysis, coordinated multi-file changes, or deep research tasks, agents are dramatically more powerful than single-message chat."
          }
        ]
      }

    ]
  }

];

// Build flat lesson index for navigation (used by app.js)
window.LESSON_INDEX = window.LESSONS.flatMap(
  module => module.lessons.map(lesson => lesson.lessonId)
);
