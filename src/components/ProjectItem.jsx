import React from "react";


const ProjectItem = ({img, title, link}) => {
    return (
        <section className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#6A1B9A] '>
            <img src={img} alt="/" className="rounded-xl group-hover:opacity-10"/>
            <section className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] tranlate-y-[-50%] ">
                <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                    {title}
                </h3>
               
                <a href={link}>
                    <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">More Info</p>
                </a>
            </section>
        </section>
    )
}
export default ProjectItem;