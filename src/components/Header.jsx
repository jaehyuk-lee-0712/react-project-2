import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillRecordCircleFill } from "react-icons/bs";
import { PiVinylRecordFill } from "react-icons/pi";
import { PiVinylRecordBold } from "react-icons/pi";
import { LiaRecordVinylSolid } from "react-icons/lia";
import { PiVinylRecordDuotone } from "react-icons/pi";
import { SiPlayerfm } from "react-icons/si";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { BsMusicPlayer } from "react-icons/bs";
import { IoMdRadio } from "react-icons/io";
// import { TbLetterR } from "react-icons/tb";

const Header = () => {
  return (
    <div>
      <header id='header' role='banner'>
        <h1 className='logo'>
          <Link to="/"><IoMdRadio/>봉팔이의 라디오</Link>
        </h1>
        <h2>chart</h2>
        <ul>
          <li><Link to='/melon'><BsFillRecordCircleFill /><span>멜론 차트</span></Link></li>
          <li><Link to='/bugs'><PiVinylRecordFill/><span>벅스 차트</span></Link></li>
          <li><Link to='/apple'><PiVinylRecordBold/><span>애플 차트</span></Link></li>
          <li><Link to='/genie'><LiaRecordVinylSolid/> <span>지니 차트</span></Link></li>
          <li><Link to='/bill'><PiVinylRecordDuotone /> <span>빌보드 차트</span></Link></li>
        </ul>
        <h2>playlist</h2>
        <ul>
          <li><Link to='/recent'><SiPlayerfm/> <span>recent</span></Link></li>
          <li><Link to='/favorites'><BsFillMusicPlayerFill/><span>favorites</span></Link></li>
          <li><Link to='/mymusic'><BsMusicPlayer/><span>favorites</span></Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
