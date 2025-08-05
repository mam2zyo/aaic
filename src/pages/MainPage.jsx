import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div id="main-page" className="page main-page">
      <div className="top">
        <h1>
          2025년 AA 인천연합
          <br />
          하계 공개 모임
        </h1>
      </div>

      <div className="middle">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZgebeYBS2xw?si=Lpexrk_XE06tEOa6"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="info-container">
          <p className="info">
            <span className="material-symbols-rounded">event</span>
            <strong>날 짜&nbsp;:&nbsp;</strong> 8월 9일(土) ~ 10일(日)
          </p>
          <p className="info">
            <span className="material-symbols-rounded">location_on</span>
            <strong>장 소&nbsp;:&nbsp;</strong>{" "}
            <a href="http://milkywayps.kr/">대부도 은하수 펜션</a>
          </p>
          <p className="info">
            <span className="material-symbols-rounded">campaign</span>
            <strong>주 제&nbsp;:&nbsp;</strong> AA 안에서의 회복과 성장
          </p>
        </div>
      </div>

      <div className="bottom">
        <Link to="/fee" className="tab-button">
          <span className="material-symbols-rounded">payment</span>참가비
        </Link>
        <Link to="/transport" className="tab-button">
          <span className="material-symbols-rounded">directions_bus</span>교통편
        </Link>
        <Link to="/schedule" className="tab-button">
          <span className="material-symbols-rounded">schedule</span>행사 일정
        </Link>
        <Link to="/additional" className="tab-button">
          <span className="material-symbols-rounded">info</span>기타 안내
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
