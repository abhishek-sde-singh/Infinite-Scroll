# Infinite Scroll React Project

This is a simple React project that demonstrates how to implement infinite scrolling in a web application.

## Description

Infinite scrolling is a popular technique used in web applications to load and display more content as the user scrolls down the page. This project showcases how to achieve infinite scrolling in a React application by detecting when the user has scrolled to the bottom of the page and then loading additional content.

## Features

- Detects when the user has scrolled to the bottom of the page
- Loads and displays more content dynamically as the user scrolls
- Implements a loading indicator during data fetching

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and go to `http://localhost:3000` to view the project.

## Implementation Details

The main logic for infinite scrolling is implemented using JavaScript within a React component. The key part of this implementation involves checking if the sum of `window.innerHeight` and `document.documentElement.scrollTop` is not equal to `document.documentElement.offsetHeight`, or if a loading indicator (`isLoading`) is active. This logic determines when additional content should be loaded and displayed.

I have implemented a simpler way you can try this one and also try to implement using the `Intersection Observer`.

## Technologies Used

- React
- JavaScript
- HTML/CSS

## Comparison

### JavaScript Expression (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight):

#### Pros:

- `Simplicity`: It's straightforward and easy to implement.
- `Compatibility`: It works in all browsers, including older ones.

#### Cons:

- `Performance`: It requires continuous checking (usually on a scroll event), which can lead to performance issues, especially on mobile devices.
- `Less Precision`: It may not be as precise in all scenarios, especially with dynamic content.

### Intersection Observer API:

#### Pros:

- `Performance`: More efficient as it's natively supported by browsers and does not require continuous event listening or element measurements.
- `Flexibility and Precision`: More versatile for detecting when an element enters or leaves the viewport, providing better control over the loading of content.

#### Cons:

- `Browser Support`: Not supported in older browsers (e.g., Internet Explorer) without a polyfill.
- `Slightly More Complex`: The API is more complex than the basic JavaScript approach.
