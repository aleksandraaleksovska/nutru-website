import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { MicroplasticsPage } from './pages/MicroplasticsPage'
import { AdditivesPage } from './pages/AdditivesPage'
import { SnacksPage } from './pages/SnacksPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research/microplastics" element={<MicroplasticsPage />} />
          <Route path="/research/additives" element={<AdditivesPage />} />
          <Route path="/research/snacks" element={<SnacksPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
