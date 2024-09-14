import { BoardingPassInfo } from '../types'
import FlightTimeDisplay from './FlightTimeDisplay'
import GateInformationDisplay from './GateInformationDisplay'
import NameDisplay from './NameDisplay'
import QRCodeDisplay from './QRCodeDisplay'
import LoadingDisplay from './LoadingDisplay'

export default function BoardingPass({ info }: { info?: BoardingPassInfo }) {
  return (
    <div id="boardingPass" className="mainContainer">
      {!info && <LoadingDisplay />}
      {info && (
        <>
          <NameDisplay
            airlineName={info.airlineName}
            passengerLastName={info.passengerLastName}
            passengerFirstName={info.passengerFirstName}
          />
          <QRCodeDisplay qRValue={info.qRValue} />
          <br />
          <FlightTimeDisplay
            departureTime={info.departureTime}
            arrivalTime={info.arrivalTime}
            departureAirport={info.departureAirport}
            destinationAirport={info.destinationAirport}
          />
          <br />
          <GateInformationDisplay
            terminal={info.terminal}
            boardingTime={info.boardingTime}
            gateClosesTime={info.gateClosesTime}
          />
          <br />
        </>
      )}
    </div>
  )
}
