import logoImg from '../../assets/provita.png'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenPositionsModal: () => void;
}

export function Header({ onOpenPositionsModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Trabalhador" />
        <button type="button" onClick={onOpenPositionsModal}>
          Registro de Função
        </button>
      </Content>
    </Container>
  )
}