import type { Skill } from "./types"
import { SkillList } from "./SkillList"
interface ProfileCardProps {
    name: string,
    title: string,
    location: string,
    openToWork?: boolean,
    skills: Skill[]
}
function getInitials(name: string): string {
    return name.split(' ').map(str => str[0]).join('').toUpperCase();
}
export const ProfileCard = ({ name, title, location, openToWork = false, skills }: ProfileCardProps) => {

    return (
            <article className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
                <div className="flex items-center gap-4">
                    <div className="rounded-full bg-indigo-600 text-white size-16 flex items-center justify-center font-bold text-xl">
                        {getInitials(name)}
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-gray-900">{name}</h1>
                        <p className="text-sm text-gray-500">{title} &middot; {location}</p>
                    </div>
                </div>
                 {openToWork && ( 
        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 
text-sm font-medium text-green-700"> 
          <span className="size-2 rounded-full bg-green-500" /> 
          Open to work 
        </span> 
      )}
    <h2 className="mt-6 mb-3 text-xs font-semibold tracking-wide text-gray-500 
uppercase">Skills</h2>
                <SkillList skills={skills} />
            </article>
    )
}