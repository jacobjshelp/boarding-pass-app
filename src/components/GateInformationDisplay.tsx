import InfoBox from './InfoBox'

function GateInformationDisplay({
  terminal,
  boardingTime,
  gateClosesTime,
}: {
  terminal: string
  boardingTime: Date
  gateClosesTime: Date
}) {
  return (
    <div>
      <InfoBox labelText={'Terminal'} value={terminal} />
      <InfoBox
        labelText={'Boarding time'}
        value={boardingTime.toLocaleTimeString()}
      />
      <InfoBox
        labelText={'Gate closes at'}
        value={gateClosesTime.toLocaleTimeString()}
      />
    </div>
  )
}

export default GateInformationDisplay
