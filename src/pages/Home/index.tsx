import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Play } from 'phosphor-react'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

// interface NewCicleFormData {
//   task: string
//   minutesAmount: number
// }
type NewCicleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmout: number
}

export function Home() {
  const [cycles, setCycle] = useState<Cycle[]>([])
  const [activeCicleId, setActiveCicleId] = useState<string | null>([])

  const {
    register,
    handleSubmit,
    watch,
    // formState,
    reset,
  } = useForm<NewCicleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCicleFormData) {
    const id = String(new Date().getTime())

    const newCicle: Cycle = {
      id,
      task: data.task,
      minutesAmout: data.minutesAmount,
    }

    /**
     * quando alteramos um estado e este depende da sua versão anterior, o react
     * tem uma regrinha que deve ser seguida.
     * O valor do estado deve ser setado no formato de função (Closures)
     * Por isso usamos a arrowfunction como visualizado abaixo
     */

    setCycle((state) => [...state, newCicle])
    setActiveCicleId(id)

    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCicleId)
  console.log(activeCycle)

  const task = watch('task')
  const isSubmitDisable = !task

  // console.log(formState.errors)

  return (
    <HomeContainer>
      <form id="pomodoroForm" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto A" />
            <option value="Projeto B" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton
          type="submit"
          id="pomodoroForm"
          disabled={isSubmitDisable}
        >
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
