import { BoardingPassInfo } from '../types'
import FlightTimeDisplay from './FlightTimeDisplay'
import GateInformationDisplay from './GateInformationDisplay'
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
          <FlightTimeDisplay
            departureTime={boardingPass.departureTime}
            arrivalTime={boardingPass.arrivalTime}
            departureAirport={boardingPass.departureAirport}
            destinationAirport={boardingPass.destinationAirport}
          />
          <br />
          <GateInformationDisplay
            terminal={boardingPass.terminal}
            boardingTime={boardingPass.boardingTime}
            gateClosesTime={boardingPass.gateClosesTime}
          />
          <br />
        </>
      )}
    </div>
  )
}
