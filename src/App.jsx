import { useState } from 'react'
import Search from './components/Search.jsx'
import reactLogo from './assets/react.svg'
import './App.css'
import headerBird from './assets/header-bird.png'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div className="site-header">
        <img src="src/assets/header-bird.png" alt="A yellow bird sits on a tree branch with pink flowers. Photo by Boris Smokrovic on Unsplash." width="1080px auto"/>
        <h1>chirp</h1>
          <p className="site-description">listen to bird sounds from around the world</p>
          <Search />
      </div>
    </>
  )
}

export default App
