import RegisterForm from '@/components/common/RegisterForm'
import BentoCard from '@/components/common/BentoCard'
import { UserPlus } from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-12">
      <BentoCard className="w-full max-w-lg">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="rounded-full bg-gray-100 p-3 shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff]">
            <UserPlus className="w-6 h-6 text-gray-600" />
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Buat Akun & Portofolio</h1>
          <p className="text-sm text-gray-500 text-center">Isi data di bawah untuk sekaligus membuat akun dan portofolio kamu</p>
        </div>
        <RegisterForm />
      </BentoCard>
    </div>
  )
}