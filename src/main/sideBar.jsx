import React from "react";
import {
    PiListLight,
    PiHouseLight,
    PiNumberSquareOneLight,
    PiNumberSquareTwoLight,
    PiNumberSquareThreeLight,
    PiNumberSquareFourLight,
    PiMapPinLight
} from "react-icons/pi";
import style from './sideBarStyle.module.css';
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <nav>
            <ul>
                <li className={style['view-list']}>
                    <PiListLight className={style.icon} />
                </li>
                <li className={style['side-list']}>
                    <Link to="/" className={style.text}>
                        <PiHouseLight className={style.icon} />
                        <span className={style['nav-item']}>
                            메인 보기
                        </span>
                    </Link>
                </li>
                <li className={style['side-list']}>
                    <Link to="/camera/1" className={style.text}>
                        <PiNumberSquareOneLight className={style.icon} />
                        <span className={style['nav-item']}>
                            카메라 1 보기
                        </span>
                    </Link>
                </li>
                <li className={style['side-list']}>
                    <a className={style.text}>
                        <PiNumberSquareTwoLight className={style.icon} />
                        <span className={style['nav-item']}>
                            카메라 2 보기
                        </span>
                    </a>
                </li>
                <li className={style['side-list']}>
                    <a className={style.text}>
                        <PiNumberSquareThreeLight className={style.icon} />
                        <span className={style['nav-item']}>
                            카메라 3 보기
                        </span>
                    </a>
                </li>
                <li className={style['side-list']}>
                    <a className={style.text}>
                        <PiNumberSquareFourLight className={style.icon} />
                        <span className={style['nav-item']}>
                            카메라 4 보기
                        </span>
                    </a>
                </li>
                <li className={style['side-list']}>
                    <a className={style.text}>
                        <PiMapPinLight className={style.icon} />
                        <span className={style['nav-item']}>
                            지도 보기
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;