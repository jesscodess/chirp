import Search from './components/Search'
import HeaderBird from './assets/header-bird.png'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <Wrapper>
          <div className="site-header">
            <img src={HeaderBird} alt="A yellow bird sits on a tree branch with pink flowers. Photo by Boris Smokrovic on Unsplash." width="1080px auto"/>
            <h1>chirp</h1>
              <p className="site-description">listen to bird sounds from around the world</p>
              <Search />
          </div>
        </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  .site-header {
  color: aliceblue;
  text-align: center;
  }

  h1 {
  font-size: 60px;
  }

  .site-description {
  font-size: 30px;
  }

  .search {
  font-size: 100px;
  }
`;

export default Home