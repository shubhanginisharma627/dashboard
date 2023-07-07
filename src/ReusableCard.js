import React from 'react';

const ReusableCard = ({ title,description,idname}) => {
  return (
    <div className="card" id={idname}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ReusableCard;
