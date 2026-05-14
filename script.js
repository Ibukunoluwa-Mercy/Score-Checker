function checkGrade() {
    const scoreGrade = document.getElementById("scoreInput").value;
    const resultGrade = document.getElementById("resultOutput");
    const mySound = document.getElementById('successSound');
    const soundMy = document.getElementById('soundSuccess');
    const goodVery = document.getElementById('veryGood');

    if (scoreGrade === "") {
        alert("Please enter a score");
        return;
    }

    const score = parseFloat(scoreGrade);
    let grade = "";
    let remark = "";

    if (score >= 70 && score <= 100) {
        grade = "A";
        remark = "Excellent 🥳";
        soundMy.currentTime = 0;
        soundMy.play();
    } else if (score >= 60 && score <= 69) {
        grade = "B";
        remark = "Very Good 👋";
        goodVery.currentTime = 0;
        goodVery.play();
    } else if (score >= 50 && score <= 59) {
        grade = "C";
        remark = "Good 😏";
    } else if (score >= 45 && score <= 49) {
        grade = "D";
        remark = "Pass 😒";
    } else if (score >= 40 && score <= 44) {
        grade = "E";
        remark = "Minimum Pass 😓";
    } else if (score >= 0 && score <= 39) {
        grade = "F";
        remark = "Fail 😭";
        mySound.currentTime = 0;
        mySound.play();
    } else {
        alert("Invalid Score");
        return;
    }

    resultGrade.value = `${grade} - ${remark}`;
}