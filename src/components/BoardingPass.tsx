import { BoardingPassInfo } from '../types'
import LoadingDisplay from './LoadingDisplay'

export default function BoardingPass({
  boardingPass,
}: {
  boardingPass?: BoardingPassInfo
}) {
  return (
    <div id="boardingPass">
      {!boardingPass && <LoadingDisplay />}
      {boardingPass && boardingPass.airlineName}
    </div>
  )
}
