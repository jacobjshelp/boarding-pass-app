function NameDisplay({
  airlineName,
  passengerLastName,
  passengerFirstName,
}: {
  airlineName: string
  passengerLastName: string
  passengerFirstName: string
}) {
  return (
    <div>
      <h1>{airlineName}</h1>
      <h2>
        {passengerLastName}, {passengerFirstName}
      </h2>
    </div>
  )
}

export default NameDisplay
