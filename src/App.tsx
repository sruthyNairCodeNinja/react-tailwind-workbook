// import { ProfileCard } from './assignments/a01_profile/ProfileCard'
import type { Skill } from './assignments/a01_profile/types';
import { Badge } from './assignments/a02_ui_kit/Badge';
import { Button } from './assignments/a02_ui_kit/Button';
import { Card } from './assignments/a02_ui_kit/Card';
const skills: Skill[] = [{ name: 'Angular', level: 'core' },
{ name: 'TypeScript', level: 'core' },
{ name: 'RxJS', level: 'core' },
{ name: 'Ionic / Capacitor', level: 'core' },
{ name: 'Jest', level: 'core' },
{ name: 'React', level: 'learning' },
{ name: 'Tailwind CSS', level: 'learning' },
];
function App() {

  return (
    // <main className='flex min-h-screen items-center justify-center bg-gray-100 p-6'>
    //   <ProfileCard name='Sruthy Nair' title='Senior Frontend Developer' location='Dubai, UAE' openToWork={true} skills={skills}/>
    // </main>
    //--------------------------------------------Ass-02-----------------------------------------------//
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">My UI Kit</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Buttons" description="Three variants, two sizes, and a disabled state.">
          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => console.log('Saved')}>Save</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="danger">Delete</Button>
            <Button size="sm">Small</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Card>
        <Card title='Badge' description='Small status labels'>
          <div className='flex flex-wrap items-center gap-2'>
            <Badge tone='success'>
              Live
            </Badge>
            <Badge tone='warning'>
              In Progress
            </Badge>
            <Badge tone='neutral'>
              Draft
            </Badge>
          </div>
        </Card>
        <Card title='Delete Project?' description='This shows how a card can take a footer slot' footer={<>
          <Button variant='secondary'>Cancel</Button>
          <Button variant='danger'>Delete
          </Button>
          </>}>
          <span className='text-sm text-gray-600'>
                    All tasks inside TaskBoard will be removed. This can't be undone.
          </span>
        </Card>
      </div>
    </main>
  )
}

export default App
