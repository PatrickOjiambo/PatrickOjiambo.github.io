import React, { useState } from 'react';

function ProjectCard(props) {
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  const handleLearnMoreClick = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  const divStyle = isFullTextVisible ? "w-[570px] h-auto text-white bg-CardBackGround rounded-2xl shadow-CardBoxShadow flex justify-around items-center pl-4 pr-[6rem]" : "w-[570px] h-[192px] text-white bg-CardBackGround rounded-2xl shadow-CardBoxShadow flex justify-around items-center pl-4 pr-[6rem]";

  return (
    <div className={divStyle}>
      <a href={props.link} target="_blank" className='hover:w-52'> <img src={props.image} className="w-48 rounded-md" /></a>

      <div className="flex flex-col gap-1 justify-center items-start ml-10">
        <p className="font-Poppins text-2xl font-semibold">{props.title}</p>
        {isFullTextVisible ? (
          <p className="font-Poppins text-xs">{props.description}</p>
        ) : (
          <p className="font-Poppins text-xs">{props.description.substring(0, 50)}...</p>
        )}
        <button onClick={handleLearnMoreClick} className="border-ButtonColor hover:h-7 border-solid border-[1px] rounded-[10px] box-border p-1 w-24 text-center text-[10px]">LEARN MORE</button>
      </div>
    </div>
  );
}

export default ProjectCard;