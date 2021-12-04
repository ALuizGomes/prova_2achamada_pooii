import { useState, useEffect } from "react";

import closeImg from '../../assets/close.svg';

import { Container } from "./styles";

import api from '../../Services/api'

interface IPositions{
  id: string;
  description: string;
  cbo: string;
  salary: number;
  labor: string;
  occupation: string;
}

export function PositionsTable() {
  const [position, setPosition] = useState<IPositions[]>([])

  useEffect(() => {
    api.get('position').then(response => setPosition(response.data))
  }, [position] )

  async function onDelete(id: string){
    await api.delete(`/position/${id}`)
    setPosition(position.filter(facul => facul.id !== id))
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>CBO</th>
            <th>Tipo de Mão de Obra</th>
            <th>Função</th>
            <th>Salaário</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

            {position.map(pos => (
              <tr>
                <td>{pos.description}</td>
                <td>{pos.cbo}</td>
                <td>{pos.labor}</td>
                <td>{pos.occupation}</td>
                <td>{pos.salary}</td>
                <td>
                  <button type="button" onClick={() => onDelete(pos.id)}>
                    <img src={closeImg} alt="Excluir Posição" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>

      </table>
    </Container>
  )
}