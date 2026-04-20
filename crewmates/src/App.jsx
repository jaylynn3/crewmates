import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Create from "./create"
import Gallery from "./character"
import Detail from "./detail"
import Edit from "./edit"

function App() {
  return (
    <BrowserRouter>
      
        <h1>Omori Character Creator ₍^. .^₎⟆</h1>

        <nav>
        <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/create">Create Character</Link>
        <Link to="/gallery">View Party</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2>Welcome to Headspace</h2>
              <p>⋆˚꩜｡ Create your own members who can join the OMORI crew! ⋆˚꩜｡</p>

              <img src="https://i.pinimg.com/originals/f9/30/71/f93071b946cb2f0cff5dd1fccc6b86f7.gif"></img>
            </div>
          }
        />

        <Route path="/create" element={<Create />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/character/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App