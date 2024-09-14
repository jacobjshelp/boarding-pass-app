type TicketInfoBoxProps = {
  labelText: string
  value: string
}

function InfoBox({ labelText, value }: TicketInfoBoxProps) {
  return (
    <div className="infoBox">
      <span>{labelText}</span>
      <span>{value}</span>
      <span></span>
    </div>
  )
}

export default InfoBox
