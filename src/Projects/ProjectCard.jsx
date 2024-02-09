import React, { useState } from 'react';

function ProjectCard(props) {
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  const handleLearnMoreClick = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  const divStyle = isFullTextVisible ? " font-roboto max-w-[570px] w-auto max-w-screen h-auto text-white bg-CardBackGround rounded-2xl shadow-CardBoxShadow flex justify-around items-center p-2 md:pl-4 md:pr-[6rem]" : "max-w-[570px] font-roboto p-2 w-auto h-42 md:h-[192px] text-white bg-CardBackGround rounded-2xl shadow-CardBoxShadow flex justify-around items-center pl-2 md:pl-4 pr-2 md:pr-[6rem]";

  return (
    <div className={divStyle}>
      <a href={props.link} target="_blank" className='hover:w-52'> <img src={props.image} className="md:w-48 w-40 rounded-md" /></a>

      <div className="flex flex-col gap-1 justify-center items-start ml-10">
        <p className="font-roboto text-nowrap  md:text-2xl font-semibold">{props.title}</p>
        {isFullTextVisible ? (
          <p className="font-roboto text-xs text-nowrap">{props.description}</p>
        ) : (
          <p className="font-roboto text-xs text-nowrap">{props.description.substring(0, 50)}...</p>
        )}
        <button onClick={handleLearnMoreClick} className="border-ButtonColor hover:h-7 border-solid font-roboto border-[1px] rounded-[10px] box-border p-1 mb-1 md:w-24 text-center text-[10px]">{isFullTextVisible ? "READ LESS": "READ MORE"}</button>
      </div>
    </div>
  );
}

export default ProjectCard;