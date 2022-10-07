import styled from 'styled-components'

export const HomeContainer = styled.main`
  /**
  flex - Esta propriedade é uma forma abreviada 
  para a escrita das propriedades flex-grow, 
  flex-shrink e flex-basis, nesta ordem.
  */
  flex: 1;
  //margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap; /** quebra os campos em tela em mais linha, quando a tela for menor que o conteúdo */
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  padding: 2rem 0rem;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden; /** overflow hidden para que a imagem fique limitada aos cantos da div, veja que a div pai tem border-radius e aqui não. */
  display: flex;
  justify-content: center;
`
