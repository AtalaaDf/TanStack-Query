import { Input } from '@/components/ui/input'
import { User, Calendar } from 'lucide-react'
import { neoInset } from '@/lib/styles'

export default function ProfileFields({ fullName, setFullName, birthDate, setBirthDate }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Profil</h2>
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input placeholder="Nama lengkap" value={fullName}
          onChange={(e) => setFullName(e.target.value)} className={`pl-9 ${neoInset}`} required />
      </div>
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input type="date" value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)} className={`pl-9 ${neoInset}`} required />
      </div>
    </div>
  )
}