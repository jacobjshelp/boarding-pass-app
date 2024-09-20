import QRCode from 'react-qr-code'

function QRCodeDisplay({ qRValue }: { qRValue: string }) {
  return (
    <div className="qRCodeDisplay">
      <div className="qRCodeContainer">
        <QRCode
          value={qRValue}
          size={256}
          level="H"
          style={{ width: '100%' }}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  )
}

export default QRCodeDisplay
