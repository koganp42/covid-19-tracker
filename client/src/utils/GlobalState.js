// import React, { createContext, useReducer, useContext } from "react";

// const LoggedInContext = createContext();
// const { Provider } = LoggedInContext;

// const reducer = (state, action) => {
//   switch (action.type) {
//   case "logIn":
//       return {...state, loggedIn: true}
//   case "logOut":
//     return {...state, loggedIn: false}; 
//   case "redirect": 
//     console.log(action.url); 
//     return {...state, redirect: action.url}
//   default:
//     throw new Error(`Invalid action type: ${action.type}`);
//   }
// };

// const LoggedInProvider = ({value="none", ...props }) => {
//   const [state, dispatch] = useReducer(reducer, { loggedIn: false, url: value});
//     console.log("loggedInProvider reset"); 
//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useLoggedInContext = () => {
//   return useContext(LoggedInContext);
// };

// export { LoggedInProvider, useLoggedInContext };