import PartInfo from '../components/PartInfo';
import PrepTimer from '../components/PrepTimer';

export default async function Part2() {  

  return (
    <>
      <PartInfo 
        title="Part 2" 
        subtitle="Indiviual Long turn"
        time="3 - 4 minutes"
        description="You will be shown a card asking you to talk generally about a particular topic."
        filepath='/app/_data/db2.json'
        prepTimer={<PrepTimer />}
        />
    </>
    )
}


