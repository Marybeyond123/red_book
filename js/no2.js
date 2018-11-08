(function () {
    let oRight = document.getElementsByClassName("c1-right")[0],
        oImg = oRight.getElementsByTagName("img")[0];
    setTimeout(function () {
        oImg.style.left = -150 + "px";
        oImg.style.opacity = "1";
    },500)
})()