import QuestionsList from '../components/QuestionsList';
import TalkTimer from '../components/TalkTimer';
import { promises as fs } from 'fs';

export default async function PartInfo({ title, subtitle, time, description, filepath, prepTimer }) {

    const file = await fs.readFile(process.cwd() + filepath, 'utf8');
    const topics = JSON.parse(file);

    
    return (
        <main>
            <section className='part-info'>
                <hr className='border-solid border-2 border-[#007984] mb-5 mt-2' />

                <h2 className="[font-size:_clamp(1.2em,2vw,1.8em)]">{title}</h2>
                <h2 className='[font-size:_clamp(0.9em,1.8vw,1.5em)]'>{subtitle}</h2>
                <h4 className="part-info-time">{time}
                    <span className='inline-block ml-1'>
                        <img
                            src="clock-svg.svg"
                            width="22"
                            height="22"
                        />      
                    </span>
                </h4>
                
                <p className='mb-3 [font-size:_clamp(0.9em,1.5vw,1.2em)]'>{description}</p>
                    <hr className='border-solid border-2 border-[#007984] mb-5 mt-2' />
                <div className='timers'>                    
                    {prepTimer}  
                   <TalkTimer />
                </div>
            </section>
            <QuestionsList topics={topics} />
        </main>
    )
}