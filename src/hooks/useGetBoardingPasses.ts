import { useQuery } from '@tanstack/react-query'
import boardingPassFromDTO from '../utils/convertDTO'
import { BoardingPassInfoDTO } from '../types'

export default function useGetBoardingPasses() {
  const baseURL = import.meta.env.VITE_BASE_URL

  return useQuery({
    queryKey: ['boardingPasses'],
    queryFn: async () => {
      const response = await fetch(`${baseURL}/boardingPasses`)
      let data = await response.json()
      data = data.map((bp: BoardingPassInfoDTO) => {
        return boardingPassFromDTO(bp)
      })
      return data
    },
  })
}
