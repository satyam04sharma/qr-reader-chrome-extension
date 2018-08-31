$(document).ready(function() {
    $("#btn1").click(function() {
        var res = "https://api.qrserver.com/v1/create-qr-code/?data=" + $("#text").val() + "&size=60x60";
        $("#image").attr('src', res);
        /*$.get("https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent($("#text") + "&size=60x60"), function(data, status) {
            $("#image").attr('src', 'data');
        });*/
    });
});