import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        {/* Explicação: O endereço "/" ele, de certa forma, existe tanto nas 
            rotas "/" (obviamente)e "/history".
            Ou seja, se tivessemos uma outra rota "/history/sample", o NavLink 
            da rota "/history" também estaria ativado já que ela também existe 
            dentro da rota "(/history)/sample".
            
            Significa que a rota "/history/sample" é descendente da 
            "/history" (ou "descendant path" no inglês).
            
            A props "end" informa ao NavLink que a rota termina ali e que o 
            mesmo não deve ser ativado por nenhuma descendência. 
        */}

        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
