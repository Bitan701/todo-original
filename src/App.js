import AboutPage from "./AboutPage"
import AddSpace from "./components/AddSpace"
import Header from "./components/Header"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Header />
                <AddSpace />
              </>
            }
          />

          <Route
            exact
            path='/about'
            element={
              <>
                <AboutPage />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
