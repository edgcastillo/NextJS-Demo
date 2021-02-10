import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

const CardStyles = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr 1fr;
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  background: var(--mediumGray);

  .centerAligned {
    margin: 0 auto;
  }
`;

export default function Card({ id, image, name }) {
  return (
    <CardStyles>
      <div className="centerAligned">
        <Image
          onError={() => console.log('error')}
          layout="fixed"
          src={image}
          alt="Beer picture"
          width={100}
          height={100}
        />
      </div>
      <Link href={`/beers/${id}`}>
        <a>{name}</a>
      </Link>
    </CardStyles>
  );
}
