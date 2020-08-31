import styled from 'styled-components';

export const ProductsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) ;
  width: 100vw;
  gap: 30px;

  justify-content: center;
`;
