import React from "react";
import Notes from "./Notes";

export const Home = (props) => {
   const {showAlert}=props;
  
    return (
        <div>
        
            <Notes showAlert={showAlert} mode={props.mode} ></Notes>
        </div>
    )
}