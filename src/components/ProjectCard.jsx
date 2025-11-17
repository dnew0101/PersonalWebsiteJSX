const ProjectCard = ({ title, thumbNail, description, link }) => {
    return (
        <div className="border m-4 px-2 py-3 w-full sm:w-[40%] min-w-[200px] max-w-[400px] max-h-[500px] h-auto bg-neutral-950
        transition-transform
        duration-350
        hover:scale-105
        hover:rounded-xl">
            <a href={link} className="flex flex-col w-full h-full items-center">
                <h3 className="text-2xl">
                    {title}
                </h3>
                <div className="flex w-full h-[160px] overflow-hidden justify-center my-3">
                    <img className="max-w-full max-h-full min-h-[160px] object-contain border" src={thumbNail} alt={title}/>
                </div>
                <p className="w-[80%] my-1 sm:my-4 text-xs border p-2 border-neutral-600">
                    {description}
                </p>
            </a>
        </div>
    )
}

export default ProjectCard;