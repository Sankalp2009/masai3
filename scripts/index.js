//store the products array in localstorage as "products"
function King(typ,des,pri,img)
{
    this.type = typ
    this.desc = des
    this.price = pri
    this.image = img
}

function Kong()
{
    event.preventDefault();
    let form1 = document.getElementById("products");
    let type = form1.type.value;
    let desc = form1.desc.value;
    let price = form1.price.value;
    let image = form1.image.value;


let reebok = new King(type,desc,price,image)
console.log(reebok)
var shoes = JSON.parse(localStorage.getItem("products"))||[];

shoes.push(reebok);
console.log(shoes);
console.log(type,desc,price,image)
localStorage.setItem("products",JSON.stringify(shoes));
}