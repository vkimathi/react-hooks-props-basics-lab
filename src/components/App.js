import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home color={ user.color } name={user.name} city={user.city}  />
      <About 
        bio={user.bio} 
        github={user.links.github} 
        linkedin={user.links.linkedin} 
      />
    </div>
  );
}

export default App;
