import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="App">
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Main isCartOpen={isCartOpen} />
    </div>
  );
}

export default App;
