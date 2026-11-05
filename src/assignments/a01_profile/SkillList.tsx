import type { Skill } from "./types"
import { SkillBadge } from "./SkillBadge";
interface SkillListProps {
    skills: Skill[]
}
export const SkillList = ({ skills }: SkillListProps) => {
    return (
        <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
            ))}
        </ul>
    )

}