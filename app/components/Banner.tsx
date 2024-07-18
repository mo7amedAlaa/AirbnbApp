import Image from 'next/image'
function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[500px] xl:h-[500px] '>
    <Image src={'https://a0.muscache.com/im/pictures/62d0e70e-7107-4d1b-beb5-21f0ad2bb811.jpg'} alt={'banner-img'}   className='object-cover object-left' fill />
    <div className="absolute top-1/2 w-full text-center">
    <p className='text-sm sm:text-lg  my-3 capitalize text-white    tracking-wide    '>Not sure where to go? perfect</p>
<button type='button' className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold">
    I am fiexible
</button>
    </div>
    </div>

  )
}

export default Banner
