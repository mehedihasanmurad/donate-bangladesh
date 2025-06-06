

function allBtnHandler(id, value, navPrice, amount) {
    document.getElementById(id).addEventListener("click", function () {
        const donationAmountNoakhaliInput = document.getElementById(value).value;
        const donationAmount = parseInt(donationAmountNoakhaliInput);
        const navBdt = setParseIntValue(navPrice)
        if (donationAmount !== "number" && donationAmount > 0) {
            const noakhaliBdt = setParseIntValue(amount);
            const updateNoakhaliBdt = noakhaliBdt + donationAmount;
            const updateNavBdt = navBdt - donationAmount;

            if (updateNavBdt < 0) {
                alert("you have no amount");
                return;
            }

            document.getElementById(navPrice).innerText = updateNavBdt;
            document.getElementById(amount).innerText = updateNoakhaliBdt;
            donationAmountNoakhaliInput.value = '';
        }
        else {
            alert("please enter a valid number")
        }
    })
}

function historyToggle(donation,history,article,section) {
    // //button background color toggle
    const donationBtn = document.getElementById(donation);
    const historyBtn = document.getElementById(history);
    donationBtn.classList.remove("button-color");
    historyBtn.classList.add("button-color");

    //button toggle
    const donationContainer = document.getElementById(article);
    const historyContainer = document.getElementById(section);
    donationContainer.classList.add("hidden");
    historyContainer.classList.remove("hidden");
}


function donationToggle(history, donation, section,article) {
    // //button background color toggle
    const historyBtn = document.getElementById(history);
    const donationBtn = document.getElementById(donation);
    historyBtn.classList.remove("button-color");
    donationBtn.classList.add("button-color");

    //button toggle
    const historyContainer = document.getElementById(section);
    const donationContainer = document.getElementById(article);
    historyContainer.classList.add("hidden");
    donationContainer.classList.remove("hidden");
}

function setTime() {
    const date = new Date();
    return date;
}

function setParseIntValue(id) {
    const parseIntValue = document.getElementById(id).innerText;
    const convertParseIntValue = parseInt(parseIntValue);
    return convertParseIntValue;
}
