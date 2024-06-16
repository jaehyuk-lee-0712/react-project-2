import React from 'react'
import Chart from '../components/Chart'
import useFetchData from '../hook/useFetchData';

const GeniePage = () => {
  const {data , loading} = useFetchData('https://raw.githubusercontent.com/webs9919/music-best/main/genie/genie100_2024-06-04.json');

  return (
    <>
      {loading ? (
      <div>
          로딩중.....
      </div>
    ) : (
      <Chart title="Genie 차트 TOP 100" musicList={data}/>
    )}
    </>
  );
}

export default GeniePage
