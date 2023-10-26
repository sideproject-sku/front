import React from "react";
import { GoDotFill } from "react-icons/go";
import style from './modalStyle.module.css'; // 모달의 스타일 파일 경로에 맞게 수정해주세요

const Modal = ({ closeModal, selectedTime, deleteWarningTime }) => {
  return (
    <div className={style.modal} onClick={closeModal}>
      <div className={style.modalContent}>
        <div className={style.xcontainer}>
          <button onClick={closeModal} className={style.XButton}>X</button>
        </div>
        <div className={style.modalText}>
          <GoDotFill className={style.icon} />
          <span className={style.camModalText}>CAMERA 01</span>
          <span className={style.timeText}>{selectedTime}</span>
        </div>
        <div className={style.warningCam}></div>
        <div className={style.buttonList}>
          <button onClick={deleteWarningTime} className={style.deleteButton}>삭제</button>
          <button onClick={closeModal} className={style.closeButton}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
