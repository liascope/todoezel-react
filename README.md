ToDoeZel – React/Next.js 

A responsive task management application built with React.js and Next.js. It extends the original Vanilla JS version with new features, reusable components, global state management, and a clean, motivating design.

The app helps users organize their tasks, notes, and shopping items with features like progress tracking, date-based reminders, and persistent storage.

---

 🚀 Key Features

* Tasks & Notes (General List)

  * Add notes/todos via the ➕ button
  * Mark items as complete (✔) to update a percentage tracker
  * Delete all completed tasks in one click (appears after 3+ done items)

* Date-Based Tasks (Header & Do Later Section)

  * Upcoming or due tasks appear in the **header** with their own progress tracker
  * Clicking the header reveals the full date-specific task list
  * Save future tasks in **Do Later** section → stored in `localStorage`
  * View past 3 completed tasks + all future ones via **Show Saved Tasks**

* Shopping List

  * Simple, clean list for shopping items
  * Mark items as checked when done

* **Motivational Design**

  * Dynamic progress trackers that change colors as completion percentage changes
  * Minimal, friendly, and motivating UI with custom **SVG icons**
  * Fully responsive layout for desktop and mobile

* Modal Window

  * Provides additional information in a focused view

---

## 🧩 Tech Stack & Libraries

* React.js + Next.js – App framework with built-in routing, error handling, and layout management
* Context API – global state handling
* React Hooks – local state handling
* Custom Hook – reusable `localStorage` persistence logic
* Reusable Components – modular and maintainable design
* Tailwind CSS – utility-first styling for responsive design
* SVG – custom icons, handcrafted for the UI

---

 🧠 What I’ve Learned & Demonstrated

* Refactored and expanded my Vanilla JS project into a modern React/Next.js app
* Implemented global and local state handling (Context API + Hooks)
* Built a reusable custom hook for persistent `localStorage` logic
* Developed reusable components for better maintainability and scalability
* Designed a responsive, minimal, and motivating UI with Tailwind CSS
* Coded custom SVG icons and integrated dynamic progress trackers with color changes
* Practiced Next.js conventions (error handling, layout, loading)

---

 🔧 Running the Project

1. Clone the repo:

   ```bash
   git clone https://github.com/liascope/todoezel-react.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run locally:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

 📂 Project Structure

```
/components     – Reusable UI components  
/context        – Context API provider for global state  
/hooks          – Custom hooks (e.g. localStorage)  
/pages          – Next.js pages & routing  
/styles         – Tailwind CSS and global styles  
```

---

 📜 License

Developed by Zeliha A. (liascope).
This project is open for personal use. Redistribution or modification requires explicit permission.

---

✨ ToDoeZel – React/Next.js demonstrates the step from fundamental Vanilla JS skills to a scalable, modern React application with reusable components, state management, and a polished UI.
