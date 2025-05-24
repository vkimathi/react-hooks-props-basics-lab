import Home from "./Home";
import About from "./About";

function App() {
  const user = {
    name: "Liza",
    city: "New York",
    bio: "I made this!",
    color: "firebrick",
    links: {
      github: "https://github.com/liza",
      linkedin: "https://www.linkedin.com/in/liza/",
    },
  };

  return (
    <div>
      <nav></nav> {/* <-- add this line */}
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
