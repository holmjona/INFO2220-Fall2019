$(document).ready(function () {
    //$(".words").addClass("selected"); // .css("color", "#F00");
    //var p1 = $("#pOne");
    //var pN = $("pOne");
    //p1.addClass("selected");
    //pN.addClass("selected");
    //var p = document.getElementById("ptne");
    //p.className ="selected";

    //$("#divOne p").addClass("selected");

    //var indexer = $("p")[0]; //indexer == document.getElementById("pOne")
    //var eqer = $("p").eq(0);
    //var eqIndex = $(indexer); // eqer == eqIndex;
    //var docQuer = $(document.getElementById("pOne")); // eqer == eqIndex == docQuer;
    //indexer.addClass();
    //eqer.addClass();

    //alert(indexer.tagName);
    //alert(eqer.tagName);

    //var what = $("div, p strong"); ? what is in here
    //var what = $("div p strong");
    //what.addClass("selected");
    //what.prepend("prepend");
    //what.append("append");
    //what.before("before");
    //what.after("after");

    //var ul = $("ul").eq(0);
    ////ul.css("background-color", "#F0F"); // find it
    //var newLI = $("<li>New Stuff</li>");
    ////ul.prepend(newLI);
    //ul.append(newLI);
    ////ul.before(newLI);
    ////ul.after(newLI);

    //var liFirst = ul.children()[0];
    //ul.append(liFirst);

    //ul.prepend("<li>New First Item</li>");

    //var anotherLi = $("<li>").text("magic");
    //ul.prepend(anotherLi.clone());
    //ul.append(anotherLi.clone().addClass("selected"));
    //ul.before(anotherLi.clone());
    //ul.after(anotherLi);

    ////var childs = ul.children();
    //ul.after(ul.clone());

    //var ul = $("ul").eq(0);
    //for (var i = 0; i < 5; i++) {
    //    var nLi = document.createElement("li");
    //    nLi.innerText = "Item " + i;
    //    ul.append(nLi);
    //}

    //$("ul").eq(0).append($("<li>").text("Item 6"));
    //$("ul").eq(0).append($("<li>").text("Item 7"));
    //$("ul").eq(0).append($("<li>").text("Item 8"));

    $("img").parent().click(function () {
        //alert(this.src);
        var me = $(this);
        me.children().hide(1000);
        me.children().show(1000);
    });

});