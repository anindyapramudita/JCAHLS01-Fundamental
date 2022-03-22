let database = [
    {
        idproduct: 1,
        name: "Hoodie",
        stock: 12,
        price: 75000
    },
    {
        idproduct: 2,
        name: "Sepatu",
        stock: 10,
        price: 80000
    }
];

let cart = [
    {
        iduser: 1,
        user: "budi",
        keranjang: [
            {
                idproduct: 2,
                qty: 2,
                subtotal: 160000
            },
            {
                idproduct: 1,
                qty: 2,
                subtotal: 150000
            },
        ]
    },
    {
        iduser: 2,
        user: "Edo",
        keranjang: [
            {
                idproduct: 1,
                qty: 1,
                subtotal: 75000
            },
        ]
    },
    {
        iduser: 3,
        user: "Edi",
        keranjang: [
            {
                idproduct: 2,
                qty: 5,
                subtotal: 400000
            },
        ]
    }
]
const getReport = (database, cart) => {

    class Purchase {
        constructor(_idproduct, _name, _stock, _price, _salesQty, _omset, _totalStock) {
            this.idproduct = _idproduct
            this.name = _name
            this.stock = _stock
            this.price = _price
            this.salesQty = _salesQty
            this.omset = _omset
            this.totalStock = _totalStock
        }
    }

    let report = [];



    for (let i = 0; i < database.length; i++) {
        
        let productQty = 0;

        for (let j = 0; j < cart.length; j++) {
            for (let k = 0; k < cart[j].keranjang.length; k++) {
                if (database[i].idproduct == cart[j].keranjang[k].idproduct) {
                    productQty += cart[j].keranjang[k].qty
                }
            }
        }

        let productOmset = productQty * database[i].price;
        let productStock = database[i].stock - productQty;


        report.push(new Purchase(database[i].idproduct, database[i].name, productStock, database[i].price, productQty, productOmset, database[i].stock))
    }

    return report;

}

console.log(getReport(database, cart))