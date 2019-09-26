var pNew = document.getElementById("pOne");
var pPar = pNew.parentNode;
var pPNext = pNew.parentNode.nextSibling;
var pPPrev = pNew.parentNode.previousSibling;
var pNext = pNew.nextSibling;
var pPrev = pNew.previousSibling;

var pPrevElem = getNext(pNew);

var newUL = document.createElement("ul");
for (var i = 0; i < 6; i++) {
    var li1 = document.createElement("li");
    li1.textContent = "Boo "+ i;
    newUL.appendChild(li1);
}


pPrevElem.appendChild(newUL);
var pmagic = "i don't know";

function getNext(ele) {
    var next = ele.nextSibling;
    while (next.nodeName === "#text") {
        next = next.nextSibling;
    }
    return next;
}