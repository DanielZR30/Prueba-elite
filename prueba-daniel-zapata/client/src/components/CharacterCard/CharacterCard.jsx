import React from "react";

const CharacterCard = (props) => {
  const { character } = props;

  return (
    
    <div className="border-[1px] object-cover">
        {console.log(character)}
      <div className="h-2/3">
        <img className="object-cover w-full h-full" src={character.image} alt="" />
      </div>
      <div className="h-1/3 p-1 text-sm">
        <h3 className="font-bold">{character.name}</h3>
        <div className="flex  justify-center">
          <h4>{character.gender} - </h4>
          <h4>{character.species}</h4>
        </div>
        <div>
          <h4>{character.house}</h4>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;