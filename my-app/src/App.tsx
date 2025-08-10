import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <main>
        <Home/>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
