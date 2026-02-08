# Track Goal

A simple React Native application for tracking your personal learning goals.

## Description

This project is a React Native app built with Expo that allows users to manage a list of course goals. Users can add new goals through a modal interface and delete them by tapping on the goal item. It demonstrates fundamental React Native concepts such as:

*   Handling user input with `TextInput`
*   Managing state with `useState`
*   Rendering lists efficiently with `FlatList`
*   Using `Modal` for overlays
*   Styling components with `StyleSheet`

## Features

*   **Add Goal**: Open a modal to input and add a new goal to your list.
*   **View Goals**: See all your added goals in a scrollable list.
*   **Delete Goal**: Tap on any goal to remove it from the list.

## Technologies Used

*   [React Native](https://reactnative.dev/)
*   [Expo](https://expo.dev/)
*   [React](https://react.dev/)

## Getting Started

To run this project locally, follow these steps:

1.  **Prerequisites**: Make sure you have Node.js installed.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Start the App**:
    ```bash
    npm start
    ```
    or
    ```bash
    npx expo start
    ```
4.  **Run on Device/Emulator**:
    *   Scan the QR code with the Expo Go app on your Android or iOS device.
    *   Press `a` to run on Android Emulator.
    *   Press `i` to run on iOS Simulator.

## Project Structure

*   `App.js`: The main entry point and container for the application logic.
*   `components/`: Contains reusable UI components.
    *   `GoalInput.js`: The input modal for adding new goals.
    *   `GoalItem.js`: The individual goal item component.
