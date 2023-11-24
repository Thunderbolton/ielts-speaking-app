import Part2Button from '../components/Part2Button';
import QuestionsList from '../components/QuestionsList';

import { promises as fs } from 'fs';


export default async function Part2() {  
  const file = await fs.readFile(process.cwd() + '/app/_data/db2.json', 'utf8');
  const topics = JSON.parse(file);

  return (
    <main>
      <h1 className="mb-3 mt-3">Part 2</h1>
      <h2>Long turn</h2>
      <h2>3 - 4 minutes time icon</h2>
      <p className="mb-3">You will be shown a card asking you to talk about a particular topic. After a minute to prepare, you must speak for up to two minutes and then answer general questions on the topic.</p> 
      <Part2Button />
      <QuestionsList topics={topics} />
    </main>
    
    )
}


