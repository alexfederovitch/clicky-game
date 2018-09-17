import React from "react";
import "./Title.css";

const Title = props => (
    <div className="header">
      <div className="title">{props.children}<p>{props.message}</p></div>
      <div className="scores">
       Score: {props.score} Highscore: {props.highscore}
      </div>
    </div>
  );
export default Title;