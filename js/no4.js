(function () {
    let oC3 = document.getElementsByClassName("c3")[0],
        oUl = oC3.getElementsByTagName("ul"),
        bool = true;
    setInterval(function () {
        if (bool){
            oUl[0].style.opacity = "0";
            oUl[1].style.opacity = "1";
            bool = false;
        }else{
            oUl[0].style.opacity = "1";
            oUl[1].style.opacity = "0";
            bool = true;
        }
    },2500)
})()