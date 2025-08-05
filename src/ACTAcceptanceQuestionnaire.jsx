import React, { useState } from "react";

export default function ACTAcceptanceQuestionnaire() {
  const [score, setScore] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    let total = 0;
    for (let i = 0; i < 7; i++) {
      const selected = document.querySelector(`input[name='q${i}']:checked`);
      if (selected) {
        total += parseInt(selected.value, 10);
      }
    }
    setScore(total);
    setShowResult(true);
  };

  const handleReset = () => {
    // 선택된 라디오 버튼 초기화
    for (let i = 0; i < 7; i++) {
      const checked = document.querySelector(`input[name='q${i}']:checked`);
      if (checked) checked.checked = false;
    }
    setScore(null);
    setShowResult(false);
  };

  const labels = [
    "전혀 그렇지 않다",    // 0
    "거의 그렇지 않다",    // 1
    "드물게 그렇다",       // 2
    "가끔 그렇다",         // 3
    "자주 그렇다",         // 4
    "거의 항상 그렇다",    // 5
    "항상 그렇다"          // 6
  ];

  const questions = [
    "고통스러운 경험과 기억으로 인해 나는 내가 가치 있게 여기는 삶을 살기가 어렵다.",
    "감정을 느끼는 것이 두렵다.",
    "걱정과 느낌을 통제하지 못하는 것에 대해 염려가 된다.",
    "고통스러운 기억들은 내가 만족스러운 삶을 살지 못하게 한다.",
    "감정은 일상생활에서 문제를 일으킨다.",
    "대부분의 사람들은 나보다 자신의 삶을 잘 꾸려나가고 있는 것 같다.",
    "걱정은 내가 성공하는 데 걸림돌이 된다."
  ];

  const tScore = score !== null ? Math.round(50 + 10 * ((score - 17.34) / 4.37)) : null;

  if (showResult) {
    return (
      <div style={{ padding: "1rem", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <h2>📊 결과</h2>
        <div style={{ marginTop: "1.5rem", background: "#fefce8", padding: "1rem", borderRadius: "8px" }}>
          <p style={{ fontWeight: "bold" }}>총점: {score}점</p>
          <p style={{ fontWeight: "bold" }}>T 점수: {tScore}</p>
          {/* <p style={{ marginTop: "0.5rem" }}>높은 점수일수록 심리적 유연성이 낮고, 회피 행동이 많음을 의미합니다.</p> */}
        </div>
        <button
          onClick={handleReset}
          style={{
            marginTop: "2rem",
            background: "#000",
            color: "#fff",
            padding: "0.6rem 1.2rem",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          다시 하기
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "1.3rem" }}>🧠 수용-행동 질문지</h2>
      <p style={{ fontSize: "0.95rem", marginBottom: "1.5rem" }}>
        다음 문장들을 읽고, 각 진술이 당신에게 얼마나 해당되는지를 가장 잘 나타내는 설명을 골라 주세요. (0~6점)
      </p>

      {questions.map((question, qIdx) => (
        <div key={qIdx} style={{
          marginBottom: "1.5rem",
          padding: "1rem",
          borderRadius: "10px",
          background: "#f9f9f9",
          boxShadow: "0 0 4px rgba(0,0,0,0.1)"
        }}>
          <p style={{ fontWeight: "bold", marginBottom: "0.8rem" }}>{qIdx + 1}. {question}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {labels.map((label, idx) => (
              <label key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <input type="radio" name={`q${qIdx}`} value={idx} style={{ transform: "scale(1.2)" }} />
                <span style={{ fontSize: "0.9rem" }}>{idx} - {label}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button
          onClick={handleSubmit}
          style={{
            background: "#000",
            color: "#fff",
            padding: "0.6rem 1.2rem",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          결과 보기
        </button>
      </div>
    </div>
  );
}
