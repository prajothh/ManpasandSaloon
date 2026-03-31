import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Home from './pages/Home'
import GalleryDetail from './pages/GalleryDetail'

export default function App() {
  return (
    <MotionConfig reducedMotion="never">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery/:slug" element={<GalleryDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
