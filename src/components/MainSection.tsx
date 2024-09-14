import BoardingPass from './BoardingPass'
import TicketInfo from './TicketInfo'
import { BoardingPassInfo } from '../types'

function MainSection({
  data,
  boardingPassIndex,
}: {
  data?: BoardingPassInfo[]
  boardingPassIndex: number
}) {
  return (
    <div id="mainSection">
      {data && <BoardingPass info={data[boardingPassIndex]} />}
      {!data && <BoardingPass info={undefined} />}
      <TicketInfo />
    </div>
  )
}

export default MainSection
