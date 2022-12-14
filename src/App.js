import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
