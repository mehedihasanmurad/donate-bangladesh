
//history button
document.getElementById("history-btn").addEventListener("click", function () {
    //button background color toggle
    const donationBtn = document.getElementById("donation-btn");
    const historyBtn = document.getElementById("history-btn");
    donationBtn.classList.remove("button-color");
    historyBtn.classList.add("button-color");

    //history take dhorci
    const addHistory = document.getElementById("history-add");

    //input value
    const noakhaliInput = document.getElementById("donation-amount-noakhali").value;
    const donationAmount = parseInt(noakhaliInput);
    //donate text
    const donateText = document.getElementById("donate-text").innerText;
    const div = document.createElement("div");
    //time set
    const newDate = setTime();
    div.classList.add("px-10", "py-8", "border", "rounded-lg","font-semibold","mb-5");
    div.innerHTML = `
    ${donationAmount} taka is ${donateText} </br>
    ${newDate}
    `
    addHistory.appendChild(div);

    //button toggle
    document.getElementById("section-container").classList.add("hidden");
    document.getElementById("history-add").classList.remove("hidden");
})

//donation button
document.getElementById("donation-btn").addEventListener("click", function () {
    //button background color toggle
    const historyButton = document.getElementById("history-btn");
    const donationButton = document.getElementById("donation-btn");
    historyButton.classList.remove("button-color");
    donationButton.classList.add("button-color")

    //button toggle
    document.getElementById("history-add").classList.add("hidden");
    document.getElementById("section-container").classList.remove("hidden");

})



allBtnHandler("donate-btn-noakhali", "donation-amount-noakhali", "bdt", "noakhali-bdt");
allBtnHandler("donate-btn-feni", "donation-amount-feni", "bdt", "feni-bdt");
allBtnHandler("donate-btn-quota", "donation-amount-quota", "bdt", "quota-bdt");