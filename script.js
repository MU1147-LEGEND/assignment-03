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

var screenWidth = window.screen.width;
var cssVar = document.querySelector(":root");
cssVar.style.setProperty("--max-w", `${screenWidth-150}px`);