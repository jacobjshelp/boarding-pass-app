import { useQuery } from '@tanstack/react-query'
import boardingPassFromServerResponse from '../utils/convertDTO'
import { BoardingPassInfoDTO } from '../types'

export default function useGetBoardingPasses() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/boardingPasses')
      let data = await response.json()
      data = data.map((bp: BoardingPassInfoDTO) => {
        return boardingPassFromServerResponse(bp)
      })
      return data
    },
  })
}
