import React from "react";
import SubPageLayout from "../components/SubPageLayout";

function AdditionalPage() {
  return (
    <SubPageLayout title="AA  인천연합 하계공개모임">
      <div className="sub-middle">
        <h3>기타 안내</h3>
        <hr />

        <div className="contact-section">
          <h3>
            <span className="material-symbols-rounded">help</span>
            추가적인 문의 사항은
          </h3>
          <ul className="contact-list">
            <li className="contact-item">
              <p style={{ marginBottom: "3px" }}>
                <span className="material-symbols-rounded">person</span>리틀정
              </p>
              <a href="tel:010-9594-5241">010-9594-5241</a>
            </li>
            <li className="contact-item">
              <p style={{ marginBottom: "3px" }}>
                <span className="material-symbols-rounded">person</span>신림박
              </p>
              <a href="tel:010-3447-9151">010-3447-9151</a>
            </li>
          </ul>
        </div>
      </div>
    </SubPageLayout>
  );
}

export default AdditionalPage;
