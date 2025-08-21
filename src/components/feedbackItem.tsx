interface props {
    name: string
    text: string
    date: string
}

export default function FeedBackItem({name, text, date} : props) {
    return (
        <div className="flex flex-col justify-between bg-white rounded-2xl border-2 border-[#BFD0C8] p-6 gap-4 cursor-default transition-all duration-300 hover:scale-[1.01] hover:shadow-lg my-4 mx-1 min-h-[226px] h-[226px]">
            <div className="flex items-center gap-4">
                <img src="/images/userIcon.svg" className="max-w-[19px]"/>
                <span className="text-[#394C46] text-lg">{name}</span>
            </div>
            <p className="text-sm text-[#303F3A] line-clamp-3">{text}</p>
            <div className="flex items-center gap-2 self-end mt-8">
                <img src="/images/feedbackMessageIcon.svg" />
                <span className="text-sm vazir-num text-[#567669]">{date}</span>
            </div>
        </div>
    )
}