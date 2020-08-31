import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  width: 100vw;
 
  display: flex;

  justify-content: center;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 30px;

  h1{
    color: #FF5A00;
    font-family: 'manjari', sans-serif;
    width: 30%;
    text-align: center;

    @media(max-width: 430px){
    width: 30%;
    margin: auto;
  }
  }
`;

export const Line = styled.div`
  width: 30%;
  height: 4px;

  background: #03989E;

  margin: auto;

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media(max-width: 430px){
    width: 20%;
  }
`
