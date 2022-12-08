const mqtt = require('mqtt');
const MQTT_HOST='tcp://35.183.188.70';
const MQTT_USERNAME='smrt1';
const MQTT_PASSWORD='3LmMjx8%sS6Z';


class Mqtt{
    constructor(){
       this.client = mqtt.connect(MQTT_HOST, {
            username: MQTT_USERNAME,
            password: MQTT_PASSWORD
        });
        this.client.on('connect', async ()=>{
            console.log(`====> MQTT client connected to: ${this.client.options.host} as: ${this.client.options.clientId}`);
        })
    }

    async send(params){
        const message = { 
            event: 'qr_scanned', 
            params
        };
        await this.client.publish( 'qr_scanned', JSON.stringify(message) );
          
    }

}

module.exports = Mqtt;








