import { BoardingPassInfo, TicketInfo } from '../types'

export const dummyTicketInfo: TicketInfo = {
  bookingCode: 'T34RL',
  ticketNumber: '22021583',
}

export const dummyBoardingPasses: BoardingPassInfo[] = [
  {
    airlineName: 'AirWaves',
    qRValue: 'specialValue',
    passengerFirstName: 'John',
    passengerLastName: 'Doe',
    terminal: '2',
    departureTime: new Date(2024, 7, 10, 16, 45),
    arrivalTime: new Date(2024, 7, 10, 20, 45),
    boardingTime: new Date(2024, 7, 10, 16, 45),
    gateClosesTime: new Date(2024, 7, 10, 16, 20),
  },
  {
    airlineName: 'Swiftly',
    qRValue: 'AnotherValue',
    passengerFirstName: 'Jane',
    passengerLastName: 'Doe',
    terminal: '1',
    departureTime: new Date(2024, 7, 10, 16, 45),
    arrivalTime: new Date(2024, 7, 10, 21, 45),
    boardingTime: new Date(2023, 7, 10, 16, 45),
    gateClosesTime: new Date(2023, 7, 10, 16, 55),
  },
]
