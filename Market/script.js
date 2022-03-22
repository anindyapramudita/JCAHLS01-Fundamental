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

let dbProduct = [
    new Product("SKU-1-126374", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png", "Oreo", "Food", 25, 7500),
    new Product("SKU-2-198374", "https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2021/12/20/917461cb-13f8-46b1-bb80-34f35688a10f.jpg", "Pocari", "Food", 50, 10000)
];

let selectedIndex = null;

function printProduct() {
    document.getElementById("table-list").innerHTML = dbProduct.map((value, index) => {
        if (selectedIndex == index) {
            return `<tr>
            <td>${value.sku}</td>
            <td><img src="${value.img}" width = 100></td>
            <td><input type="text" id ="new-name" value="${value.name}"/></td>
            <td>${value.category}</td>
            <td><input type="text" id ="new-name" value="${value.stock.toLocaleString()}"/></td>
            <td><input type="text" id ="new-name" value="IDR ${value.price.toLocaleString()}"/></td>
            <td><button type="button" onClick="handleSave()">Save</button>
            <button type="button" onClick="handleCancel()">Cancel</button></td>
            </tr>`
        } else {
            return `<tr>
        <td>${value.sku}</td>
        <td><img src="${value.img}" width = 100></td>
        <td>${value.name}</td>
        <td>${value.category}</td>
        <td>${value.stock.toLocaleString()}</td>
        <td>IDR ${value.price.toLocaleString()}</td>
        <td><button type="button" onClick="handleEdit(${index})">Edit</button>
        <button type="button" onClick="handleDelete(${index})">Delete</button></td>
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
        dbProduct.splice(index, 1);
        printProduct();
    }
}

function handleEdit(index) {
    selectedIndex = index;
    printProduct();

    // let idProductName = "name-" + index;
    // let idProductStock = "stock-" + index;
    // let idProductPrice = "price-" + index;
    // document.getElementById(idProductName).innerHTML = `<input type="text" />`; 
    // document.getElementById(idProductStock).innerHTML = `<input type="number"></input>`;
    // document.getElementById(idProductPrice).innerHTML = `<input type="number"></input>`; 
    // document.getElementById(idProductName).innerHTML = `<input id="productName-${index}" type="text"></input>`;
    // document.getElementById(idProductStock).innerHTML = `<input id="productStock-${index}" type="number"></input>`;
    // document.getElementById(idProductPrice).innerHTML = `<input id="productPrice-${index}" type="number"></input>`;
    // document.getElementById(idProductName).innerHTML = `<input id="productName-${index}" type="text" placeholder="${dbProduct[index].name"></input>`;
    // document.getElementById(idProductStock).innerHTML = `<input id="productStock-${index}" type="number" placeholder="${parseInt(dbProduct[index].stock)}"></input>`;
    // document.getElementById(idProductPrice).innerHTML = `<input id="productPrice-${index}" type="number" placeholder="${parseInt(dbProduct[index].price)}"></input>`;
    printProduct();
}

printProduct();