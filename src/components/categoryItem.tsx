interface props {
    title: string
    img: string
}

export default function CategoryItem({title, img} : props) {
    return (
        <div className='rounded-lg bg-[#DFE8E4] flex flex-col items-center justify-center min-h-[180px] md:min-h-[220px] p-4  md:p-8 gap-4 md:gap-5 transition-all duration-300 hover:shadow-lg hover:scale-105 mx-2 my-7'>
            <div className='w-full h-[120px] lg:h-[190px] flex items-center justify-center overflow-hidden'>
                <img src={img} className='max-h-full max-w-full object-contain' />
            </div>
            <h2 className='estedadMedium md:text-xl whitespace-nowrap text-[15px]'>{title}</h2>
        </div>
    )
}