import { BoardingPassInfo, BoardingPassInfoDTO } from '../types'

export default function boardingPassFromDTO(
  dto: BoardingPassInfoDTO
): BoardingPassInfo {
  return {
    ...dto,
    arrivalTime: new Date(dto.arrivalTime),
    departureTime: new Date(dto.departureTime),
    gateClosesTime: new Date(dto.gateClosesTime),
    boardingTime: new Date(dto.boardingTime),
  }
}
