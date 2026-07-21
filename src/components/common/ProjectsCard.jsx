import BentoCard from '@/components/common/BentoCard'
import { ExternalLink } from 'lucide-react'

export default function ProjectsCard({ projects = [] }) {
  return (
    <BentoCard className="h-full">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Projects</h2>
      <div className="flex flex-col gap-3">
        {projects.length === 0 && <p className="text-sm text-gray-400">Belum ada project</p>}
        {projects.map((project, index) => (
          <div key={index} className="text-sm">
            <div className="flex items-center gap-1 font-medium text-gray-700">
              {project.title}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-600">
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            {project.description && <p className="text-gray-500">{project.description}</p>}
          </div>
        ))}
      </div>
    </BentoCard>
  )
}