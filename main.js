let change_mode = document.querySelector(".change-mode");
let cycle_mode = document.querySelector(".cycle-mode");

change_mode.addEventListener("click", function (e) {
    if (document.body.className === "theme-light") {
        cycle_mode.style.cssText = "right: 43px;"
        document.body.className = `theme-${e.currentTarget.dataset.mode}`;
    } else {
        cycle_mode.style.cssText = "right: 5px;"
        document.body.className = `theme-light`;
    }
})

// ========================

function pigIt(str) {
    return str.split(" ").map((ele) => ele.slice(1) + ele[0] + "ay").join(" ")
}

console.log(pigIt("Pig latin is cool")) // igPay atinlay siay oolcay