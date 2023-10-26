import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import style from './detailCamStyle.module.css';
import Modal from './modal';

function Cam1() {
  // CCTV 경고 시각 데이터 예시 (백엔드에서 받아온 데이터로 대체해야 함)
  const [warningTimes, setWarningTimes] = useState([
    "08-31-2023 FRI 09:39:13 AM",
    "08-31-2023 FRI 11:19:23 AM",
    "08-31-2023 FRI 12:19:23 AM",
    "08-31-2023 FRI 13:19:23 AM",
    "08-31-2023 FRI 14:19:23 AM",
    "08-31-2023 FRI 15:19:23 AM",
    "08-31-2023 FRI 16:19:23 AM",
    "08-31-2023 FRI 17:19:23 AM",
    "08-31-2023 FRI 18:19:23 AM",
    "08-31-2023 FRI 19:19:23 AM"
    // 다른 경고 시각들을 여기에 추가
  ]);

  // 모달 창 상태 관리
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const openModal = (time) => {
    setSelectedTime(time);
    setModalOpen(true);
  };

  return (
    <div className={style.cameraDetail}>
      <div className={style.text}>
        <GoDotFill className={style.icon} />
        <span className={style.camText}>CAMERA 01</span>
      </div>
      <div className={style.camera1}></div>
      <div className={style.dargerContainer}>
        <div className="dargerText">
          <p>count</p>
          <p>state</p>
        </div>
        <div className={style.dargerList}>
          <ul>
            {warningTimes.map((time, index) => (
              <li key={index} onClick={() => openModal(time)}>
                {time}
              </li>
            ))}
          </ul>
        </div>
        <Link to={{
          pathname: "/check",
          state: { value: "1" }
        }}>
          <button className={style.checkB}>조회하기</button>
        </Link>

      </div>
      {/* 모달 창 */}
      {modalOpen && (
        <Modal
          closeModal={() => setModalOpen(false)}
          selectedTime={selectedTime}
          deleteWarningTime={() => {
            const updatedTimes = warningTimes.filter((time) => time !== selectedTime);
            setWarningTimes(updatedTimes);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default Cam1;
