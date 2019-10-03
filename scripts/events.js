window.onload = pageLoad;
//function () {
//    alert("now");
//};

//alert("hello");


function pageLoad() {
    //var lis = document.getElementsByTagName("li");
    //for (var i = 0; i < lis.length; i++) {
    //    lis[i].onmouseenter = linkClick;
    //        //= function () {
    //    //    alert(this.innerText);
    //    //};
    //}

    var ul = document.getElementById("links");
    ul.onclick = linkClick;
}

function linkClick(e) {
    e = e || window.event;
    var t = e.target || e.srcElement;
    var c = e.currentTarget;
    //c.style.backgroundColor = "#F00";
    if (t.tagName === "A") {
        e.stopPropogation();
        e.cancelBubble = true;
    }
    alert(t.tagName + " | " + c.tagName );
}

