import styled from 'styled-components';
import Card from '../components/Card';

export async function getStaticProps() {
  const res = await fetch('https://api.sampleapis.com/beers/ale');
  const data = await res.json();

  return {
    props: {
      beers: data,
    },
  };
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`;

export default function Home({ beers }) {
  console.log(beers);
  return (
    <>
      <Grid>
        {beers.map((beer) => {
          return (
            <Card
              id={beer.id}
              key={beer.id}
              image={beer.image}
              name={beer.name}
            />
          );
        })}
      </Grid>
    </>
  );
}
