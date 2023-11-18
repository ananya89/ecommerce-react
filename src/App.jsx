import { RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import routes from './routes'

function App() {
  return (
    <RouterProvider router={routes}>
      <Home />
    </RouterProvider>
  )
}

export default App
