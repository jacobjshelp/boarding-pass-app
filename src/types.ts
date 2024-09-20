export type TicketInfo = {
  bookingCode: string
  ticketNumber: string
}

export type BoardingPassInfo = {
  airlineName: string
  qRValue: string
  passengerFirstName: string
  passengerLastName: string
  terminal: string
  departureTime: Date
  arrivalTime: Date
  boardingTime: Date
  gateClosesTime: Date
  departureAirport: string
  destinationAirport: string
}

export type BoardingPassInfoDTO = {
  airlineName: string
  qRValue: string
  passengerFirstName: string
  passengerLastName: string
  terminal: string
  departureTime: string
  arrivalTime: string
  boardingTime: string
  gateClosesTime: string
  departureAirport: string
  destinationAirport: string
}
