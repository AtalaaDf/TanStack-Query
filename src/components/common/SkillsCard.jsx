import BentoCard from '@/components/common/BentoCard'
import SectionLabel from '@/components/common/SectionLabel'
import { Sparkles } from 'lucide-react'

export default function SkillsCard({ skills = [] }) {
  return (
    <BentoCard className="h-full">
      <SectionLabel>Skills</SectionLabel>
      {skills.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 py-4 text-center">
          <div className="rounded-full bg-gray-100 p-2.5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff]">
            <Sparkles className="w-4 h-4 text-gray-300" />
          </div>
          <p className="text-sm text-gray-400">Belum ada skill ditambahkan</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, index) => (
            <span key={index}
              className="text-sm text-gray-600 bg-gray-100 rounded-lg px-3.5 py-1.5 shadow-[2px_2px_5px_#d1d1d1,-2px_-2px_5px_#ffffff] hover:shadow-[1px_1px_3px_#d1d1d1,-1px_-1px_3px_#ffffff] transition-shadow">
              {skill}
            </span>
          ))}
        </div>
      )}
    </BentoCard>
  )
}