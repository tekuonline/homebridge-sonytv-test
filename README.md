# homebridge-SonyTV-Test

Supports Sony TVs on HomeBridge Platform
It only works to turn on the TV as of now. 
If anyone have any idea about status polling on sony tv, pls let me know. 


# Installation
sudo npm install -g https://github.com/tekuonline/homebridge-sonytv-test

# Configuration

Put your TVs IP Adress into the config
Put your TVs mac into the config
Accessory must always be Sony_TV
name can be anything


Configuration sample:

 ```
"accessories": [
    {
    "accessory": "Sony_TV",
    "name": "Bedroom TV",
    "api_url": "http://tv-ip-address/IRCC?",
    "volUp_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAASAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
    "volDown_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAATAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
    "chanUp_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAAQAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
    "chanDown_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAARAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
    "sendimmediately": "",
    "mac":"D9:54:E2:67:5C:BD",
    "ip_address":"10.0.0.0"
    }   
]

```
