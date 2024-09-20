# Steps

- Clone complete project and look around at the code
- Define types (all at once, this is unusual but we do it for the sake of simplicity)
- Create UI structure (Header, MainSection, Footer) and the surrounding container div
- Create the Header component with ProfilePhoto, text, and ArrowRightIcon with onClick for showing next boardingPass
- Use useQuery from tanstack to make a hook to fetch the data from the backend.
- Make the MainSection component and an empty BoardingPass Component. In the App component fetch the data, and pass the data along with the current index to the Main Section, which then gives the data to the BoardingPass component.
- Add the TicketInfo component and the InfoBox components with hardcoded data.
- Create the LoadingDisplay and show it in the BoardingPass component if data is still undefined.
- Create the NameDisplay and the QRCodeDisplay
- Create the FlightTimeDisplay and the GateInformationDisplay

## Extra challenges

- Conditionally render the next flight button (only show it if there are multiple boarding passes)
- Instead of hardcoding the Ticket Info then get it from the backend (similar to the data for the boarding pass)
-
