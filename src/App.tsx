import { useState } from 'react'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewPositionsModal } from './components/PositionsModal';
import { GlobalStyle } from './styles/global'

export function App() {

  // useState - hook
  // const [nomeDoEstado, funcaoParaAlterarOEstado] = useState
  const [isPositionsModalOpen, setIsPositionsModalOpen] = useState(false)

  function handleOpenPositionsModal() {
    setIsPositionsModalOpen(true)
  }

  function handleClosePositionsModal() {
    setIsPositionsModalOpen(false)
  }

  return (
    <div className="App">
      <Header onOpenPositionsModal={handleOpenPositionsModal} />

      <Dashboard />    

      <NewPositionsModal

        isOpen={isPositionsModalOpen}
        onRequestClose={handleClosePositionsModal}
        
      />

      <GlobalStyle />
    </div>
  );
}
