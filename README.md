# One Hundred Squares

One Hundred Squares is a responsive Angular application that fetches and displays 100 posts from the jsonplaceholder API in a 10x10 grid of interactive squares. Designed with a focus on simplicity and adherence to Angular best practices, the application ensures a clean user experience and a maintainable codebase.

View app here: https://onehundredsquares.netlify.app/


## Features

- **Interactive Grid Layout**: Users can interact with a grid of posts, with the content dynamically changing upon each click.
- **Responsive Design**: Flexible and adaptive design for an optimal viewing experience across a wide range of devices.
- **State Management**: Robust state management pattern for managing the application state in a predictable manner.
- **Simplicity and Clarity**: Emphasizes a straightforward user interface that reflects the "Breathe Simplicity" core value.


## Color Palette

Utilizing a color palette from Color Hunt's retro range, the application provides visual cues to user interactions through color transitions.

Palette: [Color Hunt Palette](https://colorhunt.co/palette/006e7ff8cb2eee5007b22727)


## Technology Stack

- **Angular**: Robust framework for building scalable web applications.
- **TypeScript**: Superset of JavaScript providing type safety.
- **SCSS**: Preprocessor scripting language that is interpreted into CSS.
- **RxJS**: Library for composing asynchronous and event-based programs by using observable sequences.


## Code Overview

The application is structured with clear separation of concerns:

- `DataService`: Manages API calls and state using RxJS.
- `AppComponent`: Bootstraps the application and loads initial data.
- `GridComponent`: Displays the post grid layout.
- `SquareComponent`: Handles individual post display and interactions.


## Angular Best Practices

- **Modular Design**: Components are designed to be reusable and encapsulated.
- **Reactive Patterns**: Use of observables for data fetching and event handling.
- **SCSS Organization**: Styled with SCSS for modular and maintainable code.
- **Clean Code**: Following Angular style guide for code consistency and readability.


## Gotchas

- The application is reliant on the jsonplaceholder API's availability for content.
- Ensure all Angular environment dependencies are compatible.


## Setup and Installation

```bash
# Clone the repository
git clone https://github.com/PaulGreetham/tenbytensquares.git

# Navigate to the directory
cd tenbytensquares

# Install dependencies
npm install
