import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Heroo from "./Components/Heroo/Heroo"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
const App = () => {
  return (
    <div>
        <Navbar />
        <Heroo />
        <About />
        <Projects/>
        <Contact/>
    </div>
  )
}

export default App