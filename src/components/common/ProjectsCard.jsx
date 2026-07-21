import BentoCard from '@/components/common/BentoCard'
import SectionLabel from '@/components/common/SectionLabel'
import { ExternalLink, FolderOpen } from 'lucide-react'

export default function ProjectsCard({ projects = [] }) {
  return (
    <BentoCard className="h-full">
      <SectionLabel>Projects</SectionLabel>
      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 py-4 text-center">
          <div className="rounded-full bg-gray-100 p-2.5 shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff]">
            <FolderOpen className="w-4 h-4 text-gray-300" />
          </div>
          <p className="text-sm text-gray-400">Belum ada project ditambahkan</p>
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-gray-200">
          {projects.map((project, index) => (
            <div key={index} className="text-sm py-3 first:pt-0 last:pb-0">
              <div className="flex items-center gap-1.5 font-medium text-gray-700">
                {project.title}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              {project.description && <p className="text-gray-500 mt-1">{project.description}</p>}
            </div>
          ))}
        </div>
      )}
    </BentoCard>
  )
}