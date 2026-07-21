import BentoCard from '@/components/common/BentoCard'
import { User, Shield } from 'lucide-react'

export default function UserListItem({ fullName, birthDate, role, skillsCount }) {
  const formattedDate = birthDate
    ? new Date(birthDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    : '-'

  return (
    <BentoCard className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-gray-100 p-3 shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]">
          <User className="w-5 h-5 text-gray-600" />
        </div>
        {role === 'admin' && (
          <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 rounded-lg px-2 py-1 shadow-[2px_2px_5px_#d1d1d1,-2px_-2px_5px_#ffffff]">
            <Shield className="w-3 h-3" /> admin
          </span>
        )}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{fullName || 'Tanpa nama'}</h3>
        <p className="text-sm text-gray-500">{formattedDate}</p>
      </div>
      <p className="text-xs text-gray-400">{skillsCount} skill terdaftar</p>
    </BentoCard>
  )
}