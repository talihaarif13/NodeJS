const eventEmitter = require('events');
const events = new eventEmitter();


events.on('payBill', () => {

    console.log('Thank you for placing order');
});

events.emit('payBill');