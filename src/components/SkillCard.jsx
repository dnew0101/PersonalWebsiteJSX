import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCard = ({ icon, skill, color }) => {
    return (
        <div className={`group flex flex-row border justify-center w-[45%] lg:w-[30%] flex-shrink-0 gap-4 bg-neutral-950
            transform-gpu
            transition-[transform, background-color, box-shadow]
            duration-350
            ease-in-out
            hover:scale-105
            ${color}
            hover:shadow-2xl
            hover:rounded-2xl
            hover:opacity-80
            focus:outline-none
            focus-visible:ring-2
          focus-visible:ring-indigo-500`
        }>

            <div className="my-2">
                <FontAwesomeIcon icon={icon} className="text-4xl 
                group-hover:scale-115
                group-hover:font-bold"
                />
            </div>
            <p className="flex flex-col justify-center my-2 text-sm 
            transition-transform
            duration-350
            ease-in-out
            group-hover:scale-115
            group-hover:font-bold">
                {skill}
            </p>

        </div>
    )
}

export default SkillCard;