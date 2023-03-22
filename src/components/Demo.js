import { useEffect, useState } from 'react';
import { data } from '../App.style';

function Demo(props) {
  const [newData, setnewData] = useState([]);
  console.log('newData', newData);

  useEffect(() => {
    setnewData(
      data.map((item) => {
        return {
          ...item,
          address: 'Nam - Dinh',
          age: '27',
        };
      }),
    );
  }, [data]);
  console.log('data', data);

  return (
    <>
      {newData?.map((item) => {
        return (
          <div>
            <label htmlFor=''>{props?.title}</label>
            <img style={{ width: 150, height: 150 }} src={item?.image}></img>
            <strong>{item?.address}</strong> <br />
            <strong>{item?.age}</strong>
          </div>
        );
      })}
    </>
  );
}

export default Demo;
