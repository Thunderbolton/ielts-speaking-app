import QuestionsList from '../components/QuestionsList';

import { promises as fs } from 'fs';


export default async function Part1() {  
  const file = await fs.readFile(process.cwd() + '/app/_data/db1.json', 'utf8');
  const topics = JSON.parse(file);

  return (
    <main>
      <h1 className="mb-3 mt-3">Part 1</h1>
      <h2>Introduction and Interview</h2>
      <h2>4 - 5 minutes time icon</h2>
      <p className="mb-3">You will be asked about yourself and about familiar topics, such as home and family, studies, or interests.</p>      
      <QuestionsList topics={topics} />
    </main>
    
    )
}


