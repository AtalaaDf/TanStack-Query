import { cn } from "@/lib/utils"

function BentoCard({ children, className }) {
  return (
    <div className={cn("rounded-xl bg-gray-100 p-6 shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff]", className)}>
      {children}
    </div>
  )
}

export default BentoCard