
import LandingPage from './Pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path = "/" element = {<LandingPage/>}>

      </Route>
    </Routes>
  )
}

export default App
