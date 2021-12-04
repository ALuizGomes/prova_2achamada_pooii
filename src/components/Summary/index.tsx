import { useEffect, useState } from "react";
import api from "../../Services/api";

import { Container } from "./styles";

interface ISummary{
  disciplina: string
  cargahoraria: number
}

export function Summary() {
  const [contador, setContador] = useState<ISummary[]>([])

  useEffect(() => {
    api.get('position').then(response => setContador(response.data))
  })
  
  // const contH = contador.filter(conta => conta.cargahoraria)
  // const contD = contador.filter(conta => conta.disciplina)

  return (
    <Container>
      <div>
        <header>
          <p>Total de Cargos</p>
          <strong>00</strong>
        </header>
      </div>

    </Container>
  )
}