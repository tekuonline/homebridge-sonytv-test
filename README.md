# homebridge-SonyTV-Test

Supports Sony TVs on HomeBridge Platform


# Installation
coming soom!!!!!

# Configuration

Put your TVs IP Adress into the config

Configuration sample:

 ```
"accessories": [
        {
            "accessory": "Sony_TV",
            "name": "Living Room TV",
            "api_url": "http://tv-ip-address/IRCC?",
            "volUp_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAASAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
            "volDown_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAATAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
            "chanUp_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAAQAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
            "chanDown_body": "<?xml version=\"1.0\" encoding=\"utf-8\"?><s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\" s:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><s:Body><u:X_SendIRCC xmlns:u=\"urn:schemas-sony-com:service:IRCC:1\"><IRCCCode>AAAAAQAAAAEAAAARAw==</IRCCCode></u:X_SendIRCC></s:Body></s:Envelope>",
			"sendimmediately": ""
        }
    ]

```
