🎯 Overview

BookFinder for Alex is a sleek, responsive web application built for college students who want to quickly search and discover books. Whether you're looking for ISBNs to cite sources, checking authors for research, or just browsing covers — this app delivers a clean, fast, and delightful experience.

Inspired by the Take-Home Challenge, this project demonstrates:

Clean component architecture, 
API integration with error handling, 
Responsive UI with Tailwind CSS, 
Real-world data handling (deduplication, fallbacks, formatting)
✨ Features

🔍 Search by Title — Instantly find books using Open Library’s vast database

🖼️ Book Covers — Display real cover images (with graceful fallbacks)

👥 Author Deduplication — No more “Susan Arena, Susan Arena” — authors are cleaned and unique

🆔 ISBN Display — Shows ISBN (formatted like 978-0123456789) only when available — perfect for citations or purchases

📅 Publish Year — Displayed only if known — no “Unknown” clutter

🌀 Loading States — Smooth spinner while fetching

❌ Error Handling — Clear messages for “No books found” or network errors

📱 Fully Responsive — Works flawlessly on mobile, tablet, and desktop

🎨 Modern UI — Gradient backgrounds, hover effects, card layout — built with Tailwind CSS

🛠️ Tech Stack
Framework
React 18
Bundler
Vite
Styling
Tailwind CSS
State
React Hooks (
useState
,
useCallback
)
API
Open Library Search API
Deployment
StackBlitz
Type Safety
TypeScript-ready (via
@types/react
)

🚀 Getting Started (Local Development)
Prerequisites
Node.js >= 16
npm or yarn
Installation

# Clone the repo
git clone https://github.com/your-username/book-finder.git

# Navigate to project
cd book-finder

# Install dependencies
npm install

# Start dev server
npm run dev
➡️ Open http://localhost:3000 — your app is running!

📂 Project Structure


📁 book-finder/
├── public/
│   └── index.html              # App entry point
├── src/
│   ├── App.jsx                 # Main app logic + search
│   ├── main.jsx                # React render root
│   ├── index.css               # Tailwind directives
│   └── components/
│       ├── BookCard.jsx        # Individual book UI
│       ├── BookList.jsx        # Grid layout
│       ├── SearchBar.jsx       # Input + button
│       └── Spinner.jsx         # Loading animation
├── package.json
├── vite.config.js              # Vite config (port 3000, auto-open)
├── tailwind.config.js          # Tailwind content paths
└── postcss.config.js           # PostCSS for Tailwind
🌐 API Used
🔗 Open Library Search API
https://openlibrary.org/search.json?title={query}

Free, no authentication required
Returns book details including title, author_name, publish_year, cover_i, isbn
Handles edge cases (missing data, duplicates) gracefully in-app
🧪 Testing
Tested with real-world searches:

✅ “Harry Potter” → shows ISBN, deduplicated author

✅ “Dune” → shows cover, publish year

✅ “asdfghjkl” → shows “No books found” error

✅ Offline → shows network error

📸 Screenshots
(Add 1-2 screenshots here after deploying)

📷 Desktop View
Desktop Screenshot

📱 Mobile View
Mobile Screenshot

🚀 Deployment
Deployed live on StackBlitz for easy sharing:

🔗 Live URL: https://book-finder-alex.stackblitz.io

To deploy your own:

Go to https://stackblitz.com/fork/react-tailwind
Paste code from this repo
Click “Share” → copy “Live Application” URL
🤝 AI Collaboration Log
This project was developed with assistance from ChatGPT for:

Component structure brainstorming
API data mapping logic
Error handling strategies
Tailwind class suggestions
🔗 View ChatGPT Session: https://chat.openai.com/share/your-session-id

(Replace with your actual shared chat link)

📦 Submission Checklist
This project fulfills all requirements of the Take-Home Challenge:

✅ Choose 1 user need
Book Finder for Alex
✅ React Framework

✅ Used React 18 + Vite

✅ Tailwind CSS

✅ Responsive, modern UI

✅ Public API

✅ Open Library (no auth)

✅ State Management

✅ React Hooks

✅ Error Handling

✅ No results, network errors

✅ Responsive Design

✅ Mobile + Desktop

✅ Deployed App (Level 2)

✅ StackBlitz Live URL

✅ Code Sharing (Level 3)

✅ This GitHub Repo

✅ AI Log (Level 1)

✅ Shared ChatGPT Link

🙌 Author
👤 Your Name
📧 your.email@example.com
🔗 LinkedIn | Portfolio

📄 License
MIT License — feel free to use, modify, and learn from this code!

💡 Future Improvements (Optional)
✅ Add “Copy ISBN” button

✅ Dark Mode Toggle

✅ “View on Open Library” link

✅ LocalStorage for recent searches

✅ Author search filter

“The best way to predict the future is to create it.” — Alan Kay 
