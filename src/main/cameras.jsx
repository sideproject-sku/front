import React from "react";
import { Link } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import style from './camerasStyle.module.css';


function Cameras() {
    return (
        <div className={style.all}>
            <main>
                <div className={style['cameras-list']}>
                    <div className={style.container1}>
                        <Link to="/camera/1" className={style.text}>
                            <GoDotFill className={style.icon} />
                            <span>camera1</span>
                        </Link>
                        <div className={style.camera1}></div>
                    </div>
                    <div className={style.container2}>
                    <a className={style.text}>
                            <GoDotFill className={style.icon} />
                            <span>camera2</span>
                        </a>
                        <div className={style.camera2}></div>
                    </div>
                    <div className={style.container3}>
                    <a className={style.text}>
                            <GoDotFill className={style.icon} />
                            <span>camera3</span>
                        </a>
                        <div className={style.camera3}></div>
                    </div>
                    <div className={style.container4}>
                    <a className={style.text}>
                            <GoDotFill className={style.icon} />
                            <span>camera4</span>
                        </a>
                        <div className={style.camera4}></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cameras;