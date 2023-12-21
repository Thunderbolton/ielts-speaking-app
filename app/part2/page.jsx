import Part2Timer from '../components/Part2Timer';
import QuestionsList from '../components/QuestionsList';
import TalkTimer from '../components/TalkTimer';

import { promises as fs } from 'fs';


export default async function Part2() {  
  const file = await fs.readFile(process.cwd() + '/app/_data/db2.json', 'utf8');
  const topics = JSON.parse(file);

  return (
    <main>
      <h1 className="my-3">Part 2</h1>
      <h2>Indiviual Long turn</h2>
      <h4>3 - 4 minutes time icon</h4>
      <p className="mb-3">You will be shown a card asking you to talk about a particular topic. After a minute to prepare, you must speak for up to two minutes and then answer general questions on the topic.</p> 
      <Part2Timer />
      <TalkTimer />
      <br />
      <QuestionsList topics={topics} />
    </main>
    
    )
}


