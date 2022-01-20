function backtopage() {
    window.location.href = "bagitems.html"
}
function paymentProcess() {
    let cd_name = document.getElementById("name").value;
    let cd_no = document.getElementById("card-no").value;
    let exp_date = document.getElementById("exp-date").value;
    let cvv = document.getElementById("cvv").value;

    if (cd_name === "Ruby Roy" && cd_no === "123456789" && exp_date === "07/25" && cvv === "123") {
        alert("Payment Successful");
        window.location.href = "afterLogin.html"
    } else {
        alert("Invalid Card")
    }
}