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
export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  /** 
   * flex-grow: O componente tem a habilidade de crescer alem do tamanho original (1-Sim, 0-Não)
   * flex-shrink: O componente tem a habilidade de encolher se necessário (1-Sim, 0-Não)
   * flex-basis: Tamanho ideal do componente se ele não estiver em Grow ou Shirink (1-Sim, 0-Não)
   */
  flex: 1;
  /** & - referencia o proprio componente, como se fosse o this */
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
