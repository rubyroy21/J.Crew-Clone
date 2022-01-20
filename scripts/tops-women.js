var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}


// Product page functionality

var products =
    [
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BD535_YD0447_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Relaxed-fit flannel shirt in lavender plaid",
            color: "Natural",
            Price: 11173,
            size: ["S", "M", "L", "XL"],
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/AW686_PR5609_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Classic-fit Cozy gauzy shirt",
            color: "white",
            Price: 11173,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/AW686_BR6404_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Classic-fit Cozy gauzy shirt",
            color: "Other",
            Price: 11173,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/AW686_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Classic-fit Cozy gauzy shirt",
            color: "White",
            Price: 11173,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/AW686_GR6954_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Classic-fit Cozy gauzy shirt",
            color: "Other",
            Price: 11173,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BG253_YD0030_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Classic-fit Cozy gauzy shirt in vertical stripe",
            Price: 12234,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BG314_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Longe-sleeve smocked gauze top",
            color: "Black",
            Price: 12234,
            size: ["S", "M", "L", "XL"]
        },

        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BG314_GR6954_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Longe-sleeve smocked gauze top",
            color: "Green",
            Price: 12234,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BG314_WT0002_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Longe-sleeve smocked gauze top",
            color: "White",
            Price: 12234,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BG077_DM6041_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Slim-fit western chambray shirt in light wash",
            color: "Denim",
            Price: 8676,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BG079_DM6040_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Classic-fit western chambray shirt in rinse wash",
            color: "Denim",
            Price: 8676,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BE570_DM5678_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Puff-sleeve chambray smocked top",
            color: "Denim",
            Price: 8676,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BE018_PT0516_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Puff-sleeve top in Liberty Elm House Floral",
            color: "Other",
            Price: 11173,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BE017_PT0517_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Relaxed-fit quilted shirt-jacket in Liberty Morris print",
            color: "Other",
            Price: 24907,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BD763_YD0510_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Relaxed-fit washed cotton poplin shirt in navy stripe",
            color: "White",
            Price: 6197,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BD767_YD0509_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Classic fit poplin shirt",
            color: "Natural",
            Price: 9924,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BD767_YD0508_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Classic fit poplin shirt",
            color: "Blue",
            Price: 9924,
            size: ["S", "M", "L", "XL"]
        },

        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/AW694_BL8133_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Classic fit poplin shirt",
            color: "Blue",
            Price: 11173,
            size: ["S", "M", "L", "XL"]
        },

        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BD772_WT0002?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Cotton poplin shirt with feather trim",
            color: "White",
            Price: 24716,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BD792_NA6858_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Pleated ruffle top in crinkle chiffon",
            color: "Natural",
            Price: 14354,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BD805_WY8580_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Scalloped top in stripe",
            color: "Blue",
            Price: 24904,
            size: ["S", "M", "L", "XL"]
        },

        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/AW435_BR6712_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Classic silk fit shirt",
            color: "Brown",
            Price: 16166,
            size: ["S", "M", "L", "XL"]
        },
        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/AW206_DM5229_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Chambray shirt",
            color: "Black",
            Price: 8676,
            size: ["S", "M", "L", "XL"]
        },

        {
            imgUrl: "https://www.jcrew.com/s7-img-facade/BB257_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
            name: "Washable silk charmeuse camisole top",
            color: "Black",
            Price: 12234,
            size: ["S", "M", "L", "XL"]
        },
    ]


//  moving datas to local storage   
localStorage.setItem("Women's Products", JSON.stringify(products));
// var prod = JSON.parse(localStorage.getItem("Women's Products")) || [];
document.querySelector("#bag_count").textContent = " " + " " + " " + "Women's Clothing" + " " + "(" + products.length + ")";
displayItem(products)
// this function will clear all the filtered item to back its original position



function sortPrice() {
    //console.log("Here")
    var selected = document.querySelector("#select").value;
    //console.log(selected)
    if (selected == "low")
        products.sort(function (a, b) {
            return a.Price - b.Price
        })
    //console.log(products)
    if (selected == "high")
        products.sort(function (a, b) {
            return b.Price - a.Price
        })
    displayItem(products)
}
function displayItem(products) {

    document.querySelector("#productDisplay").textContent = "";

    products.map(function (elem) {

        var div = document.createElement("div");
        div.addEventListener("click", show_prod);


        var image = document.createElement("img");
        image.setAttribute("src", elem.imgUrl);
        image.style.height = "340px";
        image.style.width = "100%";
        var name = document.createElement("h3");
        name.textContent = elem.name;
        var color = document.createElement("p");
        color.textContent = "1 color";
        color.style.paddingLeft = "2%";
        color.style.marginTop = "0%";
        color.style.marginBottom = "1%"
        color.addEventListener("click", show_color);

        function show_color(event) {
            //console.log("here");
            color.textContent = elem.color;
        }

        var price = document.createElement("h3");
        price.textContent = "INR" + " " + elem.Price;

        document.querySelector("#productDisplay").append(div);
        div.append(image, name, color, price)
        function show_prod(event) {
            console.log("here");
            productDetails(elem)
        }
        // div.onclick = function (elem) {

        //     productDetails(elem)
        // }
        // parent.append(div);

    })


    function productDetails(elem) {

        //var productPage = JSON.parse(localStorage.getItem("Men's Products"));

        var productPage = [];

        productPage.push(elem);
        // console.log(productPage)
        localStorage.setItem("productDetails", JSON.stringify(productPage));

        window.location.href = "womens-description.html";
    }

}
