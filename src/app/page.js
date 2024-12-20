"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "./globals.scss";

export default function Home() {
  useEffect(() => {}, []);

  function playMusic() {
    const audio = document.querySelector("#backgroundMusic");
    audio.play();
    console.log(audio, "22222");
  }

  function hoverNo() {
    console.log("1111");
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
            <Image
              src="/images/cheese.png"
              width={38}
              height={32}
              alt="cheese"
            />
          </div>
        </div>
      </div>
    );
  }

  function renderInvitation() {
    return (
      <div className="invitation">
        <div className="yes-background">
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
          <div className="snow"></div>
        </div>
        <div className="question">Bạn có thể cho tôi biết???</div>
        <div className="answers">
          <button id="yes" className="button">
            <div>Yessssssssssssss</div>
            <div className="tree">
              <Image
                src="/images/tree.png"
                width={25}
                height={28}
                alt="snow-tree"
              />
              <Image
                src="/images/tree.png"
                width={32}
                height={43}
                alt="snow-tree"
              />
            </div>
          </button>
          <button id="no" className="no-button" onMouseEnter={hoverNo}>
            <Image
              src="/images/santa-hat.png"
              width={383}
              height={317}
              alt="santa-hat"
            />
            <div>No</div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {renderLetter()}
      <div className={"page"}>
        <Image
          src="/images/background.jpg"
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
