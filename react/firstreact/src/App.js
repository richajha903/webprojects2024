// import React from "react";

// import "./App.css";
import MovieRatingList from "./components/MovieRating/MovieRatingList";
import TaskList from "./components/TaskList/TaskList";

// //function component
function App() {
  return (
    <>
      <TaskList />
      <MovieRatingList />
    </>
  );
}

export default App;

// // import React from "react";
// import "./App.css";
// import DisplayMessage from "./components/DisplayMessage";

// //function component
// function App() {
//   return (
//     <>
//       <DisplayMessage name="John" />
//       <DisplayMessage name="Max" />
//     </>
//   );
// }

//export default App;

// // import React from "react";
// import "./App.css";
// import { useState } from "react";

// //function component
// function App() {
//   //example 4: Conditional REndering with JsX
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   //user is not loggedin start

//   //styling in JSX
//   const style = {
//     color: "white",
//     fontSize: "24px",
//     backgroundColor: "blue",
//   };

//   return (
//     <>
//       {isLoggedIn ? <h1>Welcome Back</h1> : <h1>Sign in</h1>}
//       <button onClick={() => setIsLoggedIn(!isLoggedIn)} style={style}>
//         {isLoggedIn ? "Logout" : "Login"}
//       </button>
//     </>
//   );
// }

// export default App;

// // import React from "react";
// import "./App.css";
// import { useState } from "react";

// //function component
// function App() {
//   //example 1:
//   //without JSX
//   // const element = React.createElement("h1", null, "Hello, world!");
//   //with JSX
//   //const element = <h1>Hello World!!</h1>;

//   //example2: using variables in jsx
//   // const greetings = "Hello React!!!!!";
//   // const element = <h1>{greetings}</h1>;

//   //exmaple 3 : count the button clicks
//   const [count, setCount] = useState(0);

//   //count => holds the state value
//   //setCount => is the function to update it

//   //example 4: Conditional REndering with JsX

//   return (
//     <div>
//       <h1>You clicked {count} times........</h1>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// export default App;
