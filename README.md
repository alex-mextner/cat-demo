# Cat Catalogue 🐱

A beautiful cat catalogue application built with Vite, React, TypeScript, and shadcn/ui.

## Features

- **View Cats**: Browse through your collection of adorable cats in a responsive grid layout
- **Search**: Filter cats by name or breed using the search bar
- **Add Cats**: Add new cats to your catalogue with details like name, breed, age, and description
- **Edit Cats**: Update existing cat information
- **Delete Cats**: Remove cats from your catalogue

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Technologies Used

- **Vite** - Fast build tool and dev server
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, reusable UI components
- **Lucide React** - Beautiful icons

## Project Structure

```
src/
├── components/
│   └── ui/          # Reusable UI components
├── lib/
│   └── utils.ts     # Utility functions
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## Usage

- **Search**: Type in the search bar to filter cats by name or breed
- **Add Cat**: Click the "Add Cat" button to open the form dialog
- **Edit Cat**: Click the "Edit" button on any cat card
- **Delete Cat**: Click the "Delete" button on any cat card

## Future Enhancements

- [ ] Add local storage persistence
- [ ] Add image upload functionality
- [ ] Add categories/tags for cats
- [ ] Add favorites/wishlist feature
- [ ] Add pagination for large catalogues

## License

MIT
