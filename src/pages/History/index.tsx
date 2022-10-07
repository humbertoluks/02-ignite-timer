import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1></h1>

      {/**
       * Essa div foi criada em volta da table para controlar o comportamento da
       * table no mobile, cria uma barra de rolagem caso a largura da tabela
       * seja maior que o tamanho disponível no cointainer, o que possibilita
       * ao usurio realizar um scroll
       */}
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa A</td>
              <td>Há cerca de 20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa B</td>
              <td>Há cerca de 20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa C</td>
              <td>Há cerca de 20 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
