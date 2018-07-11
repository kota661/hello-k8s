var os = require("os");

exports.hostname = function () {
    return os.hostname;
}

exports.localIp = function (){
    return _getLocalAddress()
}

function _getLocalAddress() {
    var ipAddress = "x.x.x.x"
    var interfaces = os.networkInterfaces();
  
    for (var dev in interfaces) {
        interfaces[dev].forEach(function(details){
            if (!details.internal){
                switch(details.family){
                    case "IPv4":
                      ipAddress = details.address;
                    break;
                }
            }
        });
    }
    return ipAddress;
  };