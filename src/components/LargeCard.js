function LargeCard({image,title,description,buttonText}) {
    return (
        <section className='relative py-16 cursor-pointer rounded-lg overflow-hidden'>
            <div className='relative h-96 min-w-[300px] bg-gradient-to-r from-green-700 to-green-300'>
                {/* <Image src={image} layout='fill' objectFit='cover' className='rounded-2xl'  /> */}
            </div>
            
            <div className='absolute top-32 left-12'>
                <h3 className="text-4xl mb-3 w-64">{title}</h3>
                <p>{description}</p>
                <button className='text-sm bg-gray-900 text-white px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard