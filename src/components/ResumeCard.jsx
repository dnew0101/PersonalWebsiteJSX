import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResumeCard = ({ icon, contact, link }) => {
    return (
        <div className="flex flex-row border justify-center w-[94%] flex-shrink-0 gap-4 bg-black
            transform-gpu
            transition-[transform, background-color, box-shadow]
            duration-350
            ease-in-out
            hover:scale-105
            hover:bg-fuchsia-800
            hover:shadow-2xl
            hover:rounded-2xl
            hover:opacity-80
            focus:outline-none
            focus-visible:ring-2
          focus-visible:ring-indigo-500"
        >
            <a href={link} className="w-full h-full cursor-pointer">
                <div className="my-2">
                    <FontAwesomeIcon icon={icon} className="text-4xl" />
                </div>
                <p className="flex flex-col justify-center my-2 text-sm">
                    {contact}
                </p>
            </a>
        </div>
    )
}

export default ResumeCard;