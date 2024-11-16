// Code here!
let nav_elements = document.querySelectorAll("nav a")
nav_elements[0].innerText = "Start";
nav_elements[2].innerText = "Mail Us";
console.log(nav_elements);

let info_art2 = document.querySelector(".art-2 p")
info_art2.innerText = "Vibrant red that grabs attention.Making it perfect for standing out or adding energy to your outfit."
//5
let button_art2 = document.querySelector(".art-2 button")
button_art2.style.backgroundColor = "red";

//another way 

// {
//     let button1  = document.getElementById("btn1")

//     button1.style.cssText = "background-color : red;"
//     button1.style.backgroundColor
    
// }



let hoodie_background = document.querySelector("main article figure")
console.log(hoodie_background)

    hoodie_background.style.backgroundColor = "white";
    
    //change color to all of them

//  hoodie_background = document.querySelectorAll("main article figure")
// console.log(hoodie_background)
// for(hoodie of hoodie_background)
// {
//     hoodie.style.backgroundColor = "white";

// } 



//7
let title = document.querySelector("title");
title.innerText = "Sinus";


//8
let allP = document.querySelectorAll("p");
for(let p of allP)
{
    p.style.color = "grey"
}

//9
let allButtons = document.querySelectorAll("button")
for(button of allButtons)
{
    button.innerText = "Add to cart";
}

//10
nav_elements[0].classList.add("active");
//11

//document.querySelector(".logo").classList.remove("logo");


//12

let about = document.createElement("a");
about.innerText = "about";
nav_elements[2].appendChild(about);
console.log(nav_elements)




// const product  = {

// newImage : function(src="")
// {
// let img = document.createElement("img");
// img.setAttribute("src",src);
// }

// ,newH2 :function()
// {
//     let h2 = document.createElement("h2");
// h2.innerText = "Sinus Hoodie"

// }


// }



//13
let img = document.createElement("img");
img.setAttribute("src","img/hoodie-forrest.png");

let h2 = document.createElement("h2");
h2.innerText = "Sinus Hoodie"

let h3 = document.createElement("h3");
h3.innerText = "forrest"

let p = document.createElement("p");
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores."

let b = document.createElement("button");
b.innerText = "add to cart";

let art4 = document.createElement("article");
art4.classList.add("art-4")



let fig = document.createElement("figure");


let main = document.querySelector("main");

main.appendChild(art4);
art4.appendChild(fig);

fig.insertAdjacentElement("afterbegin",img);
art4.insertAdjacentElement("beforeend",h2);
art4.insertAdjacentElement("beforeend",h3);
art4.insertAdjacentElement("beforeend",p);
art4.insertAdjacentElement("beforeend",b);





document.querySelector(".logo").addEventListener("click",function()
{
console.log("found you");

});



document.querySelector(".art-1").addEventListener("click",function()
{
console.log("Hi i'm article Ash");
});

document.querySelector(".art-2").addEventListener("click",function()
{
console.log("Hi i'm article Fire")
});

document.querySelector(".art-3").addEventListener("click",function()
{
console.log("Hi i'm article Water")
});

document.querySelector(".art-4").addEventListener("click",function()
{
console.log("Hi i'm article Forrest")
});

