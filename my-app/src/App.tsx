import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <main className="px-4 py-5">
        <Home/>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
