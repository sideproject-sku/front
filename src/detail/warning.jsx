import React, { useState } from "react";
import style from './detailCamStyle.module.css';
import warningIcon from '../detail/warningIcon.svg';
//백엔드 연동 후 수정, css를 위해 미리 작업

function Warning() {
  // 모달 창 상태 관리
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={style.warningContainer}>
      {/* 버튼을 클릭 시 경고창 */}
      <button onClick={openModal} className={style.openModalButton}>
        열기
      </button>

      {/* 모달 창 */}
      {modalOpen && (
        <div className={style.warningModal}>
          <div className={style.warningModalContent}>
            <div className={style.warningXcontainer}>
              <button onClick={closeModal} className={style.warningXButton}>X</button>
            </div>
            <span className={style.warning}>WARNING</span>
            <img src={warningIcon} className={style.warningIcon}/>
              <span className={style.warningText}>수용인원을 초과했습니다.</span>
              {/* 닫기 버튼 */}
              <button onClick={closeModal} className={style.warningCloseButton}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Warning;
