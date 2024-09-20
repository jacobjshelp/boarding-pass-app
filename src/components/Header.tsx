import { ArrowRightIcon } from '../icons/ArrowRightIcon'
import ProfilePhoto from './ProfilePhoto'

function Header({
  showNextBoardingPass,
}: {
  showNextBoardingPass: () => void
}) {
  return (
    <div id="header">
      <ProfilePhoto />
      <div className="nextBoardingPassButton" onClick={showNextBoardingPass}>
        <p>Next flight</p>
        <ArrowRightIcon />
      </div>
    </div>
  )
}

export default Header
