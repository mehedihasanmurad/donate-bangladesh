
document.getElementById("history-btn").addEventListener("click", function () {
    const historyBtnToggle = historyToggle("donation-btn", "history-btn", "section-container", "history-add");
    // add history
    const addHistory = document.getElementById("history-add");
    //noakhali bdt
    const noakhaliBdt = setParseIntValue("noakhali-bdt")
    //donate text
    const donateText = document.getElementById("donate-text").innerText;
    const div = document.createElement("div");
    const newDate = setTime();
    div.classList.add("px-10", "py-8", "border", "rounded-lg", "font-semibold", "mb-5");
    div.innerHTML = `
    ${noakhaliBdt} ${donateText} </br>
    ${newDate}
    `;
    if (noakhaliBdt <= 5500) {
        alert("there are no money in your account");
    }
    else {
        addHistory.appendChild(div);
    }
})


document.getElementById("donation-btn").addEventListener("click", function () {
    const donationBtnToggle = donationToggle("history-btn", "donation-btn", "history-add", "section-container");
})






allBtnHandler("donate-btn-noakhali", "donation-amount-noakhali", "bdt", "noakhali-bdt");
allBtnHandler("donate-btn-feni", "donation-amount-feni", "bdt", "feni-bdt");
allBtnHandler("donate-btn-quota", "donation-amount-quota", "bdt", "quota-bdt");