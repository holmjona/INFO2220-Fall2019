$(document).ready(function () {
    $("#btnGetData").click(function () {
        $.ajax({
            url: "data/test.json",
            success: function () {
                alert("I got the file");
            },
            error: function () {
                alert("oops");
            }

        });
    });
});