import Image from "next/image"

interface ImageWithTextProps {
  imageSrc: string;
  heading: string;
  description: string;
  buttonText: string;
  imageFirst?: boolean;
}

export const ImageWithText = ({ imageSrc, heading, description, buttonText, imageFirst = true }: ImageWithTextProps) => {
  return (
    <div className="flex gap-5 bg-slate-100">
      <div className="w-1/2">
        <Image src={imageSrc} alt="image1" width={720} height={720} />
      </div>

      <div className="w-1/2 flex flex-col gap-3 justify-end pb-2">
        <h2 className="text-3xl font-semibold w-[90%]">{heading}</h2>
        <p className="text-sm w-[400px]">{description}</p>
        <button className="bg-black text-white px-4 py-2 rounded-full max-w-[160px]">{buttonText}</button>
      </div>
    </div>
  )
}