import { useState } from 'react'
import './styles/App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import useGetBoardingPasses from './hooks/useGetBoardingPasses'
import MainSection from './components/MainSection'

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
      <MainSection boardingPassIndex={boardingPassIndex} data={data} />
      <Footer />
    </div>
  )
}

export default App
