$(document).ready(function () {
    //$("#btnGetData").click(function () {
    $("#txtIndex").change(function () {
        $.ajax({
            url: "data/people.json",
            success: function (boppy) {
                //alert("I got the file");
                //alert(boppy.data[1].name);

                var txt = document.getElementById("txtIndex");
                var indexToUse = txt.value;// * 1;
                //alert(typeof indexToUse + " value:" + indexToUse );
                // this is just javascript.
                //for (var i = 0; i < boppy.data.length; i++) {
                //    //alert(boppy.data[i].name);
                //    txt.value += boppy.data[i].age;
                //}
                        $("#lstARoo").empty();
                $.each(boppy.data, function (ndx, objectAtIndex) {
                    //if (objectAtIndex.address.contains(indexToUse))
                    //    alert(objectAtIndex.name);
                    //alert(objectAtIndex.name.indexOf(indexToUse));
                    if (objectAtIndex.name.indexOf(indexToUse) > -1){
                        //alert(objectAtIndex.name);
                        $("#lstARoo").append($("<li>").text(objectAtIndex.name));
                    }
                });
                //alert(boppy.data[indexToUse].age);
            },
            error: function () {
                alert("oops");
            }

        });
    });
});