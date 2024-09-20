import { BoardingPassInfo } from '../types'
import LoadingDisplay from './LoadingDisplay'
import NameDisplay from './NameDisplay'
import QRCodeDisplay from './QRCodeDisplay'

export default function BoardingPass({
  boardingPass,
}: {
  boardingPass?: BoardingPassInfo
}) {
  return (
    <div id="boardingPass">
      {!boardingPass && <LoadingDisplay />}
      {boardingPass && (
        <>
          <NameDisplay
            airlineName={boardingPass.airlineName}
            passengerLastName={boardingPass.passengerLastName}
            passengerFirstName={boardingPass.passengerFirstName}
          />
          <QRCodeDisplay qRValue={boardingPass.qRValue} />
          <br />
        </>
      )}
    </div>
  )
}
