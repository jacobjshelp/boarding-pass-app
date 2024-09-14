import InfoBox from './InfoBox'

export default function TicketInfo() {
  return (
    <div>
      <h1>Ticket Info</h1>
      <InfoBox labelText={'Booking code'} value={'T34RL'} />
      <InfoBox labelText={'Ticket number'} value={'22021583'} />
    </div>
  )
}
