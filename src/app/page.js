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
import calendar from "@/assets/images/calendar.jpg";
import we from "@/assets/images/we.jpg";

import { MESS } from "./message.js";

function sleep(milisecond) {
  return new Promise((resolve) => setTimeout(resolve, milisecond));
}

export default function Home() {
  const [mess, setMess] = useState("");
  const [currentMess, setCurrentMess] = useState("");
  const [count, setCount] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const [card, setCard] = useState(false);
  const [action, setAction] = useState("");
  const [time, setTime] = useState(null);

  useEffect(() => {}, []);

  function playMusic() {
    const audio = document.querySelector("#backgroundMusic");
    audio.play();
  }

  function hoverNo() {
    const element = document.querySelector("#no");
    if (!element) return;
    setAction("no");
    setTime(new Date());
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
    setAction("yes");
    setTime(new Date());
    const ele = document.querySelector(".modal");
    ele.style.display = "flex";
    //post();
  }

  function renderInvitation() {
    return (
      <div className="invitation">
        <div className="yes-background">
          {Array.from(Array(200).keys()).map((key) => {
            return <div key={key} className="snow"></div>;
          })}
        </div>
        <div className="question">
          <div>
            Vì rất muốn mời iem đi chơi với anh.<br></br>
            Vậy nên anh muốn biết rằng, liệu em có thể đi chơi với iem vào tối
            ngày 24/12/2024 này được khum???
          </div>
        </div>
        <div className="answers">
          <button id="yes" className="button" onClick={yes}>
            <div>Em đồng íiiiiiii ♥</div>
            <div className="tree">
              <Image src={tree} width={25} height={28} alt="snow-tree" />
              <Image src={tree} width={32} height={43} alt="snow-tree" />
            </div>
          </button>
          <button id="no" className="no-button" onMouseEnter={hoverNo}>
            <Image src={hat} width={383} height={317} alt="santa-hat" />
            <div>Chạ thèm</div>
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

  async function post() {
    const form = document.forms["test"];
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbypWgHmyrjghZgKOHy1GGMorASkv82GmRsNKFl1gQqc4vwuH3YAim8Z_MyLR9tYj4aa1A/exec",
        {
          method: "POST",
          body: new FormData(form),
          //body: { Action: "123", Time: "eeee" },
        },
      );
    } catch (error) {
      console.error("Error!", error.message);
    }
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
            <form
              style={{ display: "none" }}
              name="test"
              method="POST"
              action="https://script.google.com/macros/s/AKfycbypWgHmyrjghZgKOHy1GGMorASkv82GmRsNKFl1gQqc4vwuH3YAim8Z_MyLR9tYj4aa1A/exec"
            >
              <input name="Action" type="text" value={action} />
              <input name="Time" type="text" value={time} />
              <button onClick={post}>Send</button>
            </form>
            {isSent ? (
              <>
                <div>
                  Anh đã khom biết rằng em lại gửi tới anh nhiều tâm tư như vậy.
                  Anh rất xúc động và hạnh phúc. <br></br>
                  Cảm ơn em rất nhìu nhìu nhìu. Vậy là tối ngày 24/12/2024, em
                  hãy thậc xinh đẹp, thật lộng lẫy, và anh sẽ đón iem đi chơi
                  he!!! iu iemmmm
                </div>
                <button className="button-mess" onClick={recerve}>
                  NHẬN THIỆP NÈ
                </button>
              </>
            ) : (
              <>
                <div>
                  Anh rất vui vì em đã đồng ý đi chơi với anh. Vậy em có còn
                  điều gì muốn nói với anh khum?
                </div>
                <textarea
                  type="text"
                  value={mess}
                  onInput={changeMess}
                  style={{ flex: 1 }}
                />
                <button
                  disabled={currentMess.length != 201}
                  className="button-mess"
                  onClick={() => setIsSent(true)}
                >
                  GỬI
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  async function recerve() {
    const ele1 = document.querySelector(".modal-card");
    ele1.classList.add("modal-ani");
    await sleep(700);
    const ele2 = document.querySelector(".card");
    ele2.classList.add("card-ani");
    await sleep(700);
    const ele3 = document.querySelector(".text1");
    ele3.classList.add("text1-ani");
    await sleep(550);
    ele3.style.opacity = 1;
    await sleep(2200);
    const ele4 = document.querySelector(".text2");
    ele4.classList.add("text2-ani");
    await sleep(550);
    ele4.style.opacity = 1;
    await sleep(3700);
    const ele5 = document.querySelector(".img1");
    ele5.classList.add("img1-ani");
    await sleep(1700);
    const heart = document.querySelector(".heart");
    const path = document.querySelector(".heart > path");
    path.classList.add("animated-heart");
    heart.style.opacity = 1;
    await sleep(1700);
    const ele6 = document.querySelector(".text3");
    ele6.classList.add("text3-ani");
    await sleep(700);
    const ele7 = document.querySelector(".blur");
    ele7.classList.add("blur-ani");
  }
  function renderCard() {
    return (
      <div className="modal-card">
        <div className="card">
          <div>
            <div className="text1">Save the Date</div>
            <div className="text2">FOR THE NIGHT OF YOU AND ME</div>
            <div style={{ flex: 1 }}></div>
            <div>
              <Image
                className="img1"
                src={calendar}
                width={100}
                height={100}
                alt="calendar"
              />
              <svg viewBox="0 0 100 100" className="heart">
                <path
                  pathLength="1"
                  d="M49.998,90.544c0,0,0,0,0.002,0c5.304-14.531,32.88-27.047,41.474-44.23C108.081,13.092,61.244-5.023,50,23.933  C38.753-5.023-8.083,13.092,8.525,46.313C17.116,63.497,44.691,76.013,49.998,90.544z"
                />
              </svg>
            </div>
            <div className="text3">
              I will pick you up at 6:30 P.M,<br></br>
              63, Alley 201, Cau Giay Street
            </div>
          </div>
          <div>
            <Image src={we} width={100} height={100} alt="we" />
            <div className="blur"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
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
      {renderMessage()}
      {renderCard()}
    </>
  );
}
