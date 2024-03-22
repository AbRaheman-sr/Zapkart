import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <div>
      <Navbar data={setIsLogedIn} initial={isLogedIn} />
    </div>
  );
}

export default App;
