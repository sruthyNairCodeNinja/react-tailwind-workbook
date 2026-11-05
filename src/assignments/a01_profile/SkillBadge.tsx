import type { Skill } from "./types"
interface SkillBadgeProps{
    skill : Skill
}
export const SkillBadge = ({skill} : SkillBadgeProps) =>{
    const badgeColor =  skill.level === 'core' ? 'bg-indigo-50 text-indigo-700 ring-indigo-200' : 'bg-amber-50 text-amber-700 ring-amber-200';
    return(
        <li className={`rounded-full px-3 py-1 text-sm ring-1 font-medium ${badgeColor}`}>
            {skill.name}{skill.level === 'learning' && <span className="ml-1 text-xs">({skill.level})</span>}
        </li>
    )
}