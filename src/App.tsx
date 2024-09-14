import { useState } from 'react'
import './App.css'
import BoardingPass from './components/BoardingPass'
import Footer from './components/Footer'
import TicketInfo from './components/TicketInfo'
import Header from './components/Header'
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
      <div id="middle">
        {data && <BoardingPass info={data[boardingPassIndex]} />}
        {!data && <BoardingPass info={undefined} />}
        <TicketInfo />
      </div>
      <Footer />
    </div>
  )
}

export default App
