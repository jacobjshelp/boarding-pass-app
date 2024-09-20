import BoardingPass from './BoardingPass'
import { BoardingPassInfo } from '../types'
import TicketInfo from './TicketInfo'

function MainSection({
  data,
  boardingPassIndex,
}: {
  data?: BoardingPassInfo[]
  boardingPassIndex: number
}) {
  const boardingPass = data !== undefined ? data[boardingPassIndex] : undefined

  return (
    <div id="mainSection">
      <BoardingPass boardingPass={boardingPass} />
      <TicketInfo />
    </div>
  )
}

export default MainSection
