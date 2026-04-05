import Features from "./Features"
import Stats from "./Stats"
import { ImageWithText } from "@/components"


const SamplePage = () => {

  return (
    <div className="flex flex-col gap-10">
      <Features />
      <Stats heading={(<>The Numbers Speak for <br />Themselves</>)} />
      <ImageWithText
        imageSrc="/images/model1.jpg"
        heading="Earn up to 4.5% APY on your business savings"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        buttonText="Learn More"
      />
    </div>
  )
}

export default SamplePage