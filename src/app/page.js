"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.scss";

import cheese from "@/assets/images/cheese.png";
import tree from "@/assets/images/tree.png";
import hat from "@/assets/images/santa-hat.png";
import background_img from "@/assets/images/background.jpg";
import messageB from "@/assets/images/message-background.jpeg";

import { MESS } from "./message.js";

export default function Home() {
  const [mess, setMess] = useState("");
  const [currentMess, setCurrentMess] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  function playMusic() {
    const audio = document.querySelector("#backgroundMusic");
    audio.play();
  }

  function hoverNo() {
    const element = document.querySelector("#no");
    const hohoho = document.querySelector("#hohoho");
    if (!element) return;
    hohoho.play();
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    element.style.left = `${randomX}%`;
    element.style.top = `${randomY}%`;
  }

  function open() {
    playMusic();
    const envelope = document.querySelector("#envelope");
    envelope.classList.add("open");
    envelope.classList.remove("close");
    envelope.classList.remove("envelope-hover");
    const back = document.querySelector(".letter-background");
    back.classList.add("open-background");
  }

  function renderLetter() {
    return (
      <div className="letter-background">
        <div id="envelope" className="close envelope-hover" onClick={open}>
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            <div className="words line1"></div>
            <div className="words line2"></div>
            <div className="words line3"></div>
            <div className="words line4"></div>
          </div>
          <div className="tem">
            <Image src={cheese} width={38} height={32} alt="cheese" />
          </div>
        </div>
      </div>
    );
  }

  function yes() {
    const ele = document.querySelector(".modal");
    ele.style.display = "flex";
  }

  function renderInvitation() {
    return (
      <div className="invitation">
        <div className="yes-background">
          {Array.from(Array(200).keys()).map((key) => {
            return <div key={key} className="snow"></div>;
          })}
        </div>
        <div className="question">Bạn có thể cho tôi biết???</div>
        <div className="answers">
          <button id="yes" className="button" onClick={yes}>
            <div>Yessssssssssssss</div>
            <div className="tree">
              <Image src={tree} width={25} height={28} alt="snow-tree" />
              <Image src={tree} width={32} height={43} alt="snow-tree" />
            </div>
          </button>
          <button id="no" className="no-button" onMouseEnter={hoverNo}>
            <Image src={hat} width={383} height={317} alt="santa-hat" />
            <div>No</div>
          </button>
        </div>
      </div>
    );
  }

  function changeMess(event) {
    if (count >= MESS.length) {
      setCount(0);
      setCurrentMess("");
      setMess("");
      return;
    }
    let text = currentMess + MESS[count];
    setCurrentMess(text);
    setMess(text);
    setCount(count + 1);
  }

  function renderMessage() {
    return (
      <div className="modal">
        <div className="message">
          <Image
            src={messageB}
            width={225}
            height={150}
            alt="message-background"
          />
          <div className="content">
            <div></div>
            <input type="text" value={mess} onInput={changeMess} />
            <button>GỬI</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {renderMessage()}
      {renderLetter()}
      <div className={"page"}>
        <Image
          src={background_img}
          width={2560}
          height={1440}
          alt="background"
        />
        <div className="main">{renderInvitation()}</div>
        <div className="chrismax-tree"></div>
        <div className="music">
          <audio id="hohoho">
            <source src="/audios/hohoho.mp3" type="audio/mpeg" />
          </audio>
          <audio id="backgroundMusic" controls autoPlay loop>
            <source src="/audios/music.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </>
  );
}
