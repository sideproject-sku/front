import React, { useState, useRef } from "react";
import { GoDotFill } from "react-icons/go";
import style from './detailCamStyle.module.css';

function Cam1() {
  // CCTV 경고 시각 데이터 예시 (백엔드에서 받아온 데이터로 대체해야 함)
  const [warningTimes, setWarningTimes] = useState([
    "08-31-2023 FRI 09:39:13 AM",
    "08-31-2023 FRI 11:19:23 AM",
    "08-31-2023 FRI 11:19:23 AM",
    "08-31-2023 FRI 11:19:23 AM",
    "08-31-2023 FRI 11:19:23 AM",
    "08-31-2023 FRI 11:19:23 AM",
    "08-31-2023 FRI 11:19:23 AM",
    "08-31-2023 FRI 11:19:23 AM",
    "08-31-2023 FRI 11:19:23 AM",
    "08-31-2023 FRI 11:19:23 AM"
    // 다른 경고 시각들을 여기에 추가
  ]);

  // 모달 창 상태 관리
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  // 모달 창 밖을 클릭했을 때 모달을 닫기 위한 ref
  const modalRef = useRef(null);

  const openModal = (time) => {
    setSelectedTime(time);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTime("");
  };

  // 경고 시각 삭제
  const deleteWarningTime = () => {
    const updatedTimes = warningTimes.filter((time) => time !== selectedTime);
    setWarningTimes(updatedTimes);
    closeModal();
  };

  // 모달 창 밖을 클릭했을 때 모달을 닫도록 이벤트 핸들러 함수 추가
  const handleModalClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
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
        <button className={style.checkB}>조회하기</button>
      </div>
      {/* 모달 창 */}
      {modalOpen && (
        <div className={style.modal} onClick={handleModalClick}>
          <div className={style.modalContent} ref={modalRef}>
            <div className={style.xcontainer}>
              <button onClick={closeModal} className={style.XButton}>X</button>
            </div>
            <div className={style.modalText}>
              <GoDotFill className={style.icon} />
              <span className={style.camModalText}>CAMERA 01</span>
              <span className={style.timeText}>{selectedTime}</span>
            </div>
            <div className={style.warningCam}></div>
            {/* 삭제 버튼을 추가하고 클릭 시 deleteWarningTime 함수 호출 */}
            <div className={style.buttonList}>
              <button onClick={deleteWarningTime} className={style.deleteButton}>삭제</button>
              <button onClick={closeModal} className={style.closeButton}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cam1;
