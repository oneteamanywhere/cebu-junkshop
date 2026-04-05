import { SimpleCard, Icon } from "@/components"

interface Features {
  id: number;
  title: string
  description: string
  color: string;
}

const features: Features[] = [
  {
    id: 1,
    "title": "Reliable Junk Removal",
    "description": "Fast and dependable removal of unwanted items from any space.",
    "color": "purple"
  },
  {
    id: 2,
    "title": "Efficient Hauling Solutions",
    "description": "Quick hauling services designed to save you time and effort daily.",
    "color": "cyan"
  },
  {
    id: 3,
    "title": "Eco-Friendly Disposal",
    "description": "Proper sorting, recycling, and disposal to protect the environment.",
    "color": "blue"
  },
  {
    id: 4,
    "title": "Community-Focused Service",
    "description": "Dedicated to keeping communities clean, organized, and clutter-free.",
    "color": "blue"
  },
  {
    id: 5,
    "title": "Customer Satisfaction Guaranteed",
    "description": "Friendly, reliable service focused on meeting your expectations.",
    "color": "stone"
  },
  {
    id: 6,
    "title": "Sustainable Waste Management",
    "description": "Reducing landfill waste through responsible recycling practices.",
    "color": "emerald"
  }
]


const Features = () => {

  return (
    <div className="p-4 flex flex-col gap-6">
      {/* HEADER */}
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-2xl font-semibold">What We Offer</h2>
        <p>Reliable junk removal and eco-friendly solutions for cleaner, clutter-free spaces.</p>
      </div>
      {/* FEATURE LIST */}
      <div className="flex gap-4 flex-wrap justify-center">
        {features.map((feature) => (
          <SimpleCard key={feature.id} color={feature.color} className="w-3/12">
            <Icon name="lego" size={30} />
            <h3 className="text-md font-semibold mt-6">{feature.title}</h3>
            <p className="text-sm mt-3">{feature.description}</p>
          </SimpleCard>
        ))}
      </div>
    </div>
  )
}

export default Features