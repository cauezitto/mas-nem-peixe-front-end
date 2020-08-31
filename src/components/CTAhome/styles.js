import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 250px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)) ;
  width: 100vw;
  gap: 30px;

  margin-top: 30px;
`;

export const Item = styled.img`
  height: 250px;
  width: 400px;

  margin: auto;

  cursor: pointer;
`
