var womensProduct = JSON.parse(localStorage.getItem("productDetails"));
//console.log(mensProduct);
var bagProducts = JSON.parse(localStorage.getItem("bagProducts")) || [];

displayProducts(womensProduct)

function displayProducts(elem) {
    womensProduct.filter(function (elem) {
        var div1 = document.createElement("div");
        div1.setAttribute("class", "imgCont")
        var img = document.createElement("img");
        img.setAttribute("src", elem.imgUrl);

        var div2 = document.createElement("div");
        div2.setAttribute("class", "desCont");
        var name = document.createElement("h1");
        name.textContent = elem.name;
        name.setAttribute("id", "name")
        var color = document.createElement("p");
        color.textContent = elem.color;
        color.setAttribute("id", "color")
        var price = document.createElement("h2");
        price.textContent = elem.Price;
        console.log(typeof (price))
        price.setAttribute("id", "price")
        var paraDes = document.createElement("p");
        paraDes.textContent = "(Inclusive of all taxes)";
        paraDes.setAttribute("id", "parades")
        var size = document.createElement("p");
        size.textContent = "Select Size";
        size.setAttribute("id", "size")


        //product description Box - size details
        var SizeBtnLabel = document.createElement("div");
        SizeBtnLabel.setAttribute("class", "sizeButtonlbl");
        // description Box - size button
        var SizeBtnOne = document.createElement("button");
        SizeBtnOne.setAttribute("class", "sizeButton");
        SizeBtnOne.textContent = elem.size[0];
        SizeBtnOne.onclick = function () {
            selectSize(SizeBtnOne, SizeBtnTwo,
                SizeBtnThree, SizeBtnFour);
        }
        // description Box - size button
        var SizeBtnTwo = document.createElement("button");
        SizeBtnTwo.setAttribute("class", "sizeButton");
        SizeBtnTwo.textContent = elem.size[1];
        SizeBtnTwo.onclick = function () {
            selectSize(SizeBtnTwo, SizeBtnOne,
                SizeBtnThree, SizeBtnFour);
        }
        // description Box - size button
        var SizeBtnThree = document.createElement("button");
        SizeBtnThree.setAttribute("class", "sizeButton");
        SizeBtnThree.textContent = elem.size[2];
        SizeBtnThree.onclick = function () {
            selectSize(SizeBtnThree, SizeBtnOne,
                SizeBtnTwo, SizeBtnFour);
        }
        // description Box - size button
        var SizeBtnFour = document.createElement("button");
        SizeBtnFour.setAttribute("class", "sizeButton");
        SizeBtnFour.textContent = elem.size[3];
        SizeBtnFour.onclick = function () {
            selectSize(SizeBtnFour, SizeBtnOne,
                SizeBtnTwo, SizeBtnThree);
        }


        var breakLine = document.createElement("br");
        var addtobagBtn = document.createElement("button");
        addtobagBtn.textContent = "Add To Bag";
        addtobagBtn.setAttribute("id", "bag");
        addtobagBtn.addEventListener("click", function () {
            addtobag(elem)
        });
        var buynowBtn = document.createElement("button");
        buynowBtn.textContent = "Buy Now";
        buynowBtn.setAttribute("id", "buy");
        buynowBtn.addEventListener('click', function () {
            window.location.href = "payment.html"
        })
        var details = document.createElement("p");
        details.textContent = "Free Deleivery and Return";
        details.setAttribute("id", "delDetails")

        SizeBtnLabel.append(SizeBtnOne, SizeBtnTwo, SizeBtnThree, SizeBtnFour);
        div1.append(img);
        div2.append(name, color, price, paraDes, size, SizeBtnLabel, addtobagBtn, breakLine, buynowBtn, details);

        document.querySelector(".container").append(div1, div2)

    });

}
function addtobag(elem) {
    bagProducts.push(elem);
    alert("Your Product added to bag succesfully");
    localStorage.setItem("bagProducts", JSON.stringify(bagProducts))
}

var btnCount = 0;
function selectSize(p, a, b, c) {

    p.setAttribute("class", "sizeButtonClicked");
    a.setAttribute("class", "sizeButton");
    b.setAttribute("class", "sizeButton");
    c.setAttribute("class", "sizeButton");

    var sizeArr = womensProduct.filter(function (el) {
        // if(el.size == p.textContent){
        el.size = p.textContent;
        // console.log(el.size);
        btnCount++;
        // }
    });

    displayProducts(sizeArr);
}
