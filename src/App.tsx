import { ProfileCard } from './assignments/a01_profile/ProfileCard'
import type { Skill } from './assignments/a01_profile/types';
const skills : Skill[] =[   { name: 'Angular', level: 'core' }, 
  { name: 'TypeScript', level: 'core' }, 
  { name: 'RxJS', level: 'core' }, 
  { name: 'Ionic / Capacitor', level: 'core' }, 
  { name: 'Jest', level: 'core' }, 
  { name: 'React', level: 'learning' }, 
  { name: 'Tailwind CSS', level: 'learning' }, 
];
function App() {

  return (
    <main className='flex min-h-screen items-center justify-center bg-gray-100 p-6'>
      <ProfileCard name='Sruthy Nair' title='Senior Frontend Developer' location='Dubai, UAE' openToWork={true} skills={skills}/>
    </main>
  )
}

export default App
