import React from 'react'
import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import pause_icon from '../../assets/pause_icon.png'
import play_icon from '../../assets/play_icon.png'

const Hero = ({heroData ,setHeroCount,heroCount,setPlayStatus ,playStatus}) => {
  return (
    <div className='play'>
      <div className='play-text'>
        <p>{heroData.text01}</p>
        <p>{heroData.text02}</p>
      </div>
      <div className='play-explore'>
        <p>Conheça o Verdadeiro Café</p>
        <img src={arrow_btn}></img>
      </div>
      <div className='play-dot-play'>
        <ul className='play-dots'>
          <li onClick={() => setHeroCount(0)} className={heroCount===0?"play-dot orange":"play-dot" }></li>
          <li onClick={() => setHeroCount(1)} className={heroCount===1?"play-dot orange":"play-dot" }></li>
          <li onClick={() => setHeroCount(2)} className={heroCount===2?"play-dot orange":"play-dot" }></li>
        </ul>
        <div className='play-video'>
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="play/pause icon"></img>
          <p>Assista o video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
