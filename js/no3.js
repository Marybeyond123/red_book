(function () {
    let oKuang = document.getElementsByClassName("kuang")[0],
        oLi = oKuang.getElementsByTagName("li"),
        len = oLi.length,
        oNext = 0,
        oPro;
    setInterval(function () {
        oPro = oNext;
        oNext++;
        if (oNext > len - 1){
            oNext = 0;
        }
        oLi[oPro].style.opacity = "0";
        oLi[oNext].style.opacity = "1";
    },2000)
})()
