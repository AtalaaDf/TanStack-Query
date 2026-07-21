import BentoCard from '@/components/common/BentoCard'

export default function SkillsCard({ skills = [] }) {
  return (
    <BentoCard className="h-full">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.length === 0 && <p className="text-sm text-gray-400">Belum ada skill</p>}
        {skills.map((skill, index) => (
          <span key={index}
            className="text-sm text-gray-600 bg-gray-100 rounded-lg px-3 py-1 shadow-[2px_2px_5px_#d1d1d1,-2px_-2px_5px_#ffffff]">
            {skill}
          </span>
        ))}
      </div>
    </BentoCard>
  )
}