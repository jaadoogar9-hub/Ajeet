// Jab app phone par poori tarah load ho jaayega, tab yeh function chalega
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    
    // Step 1: Screen par status badlo taaki pata chale code chal raha hai
    var statusElement = document.getElementById('status');
    statusElement.textContent = 'Device is ready! Permission maang rahe hain...';
    document.body.style.backgroundColor = 'lightblue';

    // Step 2: Ab permission ka pop-up maango
    var permissions = cordova.plugins.permissions;
    permissions.requestPermission(permissions.CAMERA,
        function(status) {
            if (status.hasPermission) {
                alert("Mil gayi permission! :) Kheer pakki!");
                document.body.style.backgroundColor = 'lightgreen';
            } else {
                alert("Permission nahi di. :(");
                document.body.style.backgroundColor = 'salmon';
            }
        },
        function() {
            alert("Plugin mein koi error aaya.");
        }
    );
}