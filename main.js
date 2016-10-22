"use strict"
var request = require('request');
setInterval(function () {
    request('https://api.backpackbang.com/api/v1/throttle/allow-checkout', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var jsonbody = JSON.parse(body);
            if(jsonbody.allow){
                showNotif("Backpack Checkout Allowed Now!", "Hurry!!!");
            }
        }
    });
}, 10000);

function showNotif(message, title) {
    let notification_command = 'display notification "' + message + '" sound name "Basso" with title "' + title + '"';
    let spawn = require('child_process').spawn;
    spawn('osascript', ['-e', notification_command]);
}
