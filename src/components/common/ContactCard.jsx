import BentoCard from '@/components/common/BentoCard'
import SectionLabel from '@/components/common/SectionLabel'
import { Mail, Code2, Link2, AtSign } from 'lucide-react'

export default function ContactCard({ contact = {} }) {
  const hasContact = contact.email || contact.github || contact.linkedin

  return (
    <BentoCard className="h-full">
      <SectionLabel>Contact</SectionLabel>
      {!hasContact ? (
        <div className="flex flex-col items-center justify-center gap-2 py-4 text-center">
          <div className="rounded-full bg-gray-100 p-2.5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff]">
            <AtSign className="w-4 h-4 text-gray-300" />
          </div>
          <p className="text-sm text-gray-400">Belum ada kontak ditambahkan</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 text-sm text-gray-600">
          {contact.email && (
            <div className="flex items-center gap-2.5 hover:text-gray-800 transition-colors">
              <Mail className="w-4 h-4 text-gray-400" /> {contact.email}
            </div>
          )}
          {contact.github && (
            <div className="flex items-center gap-2.5 hover:text-gray-800 transition-colors">
              <Code2 className="w-4 h-4 text-gray-400" /> {contact.github}
            </div>
          )}
          {contact.linkedin && (
            <div className="flex items-center gap-2.5 hover:text-gray-800 transition-colors">
              <Link2 className="w-4 h-4 text-gray-400" /> {contact.linkedin}
            </div>
          )}
        </div>
      )}
    </BentoCard>
  )
}