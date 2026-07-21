import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus, Trash2 } from 'lucide-react'
import { neoInset } from '@/lib/styles'

export default function SkillsFields({ skills, updateSkill, addSkill, removeSkill }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="flex gap-2">
          <Input placeholder="mis. React" value={skill}
            onChange={(e) => updateSkill(index, e.target.value)} className={neoInset} />
          {skills.length > 1 && (
            <Button type="button" variant="ghost" size="icon" onClick={() => removeSkill(index)}>
              <Trash2 className="w-4 h-4 text-gray-400" />
            </Button>
          )}
        </div>
      ))}
      <Button type="button" variant="ghost" onClick={addSkill} className="self-start text-gray-500 gap-1">
        <Plus className="w-4 h-4" /> Tambah skill
      </Button>
    </div>
  )
}