import CenterContainer from "../../components/containers/CenterContainer"
import { SpecialHeading } from "../../components/heading"

const Hero = () => {
  return (
    <div className="hero--container">
      <div className="hero--wrapper">
        <CenterContainer>
          <SpecialHeading mainText='Experience the' specialText='power' />
        </CenterContainer>
      </div>
    </div>
  )
}

export default Hero