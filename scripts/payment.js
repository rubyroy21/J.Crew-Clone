function backtopage() {
    window.location.href = "bagitems.html"
}
function paymentProcess() {
    let cd_name = document.getElementById("name").value;
    let cd_no = document.getElementById("card-no").value;
    let exp_date = document.getElementById("exp-date").value;
    let cvv = document.getElementById("cvv").value;

    if (cd_name === document.getElementById("name").value && cd_no === document.getElementById("card-no").value && exp_date === document.getElementById("exp-date").value && cvv === document.getElementById("cvv").value) {
        alert("Payment Successful");
        window.location.href = "afterLogin.html"
    }
}