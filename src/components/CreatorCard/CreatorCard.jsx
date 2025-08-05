import React from "react";

const basePath = "./images/"

function CreatorCard({creator}) {
  return (
    <li className="creator">
        <i className="position">{creator.position}</i>
        <img src={basePath + creator.ava} alt={creator.name} className="ava" />
        <h4 className="name">{creator.name}</h4>
        <div className="row">
          <span>Total Sales:</span>
          <span className="amount">{creator.amount}</span>
        </div>
      </li>
  )
}

export default CreatorCard