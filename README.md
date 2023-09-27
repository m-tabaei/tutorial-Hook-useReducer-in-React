# tutorial-Hook-useReducer-in-React


![Demo](https://github.com/m-tabaei/tutorial-Hook-useReducer-in-React/blob/main/useReducer.JPG?raw=true)


Here's a breakdown of how `useReducer` is used in the code:

1. **App Component (`App.js`):**
   - This is the root component of the application.
   - It wraps its content with a custom context provider (`MyContextProvider`).

2. **MyContextProvider Component (`MyContextProvider.js`):**
   - This component creates a React context using `React.createContext()`. This context is used to share state and dispatch functions with child components.
   - It initializes two state variables (`counter` and `counter1`) using `useReducer`, which takes a reducer function (`CounterReducer`) and an initial value (`initialValue`) for each state.
   - The component provides the state variables and their corresponding dispatch functions to its children through the context provider using `MyContext.Provider`.
   - The `children` prop is used to wrap child components within this context provider.

3. **Reducer (`reducer.js`):**
   - This is a function that defines how state transitions should occur based on dispatched actions.
   - It takes the current state and an action as input and returns a new state based on the action type.
   - In this example, it handles actions like "inc" (increment), "dec" (decrement), "inc5" (increment by 5), and "reset" (resetting the count).

The combination of `useReducer` and the reducer function (`CounterReducer` in this case) allows you to manage and update the state of your application in a predictable and centralized manner. Child components can access and modify this state by dispatching actions to the corresponding dispatch functions provided by the context provider (`dispatch` and `dispatch1`).

This pattern helps in maintaining a clean and manageable state management system, especially in larger React applications.


- 🔗 ([https://tutorial-hook-use-reducer-in-react.vercel.app/])
-
- 💻 Developed by Seyed Mohammad Tabaei
- 📆 Created - 2023
- 🔧 Technologies Used - React Hook, useReducer
- 🧑‍ Role - Frontend

- How to reach me : with my [e-mail](https://www.m-tabaie@gmail.com) and [linkedin](https://www.linkedin.com/in/mohammad-tabaei/)
