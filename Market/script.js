class Product {
    constructor(_sku, _img, _name, _category, _stock, _price) {
        this.sku = _sku;
        this.img = _img;
        this.name = _name;
        this.category = _category;
        this.stock = _stock;
        this.price = _price;
    }
}

class Cart extends Product {
    constructor(_sku, _img, _name, _price, _qty) {
        super(_sku, _img, _name, null, null, _price)
        this.qty = _qty;
        this.subTotal = _price * _qty
    }
}

class PurchasedList {
    constructor(_username, _date, _totalPayment, _change, _detail) {
        this.username = _username;
        this.date = _date;
        this.totalPayment = _totalPayment;
        this.change = _change;
        this._detail = _detail;
    }
}

let dbProduct = [
    new Product("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png", "Oreo", "Food", 25, 7500),
    new Product("SKU-2-198374", "https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2021/12/20/917461cb-13f8-46b1-bb80-34f35688a10f.jpg", "Pocari", "Drink", 50, 10000)
];

let dbCart = [
    new Cart("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png", "Oreo", 7500, 3)
];

let dbPurchaseList = [];

let selectedIndex = null;
let filter = [];

function printProduct(data = dbProduct) {
    document.getElementById("table-list").innerHTML = data.map((value, index) => {
        if (selectedIndex == index) {
            return `<tr>
            <td>${value.sku}</td>
            <td><img src="${value.img}" width = 100></td>
            <td><input type="text" id ="new-name" value="${value.name}"/></td>
            <td>${value.category}</td>
            <td><input type="text" id ="new-stock" value="${value.stock.toLocaleString()}"/></td>
            <td><input type="text" id ="new-price" value="${value.price}"/></td>
            <td><button type="button" onClick="handleSave('${value.sku}')">Save</button>
            <button type="button" onClick="handleCancel()">Cancel</button></td>
            </tr>`
        }
        else {
            return `<tr>
            <td>${value.sku}</td>
            <td><img src="${value.img}" width = 100></td>
            <td>${value.name}</td>
            <td>${value.category}</td>
            <td>${value.stock.toLocaleString()}</td>
            <td>IDR ${value.price.toLocaleString()}</td>
            <td><button type="button" onClick="handleEdit(${index})">Edit</button>
            <button type="button" onClick="handleDelete(${index})">Delete</button></td>
            <td><button type="button" onClick="handleBuy('${value.sku}')">🛒Buy</button></td>
            </tr>`
        }
    }).join("")

}

function handleSubmit() {
    let data = document.getElementById("form-product")
    let SKU = `SKU-${dbProduct.length + 1}-${Math.floor(Math.random() * 999999)}`;
    let image = data.elements[0].value;
    let productName = data.elements[1].value;
    let productStock = data.elements[2].value;
    let productPrice = data.elements[3].value;
    let productCategory = data.elements[4].value;

    if (image == "" || productName == "" || productStock == 0 || productPrice == 0 || productCategory == "null") {
        alert(`Data yang dimasukkan tidak lengkap`)
    } else {
        dbProduct.push(new Product(SKU, image, productName, productCategory, parseInt(productStock), parseInt(productPrice)))

        data.elements[0].value = null;
        data.elements[1].value = null;
        data.elements[2].value = null;
        data.elements[3].value = null;
        data.elements[4].value = null;

    }

    printProduct();
}

function handleDelete(index) {
    if (confirm("Apakah anda yakin mau menghapus?")) {
        if (filter.length > 0) {
            dbProduct = dbProduct.filter((value, idx) => dbProduct[idx].name !== filter[index].name)
            filter.splice(index, 1);
            printProduct(filter)
        } else {
            dbProduct.splice(index, 1)
            printProduct();
        }
    }
}

function handleEdit(index) {
    selectedIndex = index;
    if (filter.length > 0) {
        printProduct(filter);
        // filter = [];
    } else {
        printProduct();
    }
}

function handleSave(sku) {

    let index = dbProduct.findIndex((value) => value.sku == sku)
    dbProduct[index].name = document.getElementById("new-name").value
    dbProduct[index].stock = document.getElementById("new-stock").value
    dbProduct[index].price = parseInt(document.getElementById("new-price").value)


    selectedIndex = null;
    if (filter.length > 0) {
        filter = dbProduct.filter((value) => value.sku == sku)
        printProduct(filter);
        filter = [];
    } else {
        printProduct();
    }
}

function handleCancel() {
    selectedIndex = null;

    printProduct();
}

printProduct();

/////////////////////////////////////////// Filter Product ///////////////////////////////////////////

function handleSearch() {
    let data = document.getElementById("form-filter")
    let byName = data.elements[0].value
    let byMin = data.elements[1].value
    let byMax = data.elements[2].value
    let byCategory = data.elements[3].value

    filter = dbProduct.filter((value, index) => {
        return (value.name.toLowerCase().includes(byName.toLowerCase()) || byName == "") && (value.category == byCategory || byCategory == "null") && (value.price >= parseInt(byMin) || byMin == "") && (value.price <= parseInt(byMax) || byMax == "");
    })

    printProduct(filter);

}

function handleReset() {
    let data = document.getElementById("form-filter")

    data.elements[0].value = null;
    data.elements[1].value = null;
    data.elements[2].value = null;
    data.elements[3].value = null;

    printProduct();
}

/////////////////////////////////////////// Manage Transaction  ///////////////////////////////////////////

let total = 0;

function printCart() {
    total = 0;
    let htmlElement = dbCart.map((value, index) => {
        total += value.subTotal;
        return `<tr>
        <td>${index + 1}</td>
        <td>${value.sku}</td>
        <td><img src="${value.img}" width = 100></td>
        <td>${value.name}</td>
        <td>IDR ${value.price.toLocaleString()}</td>
        <td>${value.qty}</td>
        <td>IDR ${value.subTotal.toLocaleString()}</td>
        <td><button type="button" onClick="handleDeleteCart('${value.sku}')">Delete</button></td>
        </tr>`
    })
    document.getElementById("cart-list").innerHTML = htmlElement.join("");
    document.getElementById("totalPrice").innerHTML = `Rp. ${total.toLocaleString()}`;

    // totalPayment();
}

printCart();

function handleBuy(sku) {
    // let index = dbCart.findIndex((value) => value.sku == sku)
    let indexCart = dbCart.findIndex((value) => value.sku == sku);
    let indexProduct = dbProduct.findIndex((value) => value.sku == sku);

    if (indexCart >= 0) {
        if (dbProduct[indexProduct].stock > 0) {
            dbCart[indexCart].qty += 1;
            dbProduct[indexProduct].stock -= 1;
        } else {
            alert(`Jumlah yang anda masukkan melebihi stock`)
        }
        dbCart[indexCart].subTotal = dbCart[indexCart].price * dbCart[indexCart].qty;
    } else {
        dbCart.push(new Cart(dbProduct[indexProduct].sku, dbProduct[indexProduct].img, dbProduct[indexProduct].name, dbProduct[indexProduct].price, 1))
        dbProduct[indexProduct].stock -= 1;
    }

    printProduct();
    printCart();
}

function handleDeleteCart(sku) {
    let indexCart = dbCart.findIndex((value) => value.sku == sku);
    let indexProduct = dbProduct.findIndex((value) => value.sku == sku);

    if (dbCart[indexCart].qty > 1) {
        dbCart[indexCart].qty -= 1;
        dbCart[indexCart].subTotal = dbCart[indexCart].price * dbCart[indexCart].qty;
    } else {
        dbCart.splice(indexCart, 1)
    }
    dbProduct[indexProduct].stock += 1;

    printCart();
    printProduct();

}

// let totalPrice = 0;

function handleCheckout() {
    for (let i = 0; i < dbCart.length; i++) {
        totalPrice += dbCart[i].subTotal
    }

    document.getElementById("payment-details").innerHTML = `
    <p>Total Price: IDR ${totalPrice.toLocaleString()}</p>
    <div id="change-details">
    <p>Total Money:</p>
    <input id="totalMoney" type="number"></input>
    </div>
    <br>
    <button type="button" onclick="handlePay()">Pay</button>
    `
}


// function totalPayment() {
//     // for (let i = 0; i < dbCart.length; i++) {
//         //     total += dbCart[i].subTotal
//         // }

//     let total = 0;
//     dbCart.forEach(val => total += val.subTotal);

//     document.getElementById("totalPrice").innerHTML = `Rp. ${total.toLocaleString()}`
// }

const date = new Date()
const datePurchase = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
let turnover = 0;

function printTransaction() {
    document.getElementById("transactionDetails").innerHTML = dbPurchaseList.map((value, index) => {
        return `
        <tr>
        <td>${value.username}</td>
        <td>${datePurchase}</td>
        <td>Rp. ${(value.totalPayment - value.change).toLocaleString()}</td>
        </tr>
        `
    }).join("")

    document.getElementById("turnover").innerHTML = `<p>Turnover: Rp. ${turnover.toLocaleString()}</p>`
}

function handleCancel() {
    for (let i = 0; i < dbCart.length; i++) {
        let index = dbProduct.findIndex(value => value.sku == dbCart[i].sku)
        dbProduct[index].stock += dbCart[i].qty;
    }

    dbCart = [];
    printProduct();
    printCart();
}

function handlePay() {

    let totalMoney = parseInt(document.getElementById("totalMoney").value)
    let count = totalMoney - total;

    if (count < 0) {
        alert(`your money is insufficient`)
    } else if (count >= 0) {
        turnover += total;

        dbPurchaseList.push(new PurchasedList(document.getElementById("username").value, datePurchase, totalMoney, count, dbCart))

        printTransaction();

        document.getElementById("totalMoney").value = null;
        document.getElementById("username").value = null;
        total = 0;
        dbCart = [];
    }




    printCart();
}