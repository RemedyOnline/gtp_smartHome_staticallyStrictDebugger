# 🏠 Smart Home UI – TypeScript Control Panel

A modular, object-oriented Smart Home Control Panel built with TypeScript. This application simulates a smart lighting system where users can toggle lightbulbs, adjust brightness, set timers, and view room activity using interactive charts — all in a clean UI powered by modern JavaScript principles.

## 🔧 Features

- Toggle individual room lights on/off
- Adjust light intensity (brightness slider)
- Schedule timed lighting actions
- Advanced settings panel for customization
- Chart-based feedback using Chart.js
- Persistent settings with localStorage
- Unit tested with Jest
- Modular architecture (main.ts, basicSettings.ts, advanceSettings.ts, etc.)
- Strict type safety and encapsulation via TypeScript

## 📁 Project Structure

/src
├── main.ts # App entry point and initialization
├── basicSettings.ts # Handles on/off toggle and brightness
├── advanceSettings.ts # Handles presets, timers, charts
├── general.ts # Shared utilities
/tests
└── \*.test.ts # Unit tests for logic and functionality
/public
└── index.html # Main HTML UI shell

## 🧠 Technical Highlights

- Object-Oriented Design: Each module encapsulates specific behavior (e.g., Light, AdvanceSettings).
- Type Safety: Fully written in TypeScript with custom interfaces and classes.
- Test Coverage: Includes Jest test suites for critical logic like brightness calculation, preset handling, and timer scheduling.
- UI Feedback: Real-time visual updates using Chart.js to indicate the state of each room.

## 🚀 Getting Started

# Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- TypeScript (npm install -g typescript)
- Jest (for testing)

# Install & Run

`npm install`
`npm run dev # Start development server`
`npm run build # Build for production`
`npm run test # Run tests`

## 🛠 Configuration

Make sure your tsconfig.json includes:

{
"compilerOptions": {
"target": "es2016",
"module": "ES6",
"rootDir": "./src",
"outDir": "./dist",
"removeComments": true,
"noEmitOnError": true,
"esModuleInterop": true,
"forceConsistentCasingInFileNames": true,
"strict": true,
"noImplicitAny": true,
"noImplicitReturns": true,
"skipLibCheck": true
},
"include": ["src/**/*"],
"exclude": ["node_modules"]
}

## 🧪 Testing

All core functionality can be tested with:

`npm run test`

Jest is configured to test light toggling, intensity control, and timer logic. Mocking is used to simulate DOM and Chart.js interactions.
