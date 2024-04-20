import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react"

export default function App() {
  const [isDark, setIsDark] = useState(true)

  function toggleDark(e) {
    e.preventDefault()
    setIsDark(prevIsDark => !prevIsDark)
  }
    return (
        <div className="container">
            <Navbar darkMode={isDark} toggleDarkMode={toggleDark}/>
            <Main darkMode={isDark}/>
        </div>
    );
}
