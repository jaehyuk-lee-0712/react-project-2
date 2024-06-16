import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { FcCalendar } from 'react-icons/fc';
import 'react-datepicker/dist/react-datepicker.css';

import { fetchVideoID } from '../utils/fetchViedoID';

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  <button onClick={onClick} ref={ref}>
    <FcCalendar size={24} />
    <span>{value}</span>
  </button>
})

const Chart = ({ title, musicList, selectedDate, onDateChange, minDate, maxDate }) => {
  const [results, setResults] = useState([]);
  const handlerItemClick = async (query) => {
    console.log(query)
    const results = await fetchVideoID(query);
    setResults(results)
  }
  return (
    <section className='music-chart'>
      <div className='title'>
        <h2>{title}</h2>
        <div className='date-picker'>
          <DatePicker
            selected={selectedDate}
            onChange={onDateChange}
            dateFormat="yyyy-MM-dd"
            minDate={minDate}
            maxDate={maxDate}
          // customInput={<CustomInput />}
          ></DatePicker>
        </div>
      </div>
      <div className="list">
        <ul>
          {musicList.map((item, idx) => (
            <li key={idx} className="chart-item" onClick={() => handlerItemClick(item.title)}>
              <div className="rank">
                <span>#{item.rank}</span>
              </div>
              <div className="thumb">
                <img src={item.imageURL} alt={item.title} />
              </div>
              <div className="info">
                <span className="title">{item.title}</span>
                <span className="artist">{item.artist}</span>
              </div>
              <div className="album">{item.album}</div>
            </li>
          ))}
        </ul>
      </div>
      {results.length > 0 && (
        <div className='search-results'>
          <h3>유튜브 검색 결과입니다.</h3>
          <ul>
            {results.map((res, idx) => (
              <li key={idx}>
                <span className='img'></span>
                <span className='title'>{res.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Chart;
