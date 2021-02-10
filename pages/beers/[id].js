import Image from 'next/image';
import styled from 'styled-components';

export const getStaticPaths = async () => {
  const res = await fetch('https://api.sampleapis.com/beers/ale');
  const data = await res.json();
  const paths = data.map((beer) => {
    return {
      params: { id: beer.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://api.sampleapis.com/beers/ale/${id}`);
  const data = await res.json();

  return {
    props: { beer: data },
  };
};

const DetailContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export default function BeerDetails({ beer }) {
  const { image, name, price } = beer;
  console.log(beer);
  return (
    <DetailContainer>
      <Image
        layout="fixed"
        src={image}
        alt="Beer picture"
        width={100}
        height={100}
      />
      <p>{name}</p>
      <span>{price}</span>
    </DetailContainer>
  );
}
