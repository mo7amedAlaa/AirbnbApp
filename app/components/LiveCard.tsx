import Image from 'next/image'
import { LiveItem } from '../types/app'
type LiveProps = LiveItem
function LiveCard({ img, title }: LiveProps) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out  '>
      <div className="relative h-80 w-80">
        <Image src={img} alt={'LiveCard-img'} fill />
      </div>
      <h3 className="text2xl mt-3">{title}</h3>

    </div>
  )
}

export default LiveCard
