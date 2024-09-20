import { useState } from 'react'
import './styles/App.css'
import Header from './styles/Components/Header'

function App() {
  const [boardingPassIndex, setboardingPassIndex] = useState(0)

  const showNextBoardingPass = () => {
    setboardingPassIndex(boardingPassIndex + 1)
  }

  return (
    <div id="container">
      <Header showNextBoardingPass={showNextBoardingPass} />
      <div id="mainSection">mainSection</div>
      <div id="footer">footer</div>
    </div>
  )
}

export default App
