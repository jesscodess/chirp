import Home from './Home'
import Searched from './Searched'
import BirdInfoPage from './BirdInfoPage'
import { Route, Routes } from 'react-router-dom'

function Pages() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/bird/:name" element={<BirdInfoPage />} />
      </Routes>
  )
}

export default Pages