import React from "react";
import { PiListLight, PiHouseLight, PiNumberSquareOneLight, PiNumberSquareTwoLight, PiNumberSquareThreeLight, PiNumberSquareFourLight, PiMapPinLight } from "react-icons/pi";
import style from './sideBarStyle.css';
function SideBar() {
    return (
        <nav>
            <ul>
                <li>
                    <PiListLight className="icon"/>
                </li>
                <li>
                    <a>
                        <PiHouseLight className="icon"/>
                        <span className="nav-item">
                            메인 보기
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <PiNumberSquareOneLight className="icon"/>
                        <span className="nav-item">
                            카메라 1 보기
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <PiNumberSquareTwoLight className="icon"/>
                        <span className="nav-item">
                            카메라 2 보기
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <PiNumberSquareThreeLight className="icon"/>
                        <span className="nav-item">
                            카메라 3 보기
                        </span>
                    </a>
                </li>
                <li> <a>
                    <PiNumberSquareFourLight className="icon"/>
                    <span className="nav-item">
                        카메라 4 보기
                    </span>
                </a>
                </li>
                <li>
                    <a>
                        <PiMapPinLight className="icon"/>
                        <span className="nav-item">
                            지도 보기
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;