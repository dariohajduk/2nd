import React from "react";



const CustomInput = (props) => {

    return <div >

        <div style={{
            display:"flex",
            flexDirection:"column",
            width:"10vw",
            position:"absolute",
            left:"20vw",
            top:"50vh",


        }}>
        <input
            style={{
                width:"15vw",



            }}
            onChange={props.onChange}
                onKeyPress={props.onKeyPress}
                placeholder={props.placeholder}
                value={props.name}

        />



        <button
        disabled={props.disabled} type={"submit"} style={props.style} onClick={props.onClick}
                placeholder={props.placeholder}  >Insert To List
        </button>
            <button
                onClick={props.clear}
                placeholder={props.placeholder}
                type={"reset"}
            >Clear ALL List
            </button>
        </div>


    </div>
}
export default CustomInput;