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

function moveZeros(arr) {
    let first = arr.filter((ele) => ele === 0);
    let second = arr.filter((ele) => ele !== 0);
    return [...second, ...first]
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])) //[false , 1,1,2,1,3,"a",0,0]