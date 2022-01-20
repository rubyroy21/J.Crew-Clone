var bagProducts = JSON.parse(localStorage.getItem("bagProducts")) || []


bagProducts.map(function (elem, index) {
    var smalldiv = document.createElement('div')
    smalldiv.setAttribute('class', 'smalldiv1')
    var image = document.createElement('img')
    image.setAttribute('class', 'imagesize')
    var productname = document.createElement('p')
    productname.setAttribute('class', 'secondpara')
    var price = document.createElement('p')
    price.setAttribute('class', 'fifthpara')
    var bagbutton = document.createElement("button")
    bagbutton.textContent = "remove"
    bagbutton.setAttribute('class', 'bagbtn')

    bagbutton.addEventListener('click', function () {
        console.log(index)
        bagProducts.splice(index, 1)
        localStorage.setItem("bagProducts", JSON.stringify(bagProducts))
        window.location.href = "bagitems.html"
    })

    var flexdiv = document.createElement('div')
    flexdiv.setAttribute('class', 'flexdiv1')
    var largediv = document.createElement('div')
    image.setAttribute('src', elem.imgUrl)
    productname.textContent = elem.name;
    price.textContent = " " + "INR" + " " + elem.Price;
    smalldiv.append(productname, price)
    flexdiv.append(smalldiv, bagbutton)
    largediv.append(image, flexdiv)
    document.querySelector('#cartProducts').append(largediv)
})


var res = bagProducts.reduce(function (ac, cv) {
    return Number(ac) + Number(cv.Price)
}, 0);
document.querySelector('.amountbutton').textContent = res;
localStorage.setItem("totalamount", JSON.stringify(res))
var totalitemsinbag = bagProducts.length;
localStorage.setItem("baglength", JSON.stringify(totalitemsinbag))
document.querySelector('.paymentbutton').addEventListener('click', function () {
    window.location.href = "payment.html"
})



localStorage.setItem("Cart Products", JSON.stringify(products));
// var prod = JSON.parse(localStorage.getItem("Women's Products")) || [];
document.querySelector("#bag_count1").textContent = " " + " " + " " + "Cart Products" + " " + "(" + bagProducts.length + ")";