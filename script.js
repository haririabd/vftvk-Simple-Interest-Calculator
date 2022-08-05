//This function changes the value of the slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

//This function is for form validation.
//It supposed to pop up an alert and return focus back to the input once alert is closed
function validateForm() {
    var principleValue = document.getElementById("principal").value;
    if (principleValue < 1) {
        alert("Enter a positive number");
        return document.principal.focus();//I think this line is incorrect as I cannot get the app to focus on the principal after alert closed
    }
}

//This function computes the input
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = "\<p>If you deposit \<mark>" + principal + "\</mark>,\<br\> at an interest rate of \<mark>" + rate + "\</mark>%.\<br\>" + "You will receive an amount of \<mark>" + interest + "\</mark>,\<br\>in the year \<mark>" + year + "\</mark>\<br\>\</p>";
}
