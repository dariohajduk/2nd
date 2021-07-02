import React from "react";


const Counter = (props) => {
    return <div
        style={{
            borderStyle: "double",
            position: "absolute",
            left: "23vw",
            height: "25vh",
            width: "150px",
            top:"15vh",
            textAlign: "center",
            borderRadius:"35px"
        }}

    >
        
        <p>
            There is left
        </p>
        <p>
            {props.data}
        </p>


    </div>
}
export default Counter;