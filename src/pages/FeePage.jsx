import React from "react";
import SubPageLayout from "../components/SubPageLayout";

function FeePage() {
  return (
    <SubPageLayout title="AA 인천연합 하계 공개모임">
      <div className="sub-middle">
        <h3>참가비 안내</h3>
        <hr />

        <div className="info-container">
          <p className="info">
            <span className="material-symbols-rounded">payment</span>
            <strong>참가비&nbsp;:&nbsp;</strong> 30,000원
          </p>
          <p className="info">
            <span className="material-symbols-rounded">account_balance</span>
            <strong>신한 110-415-673806</strong>&nbsp;(예금주: 강경옥)
          </p>
          <p className="info">
            <span className="material-symbols-rounded">contact_support</span>
            <strong>문 의&nbsp;:&nbsp;</strong>계산강&nbsp;
            <a href="tel:010-5022-3279">010-5022-3279</a>
          </p>
        </div>

        <h4
          style={{ color: "#2c3e50", margin: "30px 0 0 0", fontSize: "16px" }}
        >
          <span className="material-symbols-rounded">local_hospital</span>
          병원 환우 대상 할인 안내
        </h4>
        <div
          className="discount-info"
          style={{ padding: "2px 14px", marginTop: "20px" }}
        >
          <p>
            병원을 통하여 신청 후 사전 접수 기간 내 입금 완료된 입원 중인 환우
            분께는 1만원 할인이 적용되어, 20,000원으로 참가 가능합니다.
          </p>
          <p>
            월활한 행사 진행을 위하여{" "}
            <span style={{ color: "#e74c3c" }}>
              사전 접수 기간 이후 신청이나 현장 접수 등으로는 할인이 불가
            </span>
            함을 알려드립니다.
          </p>
          <p>
            <strong>사전 접수 기간&nbsp;:&nbsp;</strong> 2025년 8월 2일까지
          </p>
        </div>
      </div>
    </SubPageLayout>
  );
}

export default FeePage;
