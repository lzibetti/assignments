var box = document.getElementById("box");
//var boxColor = document.getElementById("box").style.backgroundColor;

function handleDblClick () {
    box.style.backgroundColor= "green";
}

function handleScroll () {
    box.style.backgroundColor= "orange";
}

function handleMouseOver () {
    box.style.backgroundColor= "blue";
}

function handleMouseOut () {
    box.style.backgroundColor= "";
}

function handleMouseDown () {
    box.style.backgroundColor= "red";
}

function handleMouseUp () {
    box.style.backgroundColor= "yellow";
}

box.addEventListener("dblclick", handleDblClick);
box.addEventListener("mouseover", handleMouseOver);
box.addEventListener("mouseout", handleMouseOut);
box.addEventListener("mousedown", handleMouseDown);
box.addEventListener("mouseup", handleMouseUp);
document.addEventListener("wheel", handleScroll);
