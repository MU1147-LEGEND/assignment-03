var screenWidth = window.screen.width;
var cssVar = document.querySelector(":root");
cssVar.style.setProperty("--max-w", `${screenWidth-150}px`);

window.onresize = function(){
    
    var screenWidth = window.screen.width;
    var cssVar = document.querySelector(":root");
    
    if (screenWidth > 480){
        console.log(screenWidth)
        cssVar.style.setProperty("--max-w", `${screenWidth-150}px`);
    }else{
        console.log(screenWidth)
        cssVar.style.setProperty("--phone-max-width", `${screenWidth}px`);
    }
    
}

function mobileSidebar(){
    let sidebarIcon = document.querySelector(".sidebar");
    let sidebar = document.querySelector(".menu");
    let bars = sidebarIcon.firstElementChild;
    let lastBars = sidebarIcon.lastElementChild;
    console.log(bars, lastBars)
    sidebarIcon.addEventListener("click", ()=>{
        sidebar.classList.toggle("menu-show");
        bars.classList.toggle("bars-hide");
        lastBars.classList.toggle("bars-show");
    });
}
mobileSidebar();