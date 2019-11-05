window.onload = function () {
    this.document.getElementById("btnStoreStuff").onclick = function () {
        //var n = prompt("What is your name");
        //var d = new Date();
        //d.setTime(d.getTime() + 2000); 
        //document.cookie = "name=" + n + ";expires=" + d + ";";
        var tBoxValue = document.getElementById("txtValue").value;
        localStorage.setItem("Name", tBoxValue);
        localStorage["Nombre"] = tBoxValue;
        localStorage.Imya = tBoxValue;

    };
    this.document.getElementById("btnShowStuff").onclick = function () {
        //var cook = document.cookie;
        //var cookParts = cook.split(";");
        //var name = cookParts[0].split("=");
        //alert(name[1]);
    };
};