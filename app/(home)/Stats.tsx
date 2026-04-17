import { ReactNode } from "react"

interface Stats {
  value: string
  label: ReactNode
}

const stats: Stats[] = [
  {
    value: "98%",
    label: (
      <>
        customer retention rate businesses stay with us year after year
      </>
    ),
  },
  {
    value: "15K+",
    label: (
      <>
        New accounts opened last quarter helping companies grow faster
      </>
    ),
  },
  {
    value: "4.9/5",
    label: (
      <>
        Customer satisfaction score awarded for exceptional business banking services
      </>
    ),
  },
]


interface StatsProps {
  heading: string | ReactNode
}

const Stats = ({ heading }: StatsProps) => {
  return (
    <div className="p-8 bg-emerald-950 text-white flex flex-col gap-10">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">
          {heading}
        </h2>
      </div>

      <div className="flex justify-center items-center gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center px-4 relative flex flex-col gap-3">
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            {stat.label}

            {index !== stats.length - 1 && (
              <div className="absolute right-0 top-0 h-full border-r border-white/40"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats