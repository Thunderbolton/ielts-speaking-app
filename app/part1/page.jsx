import QuestionsList from '../components/QuestionsList';
import TalkTimer from '../components/TalkTimer';

import { promises as fs } from 'fs';


export default async function Part1() {  
  const file = await fs.readFile(process.cwd() + '/app/_data/db1.json', 'utf8');
  const topics = JSON.parse(file);

  return (
    <main>
      <section className='part-info'>
        <h1 className="mb-3 mt-3">Part 1</h1>
        <h2>Introduction and Interview</h2>
        <h4>4 - 5 minutes time icon</h4>
        <p className="mb-3">You will be asked about yourself and about familiar topics, such as home and family, studies, or interests.</p>
        <TalkTimer /> 
      </section>
      <QuestionsList topics={topics} />
    </main>
    
    )
}


