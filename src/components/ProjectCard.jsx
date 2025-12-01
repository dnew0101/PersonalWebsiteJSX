const ProjectCard = ({ title, thumbNail, description, link }) => {
    return (
        <div className="group border m-4 px-2 py-3 w-full sm:w-[40%] min-w-[200px] max-w-[400px] max-h-[600px] h-auto bg-neutral-950
        transition-[transform, background-color, box-shadow]
        duration-350
        hover:scale-105
        hover:rounded-xl
        hover:bg-black
        hover:opacity-100">
            <a href={link} className="flex flex-col w-full h-full items-center">
                <h3 className="text-2xl">
                    {title}
                </h3>
                <div className="flex w-full h-[160px] overflow-hidden justify-center my-3">
                    <img className="max-w-full max-h-full min-h-[160px] object-contain border" src={thumbNail} alt={title}/>
                </div>
                <p className="w-[80%] my-1 sm:my-4 text-xs border p-2 border-neutral-600
                group-hover:bg-black">
                    {description}
                </p>
            </a>
        </div>
    )
}

export default ProjectCard;