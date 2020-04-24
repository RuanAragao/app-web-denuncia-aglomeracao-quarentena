import React from 'react'
import Topico from '../components/Topico'
import styled from 'styled-components'

const SobrePage: React.FC = () => (
  <>
    <Topico>Sobre o app</Topico>
    <Descricao>
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
      sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
      dolor sit amet
    </Descricao>

    <Topico>Quem somos</Topico>
    <Descricao>
      Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
      sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
      dolor sit amet
    </Descricao>

    <Topico>Contribuidores</Topico>
    <Descricao>
      Ana Paula Mendes - Idealizadora
      <br />
      Sampaio Leal - Front/UI
      <br />
      Max Lima - Mobile/Back
    </Descricao>
  </>
)

export default SobrePage

const Descricao = styled.p`
  width: 90%;
`