shoes = JSON.parse(localStorage.getItem("products"))||[];
display(shoes);

function display(data)
{
    data.forEach(function(elem)
    {
        var box =document.createElement("div")
        
        var image = document.createElement("img");
        image.setAttribute("src",elem.image);
        
        var jack = document.createElement("p");
        jack.innerText = elem.type;

        var jack1 = document.createElement("p");
        jack1.innerText = elem.price;

        var jack2 = document.createElement("p");
        jack2.innerText = elem.desc;

        var btn = document.createElement("button")
        btn.innerText="Remove Product";

        box.append(image,jack,jack1,jack2,btn);

        document.querySelector("#all_products").append(box);
    })
}