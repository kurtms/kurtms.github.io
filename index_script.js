/**
 * Created by Kurt on 8/18/2016.
 */

function expandMenu(){
    var sideBar = document.getElementById("sideBar");
    sideBar.style.visibility = "visible";
    var desiredWidth = 200; var rad = 0;
    var animation = setInterval(animate, 2);
    function animate(){
        if(rad == 100)
            clearInterval(animation);
        rad += 2;
        console.log(rad);
        sideBar.style.width = desiredWidth * Math.sin(rad * Math.PI/180) + "px";
    }
}

function closeMenu(){
    var sideBar = document.getElementById("sideBar");
    var desiredWidth = 200; var rad = 100;
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