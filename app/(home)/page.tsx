import Features from "./Features"
import Stats from "./Stats"
import { ImageWithText } from "@/components"
import JunkshopGallery from "@/components/JunkshopGallery";
// import ContactForm from "@/components/Contact"
import { ContactFormRHF } from "@/components/Contact/rhf"
import VideoGallery from "@/components/VideoGallery"

const SamplePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <Features />

      <Stats
        heading={(<>The Numbers Speak for <br />Themselves</>)}
      />

      <ImageWithText
        imageSrc="/images/model1.jpg"
        heading="Earn up to 4.5% APY on your business savings"
        description="Lorem ipsum dolor sit amet..."
        buttonText="Learn More"
        variant="slide" // Scroll-triggered slide-in animation
      />

      <ImageWithText
        imageSrc="/images/model2.jpg"
        heading="Fast and Reliable Junk Removal Services"
        description="We help you clear out unwanted items quickly and efficiently..."
        buttonText="Get Started"
        imageFirst={true}
        variant="zoom" // Scroll reveal with zoom effect
      />
      <JunkshopGallery />

      <ContactFormRHF />

      <VideoGallery />
    </div>
  )
}

export default SamplePage