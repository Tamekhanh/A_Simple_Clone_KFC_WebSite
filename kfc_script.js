
let mybutton = document.getElementById("to-top-btn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop>20 || document.documentElement.scrollTop>20) {
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

let mybutton_navbar_r = document.getElementById("btn-to-right");
let mybutton_navebar_l = document.getElementById("btn-to-left");
let navbar_list = document.querySelector(".cate-chose-ls");

function clickscrollx (a) {
    console.log("scroll to " + a);
    let scrollto = navbar_list.querySelector(`.${a}`);
    if (scrollto) {
        scrollto.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        console.error("Element not found: " + a);
    }
}
let contain_list = document.querySelector(".sub-container");
function clickscrollcontaint (a) {
    console.log("scroll to " + a);
    let scrollto = document.getElementById(a);
    if (scrollto) {
        //calculate element position
        let elementPosition = scrollto.getBoundingClientRect().top + window.scrollY - 170;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
    } else {
        console.error("Element not found: " + a);
    }
}