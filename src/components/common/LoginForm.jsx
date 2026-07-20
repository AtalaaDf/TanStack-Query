import { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useSignIn } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Lock } from 'lucide-react'

const neoInset = "bg-gray-100 border-none shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus-visible:ring-0"

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const signIn = useSignIn()

  function handleSubmit(e) {
    e.preventDefault()
    signIn.mutate({ email, password }, { onSuccess: () => navigate('/dashboard') })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`pl-9 ${neoInset}`}
            required
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`pl-9 ${neoInset}`}
            required
          />
        </div>
      </div>

      {signIn.isError && <p className="text-red-500 text-sm">{signIn.error.message}</p>}

      <Button
        type="submit"
        disabled={signIn.isPending}
        className="bg-gray-100 text-gray-700 font-medium shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:bg-gray-100 hover:shadow-[2px_2px_6px_#d1d1d1,-2px_-2px_6px_#ffffff]"
      >
        {signIn.isPending ? 'Loading...' : 'Login'}
      </Button>

      <p className="text-sm text-center text-gray-500">
        Belum punya akun?{' '}
        <Link to="/register" className="text-gray-700 underline font-medium">Register</Link>
      </p>
    </form>
  )
}