import React from 'react'

const about = () => {
  return (
    <section className='about h-screen flex items-center justify-start bg-cover text-white px-10' style={{ backgroundImage: "url('/aboutimg.jpg')"}}>
    <div className='bg-black bg-opacity-60 p-8 rounded-md mx-w-lg'>
        <h2 className='text-4xl font-bold mb-4' data-aos="fade-up">About Us</h2>
        <p>Welcome to the world of watches, where time meets elegance and innovation. In this captivating realm, each timepiece tells a unique story, blending craftsmanship, technology, and style. From luxurious mechanical watches that showcase intricate designs to sleek, modern smartwatches that offer cutting-edge features, there`s a watch for every personality and occasion. Whether you`re a collector seeking rare and exquisite pieces or someone looking for a reliable everyday companion, the watch world offers endless possibilities. Embrace the artistry of horology, where tradition and modernity coexist, and discover a timepiece that resonates with your style and needs. Welcome to a world where every second counts, and every watch is a masterpiece.</p>

    </div>
    </section>
    
      
    
  )
}

export default about
