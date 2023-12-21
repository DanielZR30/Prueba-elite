import React from "react";

const CardHouse = (props) => {
  const { house } = props;

  return (
    <div className={`border-[1px] m-2 p-1 object-cover bg-${house.color}-500`} onClick={props.handleClick}>
       {house.name}
    </div>
  );
};

export default CardHouse;