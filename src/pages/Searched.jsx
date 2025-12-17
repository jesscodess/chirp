import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Searched() {

    const [searchedBird, setSearchedBird] = useState([]);

    let params = useParams();

    const getBirds = async (name) => {
        const data = await fetch(`https://xeno-canto.org/api/3/recordings?query=en:"=${name}"&per_page=50&page=1&key=${import.meta.env.VITE_REACT_APP_API_KEY}`);
        const birds = await data.json();
        setSearchedBird(birds.results);
    };

    useEffect(() => {
      getBirds(params.search);
    }, [params.search]);

    return (
        <Grid>
            {searchedBird.map((item) => {
                return(
                    <Card key={item.id}>
                        <Link to={"/bird/" + item.name}>
                            <h3>{item.en}</h3>
                            <h4>{item.gen} {item.sp}</ph4>
                            <p>{item.cnt} {item.loc}<p>
                        </Link>
                    </Card>
                  )
              })}
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h3{
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched