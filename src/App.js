import { useEffect, useState } from 'react';
import './App.css';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';



function App() {
  let heroData = [
    { text01: ' "Um Café é um cafune', text02: 'para trazer um pouquinho de fé"' },
    { text01: ' "Por tras de toda pessoa de sucesso,', text02: 'existe uma boa quantidade de café"' },
    { text01: '"Beba café,', text02: 'inspire, sorria, repita"' }
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false)

  //intervo de troca slide
  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count) => {return count===2?0:count+1})
    },5000)
  },[])

  return (
    <div className="App">
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar></Navbar>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}>
      </Hero>
    </div>
  );
}

export default App;
