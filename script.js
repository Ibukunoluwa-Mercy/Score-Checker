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



function checkResult() {
    let scoreResult = document.getElementById("inputResult").value;
    let resultCheck = document.getElementById("areaDisplay");
    // if (scoreResult > 50) {
    //     alert("Pass");
    // }
    // else {
    //     alert("Try again next year");
    // }

let classification = "";

if (scoreResult >= 4.5 && scoreResult <= 5.0) {
    classification = "First Class Honours"
} else if(scoreResult >= 3.5 && scoreResult <= 4.49) {
    classification = "Second Class Honours (Upper Division)"
} else if (scoreResult >= 2.40 && scoreResult <= 3.49) {
classification = "Second Class Honours (Lower Division)"
} else if (scoreResult >= 1.50 && scoreResult <= 2.39){
    classification = "Third Class Division"
} else if (scoreResult >= 1.00 && scoreResult <= 1.49){
    classification = "Pass"
}else if (scoreResult >= 0.00 && scoreResult <= 0.99){
    classification = "Fail"
} else {
    alert("Invalid Score");
    return;
}

document.getElementById("areaDisplay").value = classification;
}