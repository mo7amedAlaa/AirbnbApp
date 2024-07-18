import { LiveData } from '../types/app';
import { getLive } from '../utils/api';
import LiveCard from './LiveCard';

async function Live() {
    const liveData:LiveData= await getLive();
    console.log(liveData);

  return (
    <section className='p-6'>
      <div className="container">
            <h2 className='text-4xl font-semibold mb-5'>Live Anywherw</h2>
           <div className='flex  space-x-3 overflow-scroll no-scrollbar p-3 ml-3'>
      {liveData.map((item)=>(<LiveCard key={item.img} img={item.img} title={item.title}/>))}
          </div>
      </div>
    </section>
  )
}

export default Live
