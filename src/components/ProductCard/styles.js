import styled from 'styled-components';

export const Container = styled.div`
  
  width: 250px;

  margin: auto;

  display: flex;
  justify-content: center;
  flex-direction: column;

  img{
      width: 100%;
      height: auto;
      margin: auto;
      margin-top: 0;
      margin-bottom: 5px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  height: 40px;
  width: 90%;

  background: rgba(3, 152, 158, 0.76);

  border-radius: 3px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border: 3px solid #03989E;

  margin: auto;


  button{
      background: none;

      display: flex;
      outline: none;
      border: none;

      color: #fafafa;
      font-size: 10pt;

      text-align: center;
      
      margin: auto;
      line-height: 15px;
      text-indent: 5px;

      cursor: pointer;

      height: 100%;

      svg{
          margin: auto;
          font-size: 20px;
          text-align: center;
      }

      strong{
        margin: auto;
        text-align: center;
        font-family: 'Ubuntu Condensed', sans-serif;
      }
  }
`

export const Title = styled.h1`
    color: #000000;
    font-family: 'Manjari', sans-serif;

    text-align: center;
`

export const Price = styled.strong`
    font-family: 'Sunflower', sans-serif;
    font-size: 21pt;
    color: #FF5A00;

    text-align: center;
    margin: 5px;
`

export const Installments = styled.span`
    font-family: 'Sunflower', sans-serif;
    font-weight: bold;
    color: #AAAAAA;
    font-size: 14pt;

    text-align: center;

    margin-bottom: 20px;
`
