# Movie Collection Manager

A React-based movie collection management application with favorites functionality and admin controls. Features a clean interface for browsing movies, marking favorites, searching through collections, and administrative tools for adding/removing movies.

## Features

- **Browse Movies**: View your movie collection with poster images and release dates
- **Search Functionality**: Find movies quickly with real-time search
- **Favorites System**: Mark movies as favorites and view them in a dedicated section
- **Admin Panel**: Add new movies and remove existing ones from the collection
- **Responsive Design**: Clean, modern interface that works on all devices

## Tech Stack

- **React 19.2.3** - Frontend framework
- **React Router DOM** - Client-side routing
- **Custom Hooks** - State management with `useMovies` hook
- **CSS3** - Custom styling with responsive design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tech_with_tim
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── MovieCard.jsx   # Individual movie display component
│   └── Navbar.jsx      # Navigation component
├── pages/              # Main application pages
│   ├── Home.jsx        # Movie browsing and search
│   ├── Favorites.jsx   # Favorite movies display
│   └── Admin.jsx       # Movie management panel
├── handlers/           # Business logic and state management
│   ├── useMovies.js    # Custom hook for movie operations
│   ├── movieHandlers.js # Movie utility functions
│   └── index.js        # Handler exports
├── data/               # Static data
│   └── moviesList.js   # Initial movie collection
├── css/                # Styling files
└── App.js              # Main application component
```

## Usage

### Browsing Movies
- Navigate to the home page to see all movies
- Use the search bar to filter movies by title
- Click the heart icon to add/remove movies from favorites

### Managing Favorites
- Click "Favorites" in the navigation to see your favorite movies
- Toggle favorites on any page by clicking the heart icon

### Admin Functions
- Access the Admin panel to add new movies
- Fill out the form with movie title, release date, and image URL
- Remove movies from the collection using the "Remove" button

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

#
This project is a variation of the following youtube video where instead of using APIS we focus on adding funcionalities to the frontend , therefore the list of movies that is processed on each refresh is manually set
Credit to Tim for his awesome videos 
https://youtu.be/G6D9cBaLViA?si=p3vFA6K3CxxYuIsM
