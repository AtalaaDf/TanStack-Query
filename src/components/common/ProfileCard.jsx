import BentoCard from '@/components/common/BentoCard'
import { User } from 'lucide-react'

export default function ProfileCard({ fullName, birthDate }) {
  const formattedDate = birthDate
    ? new Date(birthDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    : '-'

  return (
    <BentoCard className="h-full flex flex-col justify-center items-center text-center gap-3">
      <div className="rounded-full bg-gray-100 p-4 shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]">
        <User className="w-8 h-8 text-gray-600" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{fullName}</h2>
        <p className="text-sm text-gray-500">{formattedDate}</p>
      </div>
    </BentoCard>
  )
}