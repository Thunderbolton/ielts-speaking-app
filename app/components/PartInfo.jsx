import QuestionsList from '../components/QuestionsList';
import TalkTimer from '../components/TalkTimer';
import { promises as fs } from 'fs';
// import PrepTimer from './PrepTimer';

export default async function PartInfo({ title, subtitle, time, description, filepath, prepTimer }) {

    const file = await fs.readFile(process.cwd() + filepath, 'utf8');
    const topics = JSON.parse(file);

    
    return (
        <main>
            <section className='part-info'>
                <h2 className="my-3">{title}</h2>
                <h2>{subtitle}</h2>
                <h4>{time}</h4>
                <p className='mb-3'>{description}</p>
                <div className='timers'>                    
                    {prepTimer}  
                   <TalkTimer />
                </div>
            </section>
            <QuestionsList topics={topics} />
        </main>
    )
}