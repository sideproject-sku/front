import React from "react";
import SideBar from "./sideBar";
import { GoDotFill } from "react-icons/go";
import style from './camersStyle.module.css';

function Camers() {
    return (
        <div className={style.all}>
            <main>
                <div className={style['camers-list']}>
                    <div className={style.container1}>
                        <a className={style.text}>
                            <GoDotFill className={style.icon} />
                            <span>camer1</span>
                        </a>
                        <div className={style.camer1}></div>
                    </div>
                    <div className={style.container2}>
                    <a className={style.text}>
                            <GoDotFill className={style.icon} />
                            <span>camer2</span>
                        </a>
                        <div className={style.camer2}></div>
                    </div>
                    <div className={style.container3}>
                    <a className={style.text}>
                            <GoDotFill className={style.icon} />
                            <span>camer3</span>
                        </a>
                        <div className={style.camer3}></div>
                    </div>
                    <div className={style.container4}>
                    <a className={style.text}>
                            <GoDotFill className={style.icon} />
                            <span>camer4</span>
                        </a>
                        <div className={style.camer4}></div>
                    </div>
                </div>
            </main>
            <nav>
                <SideBar />
            </nav>
        </div>
    );
}

export default Camers;