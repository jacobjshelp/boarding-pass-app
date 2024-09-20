import { CSSProperties } from 'react'
import { ClipLoader } from 'react-spinners'

const override: CSSProperties = {
  textAlign: 'center',
  verticalAlign: 'middle',
}

function LoadingDisplay() {
  return (
    <div className="loadingDisplay">
      <ClipLoader size={120} cssOverride={override} speedMultiplier={0.7} />
    </div>
  )
}

export default LoadingDisplay
