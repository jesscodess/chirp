import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Results() {

    const [searchedBird, setSearchedBird] = useState([]);

    let params = useParams();

    const getResults = async (name) => {
        const data = await fetch()

    }



  return (
    <div>Results</div>
  )
}

export default Results