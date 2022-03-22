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

const dbProduct = [
  new Product('SKU-1-126374', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png', 'Oreo', 'Food', 25, 7500),
  new Product('SKU-2-198374', 'https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2021/12/20/917461cb-13f8-46b1-bb80-34f35688a10f.jpg', 'Pocari', 'Food', 50, 10000),
];

function printProduct() {
  document.getElementById('table-list').innerHTML = dbProduct.map((value, index) => `<tr>
        <td>${value.sku}</td>
        <td><img src="${value.img}" width = 100></td>
        <td id="productName${index}">${value.name}</td>
        <td>${value.category}</td>
        <td id="productStock${index}">${value.stock.toLocaleString()}</td>
        <td id="productPrice${index}">IDR ${value.price.toLocaleString()}</td>
        <td id="productButton${index}"><button type="button" onClick="handleEdit(${index})">Edit</button>
        <button type="button" onClick="handleDelete(${index})">Delete</button></td>
        </tr>`).join('');
}

function getElementById(id) {
  return document.getElementById(id);
}

function handleSubmit() {
  const data = document.getElementById('form-product');
  const SKU = `SKU-${dbProduct.length + 1}-${Math.floor(Math.random() * 999999)}`;

  let image = getElementById('img-product').value;
  let productName = getElementById('name-product').value;
  let productStock = getElementById('stock-product').value;
  let productPrice = getElementById('price-product').value;
  let productCategory = getElementById('category-product').value;

  if (image == '' || productName == '' || productStock == 0 || productPrice == 0 || productCategory == 'null') {
    alert('Data yang dimasukkan tidak lengkap');
  } else {
    dbProduct.push(new Product(SKU, image, productName, productCategory, parseInt(productStock), parseInt(productPrice)));

    image = null;
    productName = null;
    productStock = null;
    productPrice = null;
    productCategory = null;
  }

  printProduct();
}

function handleDelete(index) {
  if (confirm('Apakah anda yakin mau menghapus')) {
    dbProduct.splice(index, 1);
    printProduct();
  }
}

function handleEdit(index) {
  // Potat prints da product
  printProduct();

  const idProductName = `productName${index}`;
  const idProductStock = `productStock${index}`;
  const idProductPrice = `productPrice${index}`;
  const idProductButton = `productButton${index}`;

  // The inputs to edit the table
  const inputs = {
    newProduct: `<input id="newProductName${index}" type="text" placeholder="${dbProduct[index].name}">`,
    newProductStock: `<input id="newProductStock${index}" type="number" placeholder="${parseInt(dbProduct[index].stock).toLocaleString()}">`,
    newProductPrice: `<input id="newProductPrice${index}" type="number" placeholder="IDR ${parseInt(dbProduct[index].price).toLocaleString()}">`,
  };

  // The acctions for the tablet edit
  const buttons = {
    cancel: `<button type="button" onClick="handleCancel(${index})">Cancel</button>`,
    save: `<button type="button" onClick="handleSave(${index})">Save</button>`,
  };

  // Assign inputs to edit new values
  document.getElementById(idProductName).innerHTML = inputs.newProduct;
  document.getElementById(idProductStock).innerHTML = inputs.newProductStock;
  document.getElementById(idProductPrice).innerHTML = inputs.newProductPrice;
  document.getElementById(idProductButton).innerHTML = `${buttons.save} ${buttons.cancelButton}`;
}

function handleSave(index) {
  const data = document.getElementById('form-product');
  const productName = data.elements[1].value;
  const productStock = data.elements[2].value;
  const productPrice = data.elements[3].value;
  const idProductButton = `productButton${index}`;

  dbProduct[index].name = productName;
  dbProduct[index].stock = parseInt(productStock);
  dbProduct[index].price = parseInt(productPrice);

  document.getElementById(idProductButton).innerHTML = `<button type="button" onClick="handleEdit(${index})">Edit</button>
    <button type="button" onClick="handleDelete(${index})">Delete</button>`;

  printProduct();
}

printProduct();
