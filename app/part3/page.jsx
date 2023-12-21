import QuestionsList from '../components/QuestionsList';
import TalkTimer from '../components/TalkTimer';

import { promises as fs } from 'fs';


export default async function Part3() {
    const file = await fs.readFile(process.cwd() + '/app/_data/db3.json', 'utf8');
    const topics = JSON.parse(file);

    return (
        <main>
            <h1 className="my-3">Part 3</h1>
            <h2>Two-way Discussion</h2>
            <h4>4 - 5 minutes time icon</h4>
            <TalkTimer />
            <br />
            <QuestionsList topics={topics} />
        </main>
    )
}