import React, { useState } from "react";
import SubPageLayout from "../components/SubPageLayout";
import terminalImageUrl from "../assets/terminal.jpg";

function TransportPage() {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleShowImage = (e) => {
    e.preventDefault();
    setIsImageVisible(true);
  };

  const handleCloseImage = (e) => {
    e.stopPropagation();
    setIsImageVisible(false);
  };

  return (
    <SubPageLayout title="AA 인천연합 하계공개모임">
      <div className="sub-middle">
        <h3>대중교통 안내</h3>
        <hr />

        <p style={{ padding: "0 16px", lineHeight: "1.8" }}>
          대중 교통을 이용하여 모임에 참석하시는 분들을 위해 대부중고등학교
          정류장에서 은하수 펜션까지 차량이동을 지원합니다.
        </p>
        <h4 style={{ padding: "10px 0 8px 0" }}>
          <span className="material-symbols-rounded">directions_car</span>
          차량 봉사
        </h4>
        <div className="info-container">
          <p>
            <span className="material-symbols-outlined">schedule</span>
            <strong>시 간&nbsp;:&nbsp;</strong> 9일(土) 정오(12:00) 부터 대기
          </p>
          <p>
            <span className="material-symbols-outlined">location_on</span>
            <strong>위 치&nbsp;:&nbsp;</strong>
            <a href="#" onClick={handleShowImage}>
              대부 중고등학교 정류장
            </a>
          </p>
        </div>

        {isImageVisible && (
          <div id="parking-image" onClick={handleCloseImage}>
            <img
              src={terminalImageUrl}
              alt="대부중고등학교 정류장"
              onClick={(e) => e.stopPropagation()}
            />
            <div id="close-button" onClick={handleCloseImage}>
              <span className="material-symbols-outlined">close</span>
            </div>
          </div>
        )}

        <div>
          <span className="material-symbols-rounded">person</span>
          <strong>봉사자</strong>

          <ul style={{ listStyle: "circle" }}>
            <li style={{ marginLeft: "40px" }}>
              중동김&nbsp;&nbsp;
              <a
                href="tel:010-7912-3144"
                style={{ textDecoration: "none", color: "#3498db" }}
              >
                010-7912-3144
              </a>
            </li>
            <li style={{ marginLeft: "40px" }}>
              부개주&nbsp;&nbsp;
              <a
                href="tel:010-6336-8694"
                style={{ textDecoration: "none", color: "#3498db" }}
              >
                010-6336-8694
              </a>
            </li>
            <li style={{ marginLeft: "40px" }}>
              오산주&nbsp;&nbsp;
              <a
                href="tel:010-6305-5017"
                style={{ textDecoration: "none", color: "#3498db" }}
              >
                010-6305-5017
              </a>
            </li>
          </ul>
        </div>

        <h4 style={{ padding: "30px 0 8px 0" }}>
          <span className="material-symbols-rounded">directions_bus</span>
          버스 안내
        </h4>
        <div className="info-container">
          <p>
            <span className="material-symbols-rounded">
              check_circle_outline
            </span>
            123번 버스&nbsp;:&nbsp; 오이도역(25176) 승차 - 총 25개 정류장 이동 -
            종현동정보화마을 - 와곡 - 북동낚시터입구 -{" "}
            <strong>대부중고등학교(18421)</strong> 하차
          </p>
          <p>
            <span className="material-symbols-rounded">
              check_circle_outline
            </span>
            790번 버스&nbsp;:&nbsp; 오이도역(25171) 승차 - 총 14개 정류장 이동 -
            북동삼거리 - 종현동정보화마을 -{" "}
            <strong>대부중고등학교(18421)</strong>
            하차
          </p>
        </div>
      </div>
    </SubPageLayout>
  );
}

export default TransportPage;
