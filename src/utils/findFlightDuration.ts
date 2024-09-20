export default function findFlightDuration(
  departureTime: Date,
  arrivalTime: Date
) {
  return (arrivalTime.getTime() - departureTime.getTime()) / 1000 / 60 / 60
}
