"use strict";

var Service, Characteristic, VolumeCharacteristic, ChannelCharacteristic;
var request = require("request");
var inherits = require('util').inherits;
var wol = require("wake_on_lan");

module.exports = function(homebridge){
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  
  makeVolumeCharacteristic();
  makeChannelCharacteristic();
  
  homebridge.registerAccessory("homebridge-sonytv-test", "Sony_TV", SonyAccessory);
};

function SonyAccessory(log, config) {
	this.log = log;
	this.mac 			= config.mac;
	this.ip 			= config.ip_address;
	this.api_url    	= config.api_url;
	this.http_method 	= "POST";
	this.volUp_body   	= config.volUp_body;
	this.volDown_bod	= config.volDown_body;
	this.chanUp_body	= config.chanUp_body;
	this.chanDown_body 	= config.chanDown_body;
	this.sendimmediate	= config.sendimmediately;
	this.name 			= config.name;

	if (!this.mac) throw new Error("Please provde the mac address of tv in config file");

	this.service = new Service.Switch(this.name);

     this.service
        .getCharacteristic(Characteristic.On)
        .on('get', this._getOn.bind(this))
        .on('set', this._setOn.bind(this));

    this.service
        .addCharacteristic(VolumeCharacteristic)
        .on('get', this._getVolume.bind(this))
        .on('set', this._setVolume.bind(this));

    this.service
        .addCharacteristic(ChannelCharacteristic)
        .on('get', this._getChannel.bind(this))
        .on('set', this._setChannel.bind(this));
   }

SonyAccessory.prototype.getInformationService = function() {
    var informationService = new Service.AccessoryInformation();
    informationService
        .setCharacteristic(Characteristic.Name, this.name)
        .setCharacteristic(Characteristic.Manufacturer, 'Sony TV')
        .setCharacteristic(Characteristic.Model, '1.0.0')
        .setCharacteristic(Characteristic.SerialNumber, '10.2.02');
    return informationService;
}


SonyAccessory.prototype.getServices = function() {
  return [this.service, this.getInformationService()];
     }

SonyAccessory.prototype._getOn = function(callback) {
    var accessory = this;
    //get ping or something in here!!
}

SonyAccessory.prototype._setOn = function(on, callback) {
		  if(on){
		    wol.wake(this.mac, function(error) {
		      if (error) {
		        this.service.setCharacteristic(Characteristic.On, false);
		        this.log("Error when sending packets to turn on the tv", error);
		      } else {
		        this.log("TV turned on by sending the magic packets");
		        setTimeout(function() {
		          this.service.setCharacteristic(Characteristic.On, false);
		        }.bind(this), 30000);
		      }
		    }
            .bind(this));
		  }
          else{


          }
		  callback();
}

SonyAccessory.prototype._getVolume = function(callback) {
    var accessory = this;
    callback(null, 25);
}

SonyAccessory.prototype._setVolume = function(volume, callback) {
    var accessory = this;
    var exec = require('child_process').exec;
    var command = '../send_command.sh' + " " + '10.0.1.9' + " " 'AAAAAQAAAAEAAAAlAw=='
    process.exec(command , function (err,stdout,stderr) {
    if (err) {
        console.log("\n"+stderr);
    } else {
        console.log(stdout);
    }
});
    callback();
}


SonyAccessory.prototype._getChannel = function(callback) {
    var accessory = this;
    callback(null, 2);
}

SonyAccessory.prototype._setChannel = function(volume, callback) {
    var accessory = this;
    callback(null);
}

	// Custom Characteristics

	function makeVolumeCharacteristic() {

    VolumeCharacteristic = function() {
        Characteristic.call(this, 'Volume', '91288267-5678-49B2-8D22-F57BE995AA00');
        this.setProps({
            format: Characteristic.Formats.INT,
            unit: Characteristic.Units.PERCENTAGE,
            maxValue: 100,
            minValue: 0,
            minStep: 1,
            perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };

    inherits(VolumeCharacteristic, Characteristic);
}

function makeChannelCharacteristic() {

    ChannelCharacteristic = function () {
        Characteristic.call(this, 'Channel', '212131F4-2E14-4FF4-AE13-C97C3232499D');
        this.setProps({
            format: Characteristic.Formats.INT,
            unit: Characteristic.Units.NONE,
            maxValue: 100,
            minValue: 0,
            minStep: 1,
            perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
        });
        this.value = this.getDefaultValue();
    };

    inherits(ChannelCharacteristic, Characteristic);
}
  