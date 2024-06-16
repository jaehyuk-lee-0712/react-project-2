import React, { useState } from 'react'
import Chart from '../components/Chart'
import useFetchData from '../hook/useFetchData';
import { ClipLoader } from 'react-spinners';

const BillBoard = () => {
  // const {data , loading} = useFetchData('https://raw.githubusercntent.com/kimyih/music-best/main/billboard/billboard100_2024-06-04.json');

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const [selectedDate, setSelectedDate] = useState(yesterday);

  const formattedDate = selectedDate.toISOString().split('T')[0]; // 날짜 포맷 형식 맞추기

  const { data, loading } = useFetchData(`https://raw.githubusercontent.com/kimyih/music-best/main/billboard/billboard100_${formattedDate}.json`);

  return (
    <>
      {loading ? (
        <div className='loading'>
          <ClipLoader size={50} color={'#a8a8a8'} loading={loading} />
        </div>
      ) : (
        <Chart title="BillBoard 차트 TOP 100" musicList={data}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
          minDate={new Date('2024-05-01')}
          maxDate={yesterday} />
      )}
    </>
  );
}

export default BillBoard
