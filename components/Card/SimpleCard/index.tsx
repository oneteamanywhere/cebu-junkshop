import cn from "classnames"

interface Props {
  className?: string
  color?: string
  children: React.ReactNode
}

const colorMapping = {
  red: "bg-red-500/50",
  blue: "bg-blue-500/50",
  green: "bg-green-500/50",
  yellow: "bg-yellow-500/50",
  purple: "bg-purple-500/50",
  pink: "bg-pink-500/50",
  orange: "bg-orange-500/50",
  gray: "bg-gray-500/50",
  cyan: "bg-cyan-500/50",
  stone: "bg-stone-500/50",
  emerald: "bg-emerald-500/50",
}

export const SimpleCard = ({ color, className, children}: Props) => {
  return (
    <div className={cn(
      "rounded-lg p-4",
      colorMapping[color as keyof typeof colorMapping] || '',
      className
    )}>
      { children }
    </div>
  )
}