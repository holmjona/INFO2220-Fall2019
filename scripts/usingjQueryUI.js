$(document).ready(function () {
    $("#information").accordion({collapsible:false,heightStyle:"fill"});
    //$("#information").hide();
    //$("#listOfAnimals").accordion();
    $("#listOfAnimals").sortable({
        update: function (e,ele) {
            alert("You just moved "+ ele.item.text());
        }
    });
    //$("#listOfAnimals").hide();

    //$("#field").datepicker();
    //$("#field").spinner();
    //$("#field").hide();
    $("#infoClasses").tabs();
    //$("#infoClasses").hide();
    $("#insects").selectmenu();
    //$("#insects").parent().hide();
    $("#myMenu").menu();


    $("#btnSwanky").click(function () {
        $("#theme").attr("href", "styles/jquery-ui-swanky.theme.css");
    });
    $("#btnSunny").click(function () {
        $("#theme").attr("href", "styles/jquery-ui-sunny.theme.css");
    });

});