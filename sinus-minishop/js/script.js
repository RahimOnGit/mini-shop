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
for(p of allP)
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
document.querySelector(".logo").classList.remove("logo");


//12

let about = document.createElement("a");
about.innerText = "about";
nav_elements[2].appendChild(about);
console.log(nav)


