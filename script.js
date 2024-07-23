const menulist = document.querySelector("ul")
menulist.style.maxHeight = "0px";

function toggleMenu() {
    if( menulist.style.maxHeight == "0px")
    {
        menulist.style.maxHeight = "300px";
    }
    else{
        menulist.style.maxHeight = "0px";
    }
}