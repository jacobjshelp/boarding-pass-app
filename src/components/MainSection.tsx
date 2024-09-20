import BoardingPass from './BoardingPass'
import { BoardingPassInfo } from '../types'

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
    </div>
  )
}

export default MainSection
