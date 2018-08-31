$(document).ready(function() {
    $("#btn1").click(function() {
        $.get("https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent($("#text")), function(data, status) {
            chrome.browserAction.onClicked.addListener(alert(echo(" " + data + " " + status)));
        });
    });
});