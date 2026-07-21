import { useProfiles } from '@/hooks/useProfiles'
import { useSignOut } from '@/hooks/useAuth'
import UserListItem from '@/components/common/UserListItem'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { LogOut, Users } from 'lucide-react'

export default function AdminPage() {
  const { data: profiles, isLoading, isError, error } = useProfiles()
  const signOut = useSignOut()

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Memuat data user...</div>
  }

  if (isError) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="flex items-center justify-between max-w-5xl mx-auto mb-6">
        <Button variant="ghost" asChild className="text-gray-500 gap-2">
          <Link to="/dashboard">
          <ArrowLeft className="w-4 h-4" /> Dashboard
          </Link>
        </Button>
        <div className="flex items-center gap-2 text-gray-700">
          <Users className="w-5 h-5" />
          <h1 className="text-lg font-semibold">Semua User ({profiles.length})</h1>
        </div>
        <Button variant="ghost" onClick={() => signOut.mutate()} className="text-gray-500 gap-2">
          <LogOut className="w-4 h-4" /> Logout
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
        {profiles.map((profile) => (
          <UserListItem
            key={profile.id}
            fullName={profile.full_name}
            birthDate={profile.birth_date}
            role={profile.role}
            skillsCount={profile.skills?.length ?? 0}
          />
        ))}
      </div>
    </div>
  )
}