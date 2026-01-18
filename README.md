# React Quiz

A modern, interactive quiz application built with React. Test your knowledge with multiple-choice questions and track your progress in real-time.

## Features

- Interactive quiz with multiple-choice questions
- Real-time progress tracking
- Timer functionality
- Score calculation and results display
- Responsive design
- Context-based state management

## Technologies Used

- **React** 19.2.1 - Frontend framework
- **React DOM** 19.2.1 - DOM rendering
- **JSON Server** - Mock API for questions data
- **Testing Library** - Testing utilities
- **Web Vitals** - Performance monitoring

## Project Structure

```
src/
├── components/          # React components
│   ├── App.js          # Main application component
│   ├── Question.js     # Individual question display
│   ├── Options.js      # Answer options
│   ├── Timer.js        # Quiz timer
│   ├── Progress.js     # Progress indicator
│   ├── StartScreen.js  # Quiz start screen
│   ├── FinishScreen.js # Results screen
│   └── ...
├── contexts/           # React contexts
│   └── QuizContext.jsx # Quiz state management
└── index.js            # Application entry point

src-no-context/         # Alternative implementation without context
data/
└── questions.json      # Quiz questions data
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-quiz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the JSON server for questions data:
   ```bash
   npm run server
   ```

2. In a new terminal, start the React application:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App
- `npm run server` - Starts the JSON server on port 8000

## Testing

Run the test suite:
```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is private and not licensed for public use.
