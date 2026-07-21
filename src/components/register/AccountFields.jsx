import { Input } from '@/components/ui/input'
import { Mail, Lock } from 'lucide-react'
import { neoInset } from '@/lib/styles'

export default function AccountFields({ email, setEmail, password, setPassword }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Akun</h2>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input type="email" placeholder="nama@email.com" value={email}
          onChange={(e) => setEmail(e.target.value)} className={`pl-9 ${neoInset}`} required />
      </div>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} className={`pl-9 ${neoInset}`} required minLength={6} />
      </div>
    </div>
  )
}