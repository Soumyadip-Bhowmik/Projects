import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='w-60 flex-shrink-0 h-72 rounded-[35px] text-white px-8 py-10 bg-zinc-900/90 relative overflow-hidden'>
        <div className='pb-2'>
            <FaRegFileAlt />
        </div>
        <p className='text-xs leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 right-0 '>
            <div className='flex items-center justify-between mb-5 px-8'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoMdClose /> : <MdOutlineFileDownload size=".8em" color='#fff' />}
                    
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center `}> 
                    <h3 className='text-sm'>{data.tag.tagTitle}</h3>
                </div>
                )
            }
           
        </div>
    </motion.div>
  )
}

export default Card;
