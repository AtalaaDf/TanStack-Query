import BentoCard from '@/components/common/BentoCard'
import { Mail, Code2, Link2 } from 'lucide-react'

export default function ContactCard({ contact = {} }) {
  return (
    <BentoCard className="h-full">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Contact</h2>
      <div className="flex flex-col gap-2 text-sm text-gray-600">
        {contact.email && (
          <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-gray-400" /> {contact.email}</div>
        )}
        {contact.github && (
          <div className="flex items-center gap-2"><Code2 className="w-4 h-4 text-gray-400" /> {contact.github}</div>
        )}
        {contact.linkedin && (
          <div className="flex items-center gap-2"><Link2 className="w-4 h-4 text-gray-400" /> {contact.linkedin}</div>
        )}
      </div>
    </BentoCard>
  )
}