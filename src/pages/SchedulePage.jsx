import React from "react";
import SubPageLayout from "../components/SubPageLayout";

function SchedulePage() {
  return (
    <SubPageLayout title="AA 인천연합 하계공개모임">
      <div className="sub-middle">
        <div className="content-container">
          <table>
            <thead>
              <tr>
                <th>시 간</th>
                <th>프로그램</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15:00 - 15:40</td>
                <td className="program">접수시작 및 사전 프로그램</td>
              </tr>
              <tr>
                <td>15:40 - 15:50</td>
                <td className="program">사물놀이</td>
              </tr>
              <tr>
                <td>15:50 - 16:10</td>
                <td className="program">개회식</td>
              </tr>
              <tr>
                <td>16:10 - 18:00</td>
                <td className="program">경험담 1부</td>
              </tr>
              <tr>
                <td>18:00 - 19:00</td>
                <td className="program">저녁 식사</td>
              </tr>
              <tr>
                <td>19:00 - 21:15</td>
                <td className="program">여흥 시간</td>
              </tr>
              <tr>
                <td>21:15 - 21:30</td>
                <td className="program">자유시간</td>
              </tr>
              <tr>
                <td>21:30 - 23:00</td>
                <td className="program">경험담 2부</td>
              </tr>
              <tr>
                <td>23:00 ~ 24:00</td>
                <td className="program">야식 및 자유시간</td>
              </tr>
              <tr>
                <td>00:00 - 06:00</td>
                <td className="program">마라톤 모임</td>
              </tr>
              <tr>
                <td>06:00 - 07:00</td>
                <td className="program">개인 정비 및 자유시간</td>
              </tr>
              <tr>
                <td>07:00 - 08:00</td>
                <td className="program">아침 식사</td>
              </tr>
              <tr>
                <td>08:00 - 09:00</td>
                <td className="program">폐회식 및 정리</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SubPageLayout>
  );
}

export default SchedulePage;
