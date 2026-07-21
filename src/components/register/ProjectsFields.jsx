import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Plus, Trash2 } from 'lucide-react'
import { neoInset } from '@/lib/styles'

export default function ProjectsFields({ projects, updateProject, addProject, removeProject }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-2 p-3 rounded-xl bg-gray-100 shadow-[inset_2px_2px_6px_#d1d1d1,inset_-2px_-2px_6px_#ffffff]">
          <Input placeholder="Judul project" value={project.title}
            onChange={(e) => updateProject(index, 'title', e.target.value)} className={neoInset} />
          <Textarea placeholder="Deskripsi singkat" value={project.description}
            onChange={(e) => updateProject(index, 'description', e.target.value)} className={neoInset} />
          <Input placeholder="Link (opsional)" value={project.link}
            onChange={(e) => updateProject(index, 'link', e.target.value)} className={neoInset} />
          {projects.length > 1 && (
            <Button type="button" variant="ghost" onClick={() => removeProject(index)} className="self-end text-gray-400 gap-1">
              <Trash2 className="w-4 h-4" /> Hapus project
            </Button>
          )}
        </div>
      ))}
      <Button type="button" variant="ghost" onClick={addProject} className="self-start text-gray-500 gap-1">
        <Plus className="w-4 h-4" /> Tambah project
      </Button>
    </div>
  )
}