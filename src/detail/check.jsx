import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './check.module.css';
import Modal from './modal';

function Check() {
  /* 
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // 스프링에서 데이터 가져오는 API 호출
      // axios 또는 fetch를 사용하여 백엔드 API를 호출
      // camera_Id, date, head_count, img
      // 백엔드 API 호출이 성공하면 setData로 데이터를 설정
  
      const fetchData = async () => {
        try {
          const response = await fetch('backend_api_url');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      };
  
      fetchData();
    }, []);
    */

  const [selectedOption, setSelectedOption] = useState('전체 조회'); // default value
  const location = useLocation();
  const defaultOption = { option: '전체 조회' };
  const { option } = location.state ? location.state : defaultOption;
  console.log(location)
  //fake data
  const [data, setData] = useState([
    {
      camera_Id: 1,
      date: '08-31-2023 FRI 09:39:13 AM',
      head_count: 5236,
      img: 'https://via.placeholder.com/150',
    },
    {
      camera_Id: 2,
      date: '08-31-2023 FRI 18:16:93 AM',
      head_count: 6388,
      img: 'https://via.placeholder.com/150',
    },
    {
      camera_Id: 1,
      date: '08-31-2023 FRI 20:31:06 AM',
      head_count: 2081,
      img: 'https://via.placeholder.com/150',
    }
  ]);

  const handleDelete = (id) => {
    // 삭제 기능
    const updatedData = data.filter((item) => item.camera_Id !== id);
    setData(updatedData);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  //select id만 조회
  const filteredData = selectedOption === '전체 조회' ? data : data.filter((item) => item.camera_Id.toString() === selectedOption);

const selectList = [
  {value: "전체 조회", name: "전체 조회하기"},
  {value: "1", name: "카메라1"},
  {value: "2", name: "카메라2"}
];


//모달 코드
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);

const handleCheck = (item) => {
  setSelectedItem(item);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

  return (
    <div className={styles.checkContainer}>
      <div className={styles.selectContainer}>
        <select className={`${styles.selectBox} ${styles.customSelect}`}
        value={selectedOption} onChange={handleOptionChange}>
        {selectList.map((item) => {
            return <option value={item.value} key={item.value}>
              {item.name}
            </option>;
          })}
        </select>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>카메라</th>
            <th>이미지</th>
            <th>카운트</th>
            <th>시각</th>
            <th>동작</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className={styles.tableTr}>
              <td className={styles.cam}>{`CAMERA ${item.camera_Id}`}</td>
              <td className={styles.camImg}>
                <img src={item.img} alt={`Image ${index}`} style={{ width: '100px', height: '50px' }} />
              </td>
              <td className={styles.count}>{item.head_count}</td>
              <td className={styles.date}>{item.date}</td>
              <td className={styles.buttonList}>
                <button className={styles.checkButton}
                onClick={() => handleCheck(item)}>확인</button>
                <button className={styles.deleteButton}
                onClick={() => handleDelete(item.camera_Id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <Modal
          item={selectedItem}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Check;