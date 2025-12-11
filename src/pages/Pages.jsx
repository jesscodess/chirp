import Home from './Home'
import BirdInfoPage from './BirdInfoPage'
import Results from './Results'

function Pages() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bird/:id" element={<BirdInfoPage />} />
          <Route path="/results/:search" element={<Results />} />
      </Routes>
  )
}

export default Pages