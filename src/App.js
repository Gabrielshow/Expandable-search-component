import { useState } from "react";
import Search from "./Search";
import './App.css';

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <Search isActive={isActive} toggleActive={toggleActive} />
    </div>
  );
}

export default App;
