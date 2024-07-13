import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {

  return (

    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<h1>Woops, nothing here!</h1>}/> 
          //Create a component for Error handling url endpoint and button to navigate back to Home Page
      </Routes>
    </main>

  )
}

export default App;
