window.onload = function () {

    if (this.localStorage.Name) {
        var spn = this.document.getElementById("spnOut") ||
            this.document.getElementById("spnOut2");
        spn.innerText =
            "Hello, " + this.localStorage.Name;
    }
    if (this.localStorage.background) {
        var bdy = this.document.getElementsByTagName("body")[0];
        bdy.style.backgroundColor = "#" + this.localStorage.background;
    }
    var btn1 = this.document.getElementById("btnStoreStuff");
    var btn11 = this.document.getElementById("btnShowStuff");
    var btn2 = this.document.getElementById("btnStoreStuff2");
    var btn22 = this.document.getElementById("btnShowStuff2");
    var ddl = this.document.getElementById("ddlColor");
    if (btn1) {
        btn1.onclick = function () {
            //var n = prompt("What is your name");
            //var d = new Date();
            //d.setTime(d.getTime() + 2000); 
            //document.cookie = "name=" + n + ";expires=" + d + ";";
            var tBoxValue = document.getElementById("txtValue").value;
            localStorage.setItem("Name", tBoxValue);
            localStorage["Nombre"] = tBoxValue;
            localStorage.Imya = tBoxValue;

        };
    }
    if (btn11) {
       btn11.onclick = function () {
            //var cook = document.cookie;
            //var cookParts = cook.split(";");
            //var name = cookParts[0].split("=");
            //alert(name[1]);
            document.getElementById("spnOut").innerText
                = localStorage.Nombre;
            //document.getElementById("spnOut").innerText
            //    = localStorage.Imya;
        };
    }
    if (btn2) {
    btn2.onclick = function () {
            sessionStorage.Secret = document.getElementById("txtValue2").value;

        };
    }
    if (btn22) {
        btn22.onclick = function () {
            document.getElementById("spnOut2").innerText += sessionStorage.Secret;
        };
    }

    if (ddl) {
        ddl.onchange = function (ev) {
            ev = ev || window.event;
            //alert(this.id);
            var sel = this.value;
            //alert(sel);
            localStorage.background = sel;
        };
    }

};