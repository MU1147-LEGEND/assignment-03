window.onresize = function(){
    let screenWidth = window.screen.width;
    let cssVar = document.querySelector(":root");
    cssVar.style.setProperty("--phone-max-width", `${screenWidth}px`)
}

document.addEventListener("DOMContentLoaded",function(){
    cssVar.style.setProperty("--phone-max-width", `${screenWidth}px`)
})