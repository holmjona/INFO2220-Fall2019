$(document).ready(function () {
    //var f = $("p");
    //var p = f.parents("div");
    //var s = "";
    //for (var i = 0; i < p.length; i++) {
    //    s += p[i].id + "\r\n";
    //}
    //alert(s);
   // alert("Hello first");
    $("li").addClass("selected");
    $("li").click(liClick);
    var lis = $("def");
    lis.hide();
    var a = 5;
});

function liClick() {
    alert(this.tagName);
}
//$(document).ready(function () {
//    alert("Hello second");
//});