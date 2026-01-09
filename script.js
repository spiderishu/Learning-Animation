// // let modebtn = document.querySelector("#Mode");
// // let currmode = "light";
// // let body = document.querySelector("body");

// // modebtn.addEventListener("click",() => {
// //     if(currmode === "light"){
// //         currmode = "dark";
// //         body.classList.add("dark");
// //         body.classList.remove("light");
// //     }else{
// //         currmode = "light";
// //         body.classList.add("light");
// //         body.classList.remove("dark");

// //     }
// //     console.log(currmode);
// // })
// // let modebtn = document.querySelector("#Mode");
// // let body = document.querySelector("body");

// // modebtn.addEventListener("click", () => {
// //     body.classList.toggle("dark");
// // });
// // get body
// let body = document.body;

// // get all circles
// let c1 = document.querySelector(".circle1");
// let c2 = document.querySelector(".circle2");
// let c3 = document.querySelector(".circle3");
// let c4 = document.querySelector(".circle4");
// let c5 = document.querySelector(".circle5");
// let c6 = document.querySelector(".circle6");
// let c7 = document.querySelector(".circle7");
// let c8 = document.querySelector(".circle8");

// // hover effects
// c1.onmouseenter = function () {
//     body.style.backgroundColor = "lightseagreen";
// };

// c2.onmouseenter = function () {
//     body.style.backgroundColor = "red";
// };

// c3.onmouseenter = function () {
//     body.style.backgroundColor = "blue";
// };

// c4.onmouseenter = function () {
//     body.style.backgroundColor = "yellow";
// };

// c5.onmouseenter = function () {
//     body.style.backgroundColor = "pink";
// };

// c6.onmouseenter = function () {
//     body.style.backgroundColor = "lightcoral";
// };

// c7.onmouseenter = function () {
//     body.style.backgroundColor = "darkgoldenrod";
// };

// c8.onmouseenter = function () {
//     body.style.backgroundColor = "aquamarine";
// };
// // get body (declare ONCE)
// // let body = document.body;

// // get all circles
// let circles = document.querySelectorAll(".lights div");

// // loop through each circle
// for (let i = 0; i < circles.length; i++) {

//     // when mouse enters
//     circles[i].onmouseenter = function () {

//         // get background color of that circle
//         let color = circles[i].style.backgroundColor;

//         // change page background
//         body.style.backgroundColor = color;

//         // reset all borders to black
//         for (let j = 0; j < circles.length; j++) {
//             circles[j].style.borderColor = "black";
//         }

//         // set border color same as circle color
//         circles[i].style.borderColor = color;
//     };
// }


// get body ONCE
// get body ONCE
let body = document.body;

// get all circles
let circles = document.querySelectorAll(".lights div");

// loop through circles
for (let i = 0; i < circles.length; i++) {

    circles[i].addEventListener("mouseenter", function () {

        // get color FROM CSS (IMPORTANT FIX)
        let color = window.getComputedStyle(circles[i]).backgroundColor;

        // change screen background
        body.style.backgroundColor = color;

        // reset all borders
        for (let j = 0; j < circles.length; j++) {
            circles[j].style.borderColor = "black";
        }

        // change border of hovered circle
        circles[i].style.borderColor = color;
    });
}


