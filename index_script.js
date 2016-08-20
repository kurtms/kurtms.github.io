/**
 * Created by Kurt on 8/18/2016.
 */

function expandMenu(){
    var sideBar = document.getElementById("sideBar");
    sideBar.style.visibility = "visible";
    var desiredWidth = 200; var rad = 0;
    var animation = setInterval(animate, 2);
    function animate(){
        if(rad == 90)
            clearInterval(animation);
        rad += 2;
        console.log(rad);
        sideBar.style.width = desiredWidth * Math.sin(rad * Math.PI/180) + "px";
    }
}

function closeMenu(){
    var sideBar = document.getElementById("sideBar");
    var desiredWidth = 200; var rad = 90;
    var animation = setInterval(animate, 2);
    function animate(){
        if(rad == 0) {
            clearInterval(animation);
            sideBar.style.visibility = 'hidden';
        }
        rad -= 2;
        console.log(rad);
        sideBar.style.width = desiredWidth * Math.sin(rad * Math.PI/180) + "px";
    }

}

window.onload = function bringUpMain(){
    var mainInfo = document.getElementsByClassName("main_info")[0];
    var prevMarginTop = mainInfo.style.marginTop;
    var desiredMarginTop = -200; var rad = 0;
    var animation = setInterval(animate, 4);
    function animate(){
        if(rad == 100) {
            clearInterval(animation);
        }
        console.log(rad);
        rad += 1;
        mainInfo.style.marginTop = prevMarginTop + desiredMarginTop * Math.sin(rad * Math.PI/180) + "px";
    }
}