import { useAuthContext } from '@/context/AuthContext'
import { useProfile } from '@/hooks/useProfile'
import { useSignOut } from '@/hooks/useAuth'
import ProfileCard from '@/components/common/ProfileCard'
import SkillsCard from '@/components/common/SkillsCard'
import ProjectsCard from '@/components/common/ProjectsCard'
import ContactCard from '@/components/common/ContactCard'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export default function DashboardPage() {
  const { user } = useAuthContext()
  const { data: profile, isLoading, isError, error } = useProfile(user?.id)
  const signOut = useSignOut()

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Memuat portofolio...</div>
  }

  if (isError) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="flex justify-end mb-4">
        <Button variant="ghost" onClick={() => signOut.mutate()} className="text-gray-500 gap-2">
          <LogOut className="w-4 h-4" /> Logout
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div className="col-span-2 row-span-2">
          <ProfileCard fullName={profile.full_name} birthDate={profile.birth_date} />
        </div>
        <div className="col-span-2">
          <SkillsCard skills={profile.skills} />
        </div>
        <div>
          <ProjectsCard projects={profile.projects} />
        </div>
        <div>
          <ContactCard contact={profile.contact} />
        </div>
      </div>
    </div>
  )
}