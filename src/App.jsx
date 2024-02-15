import { Suspense, lazy } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
const Landing = lazy(() => import('./components/Landing'))
const Dashboard = lazy(() => import('./components/Dashboard'))

function App() {

  return (
    <div>  
        <BrowserRouter>  
        <Appbar />    
          <Routes>
            <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
            <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
          </Routes>
      </BrowserRouter>

    </div>
    
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor: "Blue"}}>
      <button onClick={() => navigate("/")}>Landing</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button>Test</button>
    </div>
  )
}

export default App
