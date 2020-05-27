import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {isNumber} from "../services/isNumber";


export default ({ maximum, add, onChange }) => {

    const [ data, setData ] = useState(0);

    const [ expanded, setExpanded ] = useState(false);


    /*if (expanded) {
        window.addEventListener('scroll', (e) => {
            console.log("scroll", e.currentTarget.scrollY);
        })
    }*/


    return(
        <div className={"" + ( expanded ? " " : "") }>


                <FontAwesomeIcon icon="chevron-up" className={"cursor-pointer text-gray-700 absolute transition duration-300 transform " + (expanded ? " -translate-y-16 scale-400 " : "scale-0") } onClick={() => {
                    let _data = data + add > maximum ? (maximum + 1) - (data + add): data + add;
                    setData(_data);
                    onChange(_data);
                }}/>

            <p contentEditable placeholder={data < 10 ? "0" + data : data} className={"cursor-pointer transform transition-scale duration-300" + (expanded ? " scale-400 text-gray-700" : " scale-100")}
                onClick={() => setExpanded(!expanded)}
                onInput={_data => {
                    let number = isNumber(_data.target.textContent) ? _data.target.textContent : data;
                    setData(number);
                    console.log("setting time: ", number, _data.target.textContent, isNumber(_data.target.textContent));
                    onChange(number);
                }}
                />

            <FontAwesomeIcon icon="chevron-down" className={"cursor-pointer text-gray-700 absolute transition duration-300 transform " + (expanded ? " translate-y-16 scale-400 " : "scale-0") } onClick={() => {
                let _data = data - add < 0 ? (maximum + 1) - add : data - add;
                setData(_data);
                onChange(_data);
            }}/>

            {/*<div className="flex flex-col items-center">

                <FontAwesomeIcon icon="angle-up" className="cursor-pointer" onClick={() => {
                    let _data = data >= maximum ? 0 : data + 1;
                    setData(_data);
                    onChange(_data);
                }}/>
                {data < 10 ? "0" + data : data}
                <FontAwesomeIcon icon="angle-down" className="cursor-pointer" onClick={() => {
                    let _data = data <= 0 ? maximum : data - 1;
                    setData(_data);
                    onChange(_data);
                }}/>



            </div>*/}
        </div>
    )

}