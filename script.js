// let loc = document.querySelector(".block")
// let card = document.querySelector("button")
// card.style.background = "white"
// card.style.border = "2px solid black"
// card.style.fontSize = "30px"
// card.style.width = "230px"
// card.style.height = "40px"
// card.style.borderRadius = "20px"
// card.style.color = "white"
// card.style.color = "black"
// card.style.marginTop = "50px"
// loc.style.width = "500px"
// loc.style.height = "500px"
// loc.style.background = "red"
// loc.style.marginTop = "50px"
// loc.style.borderRadius = "20px"
// loc.style.opacity = "0"
// card.addEventListener("click", () => {
//     if (loc.style.opacity === "0") {
//         loc.style.display = "block"
//         loc.style.transform ="scale(1.1)"
//         loc.style.transition = "3s"
//      } else {
//         loc.style.opacity = "1"
//      }
// })
// card.addEventListener("click", () => {
//     if (loc.style.opacity === "0") {
//       loc.style.opacity = "1"
//       loc.style.transform = "scale(1)"
//     } else {
//       loc.style.opacity = "0"
//       loc.style.transform = "scale(0.1)"
//     }
//   })

let plus = document.querySelector(".plus button");
let minus = document.querySelector(".minus button");
let kill = document.querySelector(".min button");
let h = document.querySelector(".h1");
let count = 0;
plus.style.border = "none";
plus.style.width = "60px";
plus.style.height = "60px";
plus.style.background = "blue";
plus.style.color = "white";
plus.style.fontSize = "50px";
plus.style.cursor = "pointer";
minus.style.border = "none";
minus.style.cursor = "pointer";
minus.style.width = "60px";
minus.style.height = "60px";
minus.style.background = "red";
minus.style.color = "white";
minus.style.fontSize = "50px";
plus.addEventListener("click", () => {
    count++;
    h.innerHTML = count;
})
minus.addEventListener("click", () => {
    count--;
    if (count < 0) {
        count = 0;
    }
    h.innerHTML = count;
})
kill.addEventListener("click", () => {
    count = 0;
    h.innerHTML = count;
})





