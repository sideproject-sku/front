import React from "react";
import { GoDotFill } from "react-icons/go";
import style from './cameraStyle.module.css';

function Camera1() {
    return (
    <div className={style.cameraDetail}>
        <div className={style.text}>
            <GoDotFill className={style.icon} />
            <span className={style.camText}>CAMERA 01</span>
        </div>
        <div className={style.camera1}></div>
        <div className={style.dargerList}>
            <span className={style.listText}>08-31-2023 FRI 09:39:13 AM</span>
        </div>
    </div>
    );
}

export default Camera1;