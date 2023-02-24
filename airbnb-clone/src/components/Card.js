import React from "react"

export default function Card(props){
    return (
        <div className="card">
           <img src="../images/katie-zaferes.png" alt="katie-zaferes" className="card--image"/>
           <div className="card--stats">
              <img src="..//images/star.png" alt="star-pic" className="card--star"/>
              <span>5.0</span>
              <span className="gray">(6) •</span>
              <span className="gray">USA</span>
              <p>Life Lessons with Katie Zaferes</p>
              <p><span className="bold">From $136</span> / person</p>
           </div>
        </div>
    )
}