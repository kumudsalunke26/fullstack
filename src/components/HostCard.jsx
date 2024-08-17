import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const HostCard = ({ teamMember, index, hoverValue, handleHover }) => {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='relative cursor-pointer w-fit overflow-hidden'
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
        >
            <div className='h-[500px] md:h-full w-full overflow-hidden'>
                <img
                    src={teamMember.imageUrl}
                    className={`object-cover w-full h-full transition-transform duration-500 ${
                        index === hoverValue ? "scale-110" : ""
                    }`}
                />
            </div>
            <div
                className={`absolute h-full md:w-full bottom-0 left-0 right-0 flex justify-center items-end transition-all duration-500 z-10 ${
                    index === hoverValue
                        ? "translate-y-0 opacity-100 bg-gradient-to-b from-transparent to-primary bg-opacity-80"
                        : "translate-y-[100%] opacity-100"
                }`}
            >
                <div
                    className={`flex justify-between gap-4 px-4 py-2 items-center m-4 h-fit w-full bg-secondary`}
                >
                    <div>
                        <p className='text-mainText text-md font-bold mb-1 whitespace-nowrap'>
                            {teamMember.name}
                        </p>
                        <p className='text-mainText text-md whitespace-nowrap'>
                            {teamMember.position}
                        </p>
                    </div>
                    <div className='flex space-x-4'>
                        <a
                            href={teamMember.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-mainText'
                        >
                            <RiLinkedinBoxFill size={25} />
                        </a>
                        <a
                            href={teamMember.instagram}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-mainText'
                        >
                            <FaInstagram size={25} />
                        </a>
                        <a
                            href={teamMember.email}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-mainText'
                        >
                            <MdOutlineMail size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HostCard;
