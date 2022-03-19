import React, {useState} from "react";
import Menu from './Menu/Menu'
import './index.css'
import './app.css'

import middle from './img/Dron.png'
import firstPhoto from './img/first_photo.png'
import secondPhoto from './img/second_photo.png'
import newTechnology from './img/New_technology.png'
import goodSignal from './img/Good_signal.png'
import EasyToUse from './img/Easy_to_use.png'
import visibility from './img/Visibility.png'
import generationLeft from './img/leftBox_newGeneration.png'
import generationRight from './img/rightBox_newGeneration.png'
import generationDron from './img/newGeneration_Dron.png'
import bgStart from './img/bg_start.png'
import phantom from './img/PHANTOM.png'


function App() {
  const [menuActive, setMenuActive] = useState(false)
  const items = [{value:"Главная", href:'/main'}, {value:"Ассортимент", href:'/shop'}, {value:"О нас", href:'/info'}]

  return (
    <div className="App">
      {/*HEADER*/}
      <div className="intro h-screen bg-[#eff2f6] flex flex-col">
        <div className="h-[1280px] w-[760px] absolute right-0 bg-[#ff343d]">
          <div className="uppercase font-bold text-[330px] rotate-90 mt-[235px] absolute text-[#ff343d] select-none"
               style={{fontFamily: 'Montserrat-Bold', textShadow: "0px 0px 55px rgba(0, 0, 0, 0.301)"}}>mars
          </div>
        </div>

        <header className="mt-[70px] z-10 flex flex-col items-center">
          <div className="container w-[1570px] flex justify-between">
            <div className="header_left flex" style={{fontFamily: 'Montserrat-Bold'}}>
              <div className="header_logo mr-[80px] font-bold text-[24px] cursor-default">
                MARS
              </div>
              <a className="text-[#92a1a5] text-[14px] mt-[5px]" href="tel: +74951234567">+7 (495) 123-45-67</a>
            </div>
            <div className="header_right">
              <div className="buy_now"  onClick={() => setMenuActive(!menuActive)}>
                  <div className="flex cursor-pointer">
                    <div className="text uppercase mr-[40px] text-white text-[16px] font-bold"
                         style={{fontFamily:'Montserrat-Bold'}}>
                          buy now
                    </div>
                    <div className="burger-btn mt-[3px]">
                      <span/>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </header>
        <div className="info mt-[350px] ml-[220px]">
          <div className="info_title uppercase text-[60px] font-bold"
               style={{fontFamily:'Montserrat-Bold'}}>phantom
          </div>
          <div className="info_descr text-[14px] text-[#92a1a5]" style={{fontFamily:'Montserrat-Regular'}}>Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
            <br/>Quisque eget euismod dolor.
          </div>
        </div>
        <img className="w-[1030px] h-[635px] absolute right-[260px] mt-[185px]" src={middle} alt=""/>
      </div>
      <Menu active={menuActive} setActive={setMenuActive} header={"BUY NOW"} items={items}/>
      {/*PHOTO*/}
      <div className="2photo flex">
        <div className="first_photo absolute">
          <img className="relative h-[610px]" src={firstPhoto} alt=""/>
            <div className="info absolute top-0 mt-[250px] ml-[200px]">
              <div className="info_title font-bold text-[60px]" style={{fontFamily:'Montserrat-Bold'}}>Tap to fly</div>
              <div className="info_desrc text-[14px] text-[#92a1a5]"
                   style={{fontFamily:'Montserrat-Regular'}}>Lorem ipsum dolor sit amet.
              </div>
            </div>
        </div>
        <div className="second_photo absolute right-0">
          <img className="relative w-[1250px] h-[610px]" src={secondPhoto} alt=""/>
            <div className="w-[615px] h-[610px] bg-[black] opacity-60 absolute top-0"/>
            <div className="info font-bold text-[60px] text-[white] absolute top-0 mt-[220px] ml-[70px]"
                 style={{fontFamily:'Montserrat-Bold'}}>
              Fly higher
              <br/> than before
            </div>
            <button
                className="uppercase bg-[white] text-[18px] absolute top-0 right-0 mt-[310px] mr-[150px] rounded-3xl rotate-[-90deg] px-[25px] py-[12px] font-bold transition hover:px-[27px] hover:py-[13px] hover:mr-[148px]"
                style={{fontFamily:'Montserrat-Bold'}}>
              view more
            </button>
        </div>
      </div>
      {/*FEATURES*/}
      <div className="Features mt-[610px] h-[600px] flex flex-col items-center">
        <div className="title font-bold text-[48px] mt-[130px]"
             style={{fontFamily:'Montserrat-Bold'}}>Features
        </div>
        <div className="container w-[1570px] mt-[125px]">
          <ul className="flex justify-between">
            <li className="w-[370px] hover:mt-[-5px]">
              <a className="flex flex-col items-center" href="/#">
                <img src={newTechnology} alt=""/>
                  <div className="text text-[30px] mt-[75px]" style={{fontFamily:'Montserrat-Regular'}}>New technology</div>
              </a>
            </li>
            <li className="w-[370px] hover:mt-[-5px]">
              <a className="flex flex-col items-center" href="/#">
                <img src={goodSignal} alt=""/>
                  <div className="text text-[30px] mt-[78px]" style={{fontFamily:'Montserrat-Regular'}}>Good signal</div>
              </a>
            </li>
            <li className="w-[370px] hover:mt-[-5px]">
              <a className="flex flex-col items-center" href="/#">
                <img src={EasyToUse} alt=""/>
                  <div className="text text-[30px] mt-[73px]" style={{fontFamily:'Montserrat-Regular'}}>Easy to use</div>
              </a>
            </li>
            <li className="w-[370px] hover:mt-[-5px]">
              <a className="flex flex-col items-center" href="/#">
                <img src={visibility} alt=""/>
                  <div className="text text-[30px] mt-[71px]" style={{fontFamily:'Montserrat-Regular'}}>Visibility</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*NEW GENERATION OF VISION*/}
      <div className="newGeneration flex">
        <div className="leftBox h-[655px] z-10">
          <img src={generationLeft} alt=""/>
        </div>
        <div className="rightBox absolute right-0 ">
          <img className="relative w-[1030px] h-[656px]" src={generationRight} alt=""/>
            <div className="descr absolute top-0 z-10 ml-[250px] mt-[160px]">
              <div className="text text-[white] text-[72px] leading-tight" style={{fontFamily:'Montserrat-Regular'}}>
                New <span className="text-[#ff343d]">generation</span> <br/> of vision<span className="text-[#ff343d]">.</span>
              </div>
              <button className="mt-[50px] uppercase border-2 border-[#3b3b3b] rounded-3xl font-bold text-[white] text-[15px] py-[10px] px-[15px] pt-[13px] hover:mt-[47px] hover:border-[white]" style={{fontFamily:'Montserrat-Bold'}}>
                view more
              </button>
            </div>
        </div>
      </div>
      {/*NEW GENERATION OF FLYING*/}
      <div className="newGeneration flex h-screen">
        <div className="container">
          <div className="left mt-[345px] ml-[215px]">
            <div className="text text-[black] text-[72px] leading-tight" style={{fontFamily:'Montserrat-Regular'}}>
              New <span className="text-[#ff343d]">generation</span> <br/> of flying<span className="text-[#ff343d]">.</span>
            </div>
            <button className="mt-[50px] uppercase border-2 border-[#3b3b3b] rounded-3xl font-bold text-[black] text-[15px] py-[10px] px-[15px] pt-[13px] hover:mt-[47px]" style={{fontFamily:'Montserrat-Bold'}}>
              products
            </button>
          </div>
        </div>
        <div className="right">
          <img className="w-[910px] h-[560px] mt-[150px]" src={generationDron} alt=""/>
        </div>
      </div>
      {/*START*/}
      <div className="START absolute">
        <img className="relative h-screen w-screen" src={bgStart} alt=""/>
          <div className="descr absolute top-0 mt-[600px] ml-[510px] text-center">
            <div className="text text-[white] font-bold text-[92px]" style={{fontFamily:'Montserrat-Bold'}}>
              Start your journey.
            </div>
            <button className="mt-[50px] bg-[white] uppercase border-2 border-[white] rounded-3xl font-bold text-[#318f76] text-[15px] py-[10px] px-[15px] pt-[13px] hover:mt-[47px]" style={{fontFamily:'Montserrat-Bold'}}>
              view more
            </button>
          </div>
      </div>
      {/*FOOTER*/}
      <footer className="mt-[1000px] flex flex-col items-center h-[530px]">
        <img className="mt-[100px]" src={phantom} alt=""/>
          <div className="descr mt-[-200px] text-center">
            <div className="logo font-bold text-[24px]" style={{fontFamily:'Montserrat-Bold'}}>
              MARS
            </div>
            <div className="copyright text-[14px] text-[#92a1a5] mt-[30px]" style={{fontFamily:'Montserrat-Regular'}}>
              2016 Copyright. All rights reserved by Symu.co
            </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
