
<h1 align="center">
  
  <br>
  Poesy
  <br>
</h1>

<h4 align="center"> Welcome to Poesy, where your poetry masterpieces come to life!</h4>



## Overview
This attempt at solving Code Challenge 1 of Phase 2 aims to demonstrate an understanding of React fundamentals, user interaction, and responsiveness. Users can view existing poems, toggle a form to create new ones, and mark poems as read or unread.

## Key Features

The application satisfies the following **user stories**:

### 1. View All Poems on Start
- When the app loads, all poems are displayed.
- Poems are rendered from a static list (no backend or persistence).

### 2. Toggle Create Poem Form
- A button allows the user to **show or hide** the "New Poem" form.
- This keeps the UI clean and focused.

### 3. Create a New Poem
- The form allows input for:
  - Title
  - Author
  - Content

- Upon submission, the new poem is added to the displayed list.
- No persistence is required (data resets on refresh).

### 4. Mark as Read / Unread
- Each poem has a button that toggles its read status.
- When clicked:
  - If the poem is unread, it becomes "read" and the button updates to "Mark as unread".
  - If already read, clicking again reverts it.

---

## How To Use

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Moringa-SDF-PT10/poesy-douglas-gatimu

# Go into the repository
$ cd poesy-douglas-gatimu

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

## File Structure

```
poesy-douglas-gatimu/
├── public/
├── src/
|   ├── assets
│   ├── App.css
│   ├── App.jsx
|   ├── index.css
│   ├── Poem.jsx
│   ├── Poems.jsx
|   ├── NewPoem.jsx
│   └── main.jsx
├── index.html
├── eslint.config.js
├── package.json
├── vite.config.js
└── README.md
```

---



## Credits

This software uses the following packages:

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## 👨‍💻 Author

**Douglas Gatimu**

## License
This project is for educational use only.

---


