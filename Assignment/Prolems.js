//Problem-01 : Tax Calculator

function calculateTax(MonthlyIncome, MonthlyExpense) {

    if (typeof MonthlyIncome !== "number" || typeof MonthlyExpense !== "number" || MonthlyExpense < 0 || MonthlyIncome < 0 || MonthlyIncome < MonthlyExpense) {
        return `Invalid Input`
    }

    //20% tax => 0.20
    let difference = MonthlyIncome - MonthlyExpense
    let tax = difference * 0.20

    return tax
}




//Problem 02 : Notification Generator

function sendNotification(email) {

    if (typeof email !== "string" || email.indexOf("@") === -1) {
        return `Invalid Email`
    }

    let splitString = email.split("@");
    if (splitString.length !== 2) {
        return `Invalid Email`
    }

    let userName = splitString[0]
    let domainName = splitString[1]

    return `${userName} sent you an email from ${domainName}`
}




//Problem-03: Checking Digits Inside a Name

function checkDigitsInName(str) {

    if (typeof str !== "string") {
        return `Invalid Input`
    }

    for (let char of str) {
        if (!isNaN(char) && char !== " ") {
            return true
        }
    }

    return false
}


//Problem 04 : Calculate Admission Final Score 

function calculateFinalScore(obj) {

    if (typeof obj !== "object" || obj === null) {
        return `Invalid Input`
    }

    const { name, testScore, schoolGrade, isFFamily } = obj;

    if (
        typeof name !== "string" ||
        typeof testScore !== "number" || testScore < 0 || testScore > 50 ||
        typeof schoolGrade !== "number" || schoolGrade > 30 || schoolGrade < 0 ||
        typeof isFFamily !== "boolean"
    ) {
        return `Invalid Input`
    }

    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
}




//Problem 05:  Predict Avarage Waiting Time 

function waitingTime(times, serialNumber) {
    if (!Array.isArray(times) || typeof serialNumber !== "number") {
        return `Invalid Input`
    }

    for (let time of times) {
        if (typeof time !== "number") {
            return `Invalid Input`
        }
    }

    let totalTime = 0;
    for (let time of times) {
        totalTime = totalTime + time
    }
    let avgTime = Math.round(totalTime / times.length);

    let leave = serialNumber - times.length - 1

    if (leave <= 0) {
        return 0
    }
    let waitingTime = avgTime * leave
    return waitingTime
}