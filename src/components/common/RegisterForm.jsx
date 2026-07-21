import { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useSignUp } from '@/hooks/useAuth'
import { useCreateProfile } from '@/hooks/useUpdateProfile'
import { Button } from '@/components/ui/button'
import AccountFields from '@/components/register/AccountFields'
import ProfileFields from '@/components/register/ProfileFields'
import SkillsFields from '@/components/register/SkillsFields'
import ProjectsFields from '@/components/register/ProjectsFields'
import ContactFields from '@/components/register/ContactFields'

export default function RegisterForm() {
  const navigate = useNavigate()
  const signUp = useSignUp()
  const createProfile = useCreateProfile()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [skills, setSkills] = useState([''])
  const [projects, setProjects] = useState([{ title: '', description: '', link: '' }])
  const [contact, setContact] = useState({ email: '', github: '', linkedin: '' })
  const [errorMsg, setErrorMsg] = useState('')

  function updateSkill(index, value) {
    const next = [...skills]
    next[index] = value
    setSkills(next)
  }
  function addSkill() { setSkills([...skills, '']) }
  function removeSkill(index) { setSkills(skills.filter((_, i) => i !== index)) }

  function updateProject(index, field, value) {
    const next = [...projects]
    next[index] = { ...next[index], [field]: value }
    setProjects(next)
  }
  function addProject() { setProjects([...projects, { title: '', description: '', link: '' }]) }
  function removeProject(index) { setProjects(projects.filter((_, i) => i !== index)) }

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg('')
    try {
      const signUpData = await signUp.mutateAsync({ email, password })
      const userId = signUpData.user.id

      await createProfile.mutateAsync({
        id: userId,
        full_name: fullName,
        birth_date: birthDate,
        skills: skills.filter((s) => s.trim() !== ''),
        projects: projects.filter((p) => p.title.trim() !== ''),
        contact,
      })

      navigate('/dashboard')
    } catch (err) {
      setErrorMsg(err.message)
    }
  }

  const isLoading = signUp.isPending || createProfile.isPending

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <AccountFields email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      <ProfileFields fullName={fullName} setFullName={setFullName} birthDate={birthDate} setBirthDate={setBirthDate} />
      <SkillsFields skills={skills} updateSkill={updateSkill} addSkill={addSkill} removeSkill={removeSkill} />
      <ProjectsFields projects={projects} updateProject={updateProject} addProject={addProject} removeProject={removeProject} />
      <ContactFields contact={contact} setContact={setContact} />

      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

      <Button type="submit" disabled={isLoading}
        className="bg-gray-100 text-gray-700 font-medium shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:bg-gray-100 hover:shadow-[2px_2px_6px_#d1d1d1,-2px_-2px_6px_#ffffff]">
        {isLoading ? 'Menyimpan...' : 'Daftar & Buat Portofolio'}
      </Button>

      <p className="text-sm text-center text-gray-500">
        Sudah punya akun? <Link to="/login" className="text-gray-700 underline font-medium">Login</Link>
      </p>
    </form>
  )
}