import { Input } from '@/components/ui/input'
import { neoInset } from '@/lib/styles'

export default function ContactFields({ contact, setContact }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Contact</h2>
      <Input placeholder="Email kontak" value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })} className={neoInset} />
      <Input placeholder="GitHub username" value={contact.github}
        onChange={(e) => setContact({ ...contact, github: e.target.value })} className={neoInset} />
      <Input placeholder="LinkedIn username" value={contact.linkedin}
        onChange={(e) => setContact({ ...contact, linkedin: e.target.value })} className={neoInset} />
    </div>
  )
}