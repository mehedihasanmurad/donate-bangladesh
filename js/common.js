

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





function setParseIntValue(id) {
    const parseIntValue = document.getElementById(id).innerText;
    const convertParseIntValue = parseInt(parseIntValue);
    return convertParseIntValue;
}
