let b1 = document.getElementById("btn-1");
let b2 = document.getElementById("btn-2");
let b3 = document.getElementById("btn-3");


function ri() {
    if (b1.checked) {
        b1.removeAttribute("checked");
        b2.setAttribute("checked", "checked");
    }
    else if (b2.checked) {
        b2.removeAttribute("checked");
        b3.setAttribute("checked", "checked");
    }
}

function le() {
    if (b2.checked) {
        b2.removeAttribute("checked");
        b1.setAttribute("checked", "checked");
    }
    else if (b3.checked) {
        b3.removeAttribute("checked");
        b2.setAttribute("checked", "checked");
    }
}

function tim() {
    if (b1.checked) {
        b1.removeAttribute("checked");
        b2.setAttribute("checked", "checked");
    }
    else if (b2.checked) {
        b2.removeAttribute("checked");
        b3.setAttribute("checked", "checked");
    }
    else if (b3.checked) {
        b3.removeAttribute("checked");
        b1.setAttribute("checked", "checked");
    }
}

setInterval(tim, 5000);