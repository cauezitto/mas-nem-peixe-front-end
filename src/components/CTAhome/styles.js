import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 250px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)) ;

  gap: 30px;

  margin-top: 10px;

  @media(max-width: 400px){
    grid-template-columns: repeat(auto-fit, minmax(80%, 1fr)) ;
  }
`;

export const Item = styled.img`
  height: 250px;
  width: 400px;

  margin: auto;

  cursor: pointer;

  @media(max-width: 420px){
    height: auto;
    width: 80%;
  }
`
