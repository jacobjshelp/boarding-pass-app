import { AirplaneIcon } from '../icons/AirplaneIcon'
import findFlightDuration from '../utils/findFlightDuration'

function FlightTimeDisplay({
  departureTime,
  arrivalTime,
  departureAirport,
  destinationAirport,
}: {
  departureTime: Date
  arrivalTime: Date
  departureAirport: string
  destinationAirport: string
}) {
  return (
    <div className="fromToDisplay">
      <span className="airPortName">{departureAirport}</span>
      <span>
        <AirplaneIcon />
      </span>
      <span className="airPortName">{destinationAirport}</span>
      <span>{departureTime.toLocaleTimeString()}</span>
      <span>{findFlightDuration(departureTime, arrivalTime)} hours</span>
      <span>{arrivalTime.toLocaleTimeString()}</span>
    </div>
  )
}

export default FlightTimeDisplay
