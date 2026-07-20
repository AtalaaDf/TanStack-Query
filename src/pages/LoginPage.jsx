import LoginForm from '@/components/common/LoginForm'
import BentoCard from '@/components/common/BentoCard'
import { LogIn } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <BentoCard className="w-full max-w-md">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="rounded-full bg-gray-100 p-3 shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]">
            <LogIn className="w-6 h-6 text-gray-600" />
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Selamat Datang</h1>
          <p className="text-sm text-gray-500">Login untuk melihat portofolio kamu</p>
        </div>
        <LoginForm />
      </BentoCard>
    </div>
  )
}