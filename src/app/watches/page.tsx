
import React from 'react'
import Image from 'next/image';

const Watches = () => {
const watchData = [
  {id: 1, name: 'Rolex', price: 12000, description: 'Luxury watch', image: '/roleximg.jpg'},
  {id: 2, name: 'Omega', price: 8000, description: 'Sporty design', image: '/omegaimg.jpg'},
  {id: 3, name: 'Patek Philippe', price: 25000, description: 'Elegant timepiece', image: '/patekimg.jpg'},
  {id: 4, name: 'TAG Heuer', price: 5000, description: 'Sporty and stylish', image: '/tag heuer.jpg'},
  {id: 5, name: 'Breitling', price: 7000, description: 'Bold and rugged', image: '/breitlingimg.jpg'},
  {id: 6, name: 'Seiko', price: 1000, description: 'Affordable and reliable', image: '/sekoimg.jpg'},
]



  return (
    <div>
      <div className='watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
        {watchData.map((watch) => (
          <div key={watch.id} className='watch-card bg-white p-5 rounded-md shadow-md text-center'>
            <Image src={watch.image} alt={watch.name} 
            height={200}
            width={200} className='w-full rounded-md transition-transform duration-300 transform hover:scale-110' />
            <h3 className='mt-4 text-2xl font-bold'>{watch.name}</h3>
            <p className='text-gray-500'>{watch.description}</p>
            <div className='price text-blue-500 text-xl font-semibold mt-2'>${watch.price}</div>
            <button className='mt-4 px-4 bg-blue-500 text-white rounded-md'>Add to Card</button>

          </div>
         
        ))}
      </div>
    </div>
  );
};

export default Watches

