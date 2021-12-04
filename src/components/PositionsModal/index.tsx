import {useState, FormEvent } from 'react'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'

import { Container, TiposDeMaoDeObra, Pintarbotao } from './styles'

import api from '../../Services/api'

interface NewInclusionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}
 
export function NewPositionsModal({ isOpen, onRequestClose }: NewInclusionModalProps ){
  const [description, setDescription] = useState('')
  const [cbo, setCBO] = useState('')
  const [salary, setSalary] = useState(0)
  const [labor, setLabor] = useState('Direta')
  const [occupation, setOccupation] = useState('Não')
  

  async function handleCreatePositions(event: FormEvent){
    event.preventDefault();
    const data = {
      description,
      cbo,
      salary,
      labor,
      occupation
    }

    await api.post('/position', data)
    
    setDescription('')
    setCBO('')
    setSalary(0)
    setLabor('Direta')
    setOccupation('Não')
  }

    return(
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="reactModalOverlay" className="reactModalContent">        

          <button type="button" onClick={onRequestClose} className="reactModalClose">
            <img src={closeImg} alt="Fechar Modal" />
          </button>

          <Container onSubmit = {handleCreatePositions}>
            <h2>Registro de Função</h2>

            <input placeholder="Descrição" type="text" value = {description} onChange = {event => setDescription(event.target.value)}/>
            <input placeholder="CBO" type="text" value = {cbo} onChange = {event => setCBO(event.target.value)}/>
            <input placeholder="Salário" type="number" value = {salary} onChange = {event => setSalary(Number(event.target.value))}/>            

            <h3>Tipo de Mão de Obra</h3>

            <TiposDeMaoDeObra>
              <Pintarbotao type='button' onClick={() => setLabor('Direta')} isActive={labor === 'Direta'}>
                <span>Direta</span>
              </Pintarbotao>
              <Pintarbotao type='button' onClick={() => setLabor('Indireta')} isActive={labor === 'Indireta'}>
                <span>Indireta</span>
              </Pintarbotao>
            </TiposDeMaoDeObra>
            
            <h3>Exerce Função de Líder?</h3>

            <TiposDeMaoDeObra>
              <Pintarbotao type='button' onClick={() => setOccupation('Sim')} isActive={occupation === 'Sim'}>
                <span>Sim</span>
              </Pintarbotao>
              <Pintarbotao type='button' onClick={() => setOccupation('Não')} isActive={occupation === 'Não'}>
                <span>Não</span>
              </Pintarbotao>
            </TiposDeMaoDeObra>

            <button type="submit">Confirmar</button>
          </Container>

      </Modal>
    )
}