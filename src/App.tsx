import { useState } from 'react'
import './styles/App.css'
import Header from './styles/Components/Header'
import useGetBoardingPasses from './hooks/useGetBoardingPasses'

function App() {
  const [boardingPassIndex, setboardingPassIndex] = useState(0)
  const { data } = useGetBoardingPasses()

  const showNextBoardingPass = () => {
    const nextBoardingPassIndex = (boardingPassIndex + 1) % data.length
    setboardingPassIndex(nextBoardingPassIndex)
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
