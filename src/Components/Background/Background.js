import React from 'react'
import './Background.css'

import coffeeVideo01 from '../../assets/coffeeVideo01.mp4'
import coffee01 from '../../assets/coffee01.jpg'
import coffee02 from '../../assets/coffee02.jpg'
import coffee03 from '../../assets/coffee03.jpg'



const Background = ({ heroCount, playStatus }) => {

    if (playStatus) {
        return (
            <video className='background fade-in' autoPlay muted loop>
                <source src={coffeeVideo01} type='video/mp4' />
            </video>
        )
    }
    else if (heroCount === 0) {
        return (
            <img src={coffee01} className='background fade-in'></img>
                )
    }
    else if (heroCount === 1) {
        return (
            <img src={coffee02} className='background fade-in'></img>
                )
    }
    else if (heroCount === 2) {
        return (
            <img src={coffee03} className='background fade-in'></img>
                )
    }
}

export default Background