import React, { useContext, useState, useRef, useEffect } from 'react'
import { LiaRecordVinylSolid } from "react-icons/lia";
import { IoMdShuffle } from "react-icons/io";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import { CiStop1 } from "react-icons/ci";
import { IoMdRepeat } from "react-icons/io";
import ReactPlayer from 'react-player';
import { MusicPlayerContext } from '../context/MusicPlayerProvider';

const Aside = () => {
  const { musicData } = useContext(MusicPlayerContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [nowPlayingIndex, setNowPlayingIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50); // 볼륨 상태 관리
  const playerRef = useRef(null);

  useEffect(() => {
    if (musicData.length > 0) {
      setNowPlayingIndex(0); // Set the first song as now playing initially
    }
  }, [musicData]);

  const nowPlaying = musicData[nowPlayingIndex];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    playerRef.current.seekTo(0);
  };

  const handleNext = () => {
    if (isShuffling) {
      setNowPlayingIndex(Math.floor(Math.random() * musicData.length));
    } else {
      setNowPlayingIndex((nowPlayingIndex + 1) % musicData.length);
    }
  };

  const handlePrev = () => {
    setNowPlayingIndex((nowPlayingIndex - 1 + musicData.length) % musicData.length);
  };

  const handleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  const handleRepeat = () => {
    setIsRepeating(!isRepeating);
  };

  // const handleVolumeChange = (e) => {
  //   playerRef.current.setVolume(e.target.value / 100);
  // };

  const handleVolumeChange = (e) => setVolume(parseInt(e.target.value, 10)); // 볼륨 업데이트


  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
    playerRef.current.seekTo(parseFloat(e.target.value));
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!nowPlaying) {
    return (
      <aside id='aside'>
        <div className="play-now">
          <h2><LiaRecordVinylSolid /> Now Playing</h2>
          <div>Loading...</div>
        </div>
      </aside>
    );
  }

  return (
    <aside id='aside'>
      <div className="play-now">
        <h2><LiaRecordVinylSolid /> Now Playing</h2>
        <div className='thumb'>
          <div className='img'>
            <ReactPlayer
              ref={playerRef}
              url={`https://www.youtube.com/watch?v=${nowPlaying.videoID}`}
              playing={isPlaying}
              controls={false}
              width="100%"
              height="100%"
              onProgress={handleProgress}
              onDuration={handleDuration}
              onEnded={handleNext}
              loop={isRepeating}
              volume={volume / 100} // 볼륨 설정
            />
          </div>
          <span className='title'>{nowPlaying.title}</span>
          <span className='artist'>{nowPlaying.artist}</span>
        </div>
        <div className='progress'>
          <input
            type="range"
            min='0'
            max='1'
            step='0.01'
            value={played}
            onChange={handleSeekChange}
            className="progress-bar"
          />
          <div className="time">
            <div className="current">{formatTime(played * duration)}</div>
            <div className="total">{formatTime(duration)}</div>
          </div>
        </div>
        <div className="controls">
          <span className='shuffle' onClick={handleShuffle}><IoMdShuffle /></span>
          <span className='prev' onClick={handlePrev}><GrLinkPrevious /></span>
          <span className='play' onClick={handlePlayPause}>
            {isPlaying ? <CiStop1 /> : <FaPlay />}
          </span>
          {/* <span className='stop' onClick={handleStop}><CiStop1 /></span> */}
          <span className='next' onClick={handleNext}><GrLinkNext /></span>
          <span className='repeat' onClick={handleRepeat}><IoMdRepeat /></span>
        </div>
        <div className='volume'>
          <input
            type="range"
            min='0'
            max='100'
            step='1'
            onChange={handleVolumeChange}
            className="volume-bar"
          />
        </div>
      </div>

      <div className="play-list">
        <h3><LiaRecordVinylSolid /> Play List</h3>
        <ul>
          {musicData.map((track, index) => (
            <li key={index} className={nowPlayingIndex === index ? 'current' : ''}>
              <span className='img' style={{ backgroundImage: `url(${track.imageURL})` }}></span>
              <span className='title'>{track.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Aside;
