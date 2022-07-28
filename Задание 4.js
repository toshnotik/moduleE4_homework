function Device(name, power) {
    this.name = name,
    this.power = power,
    this.plugUnplug = 'unplugged',
    this.consumed = 0
}

Device.prototype.plugIn = function() {
    this.plugUnplug = 'plugged',
    this.consumed += 1
}
Device.prototype.consumedPower = function() {
  console.log(`Потребленная энергия ${this.consumed * this.power} кВт`)
}
Device.prototype.plugOut = function() {
    this.plugUnplug = 'unplugged'
}
Device.prototype.getInfo = function() {
    console.log(`${this.name } потребляет ${this.power} кВт`)
}

function Computer(frequency, power){
    this.name = 'Lenovo',
    this.frequency = frequency,
    this.power = power
}

Computer.prototype = new Device()


function Lamp(model, lumen, power) {
    this.name = 'Lamp',
    this.model = model,
    this.power = power,
    this.lumen = lumen
}

Lamp.prototype = new Device()
Lamp.prototype.getInfo = function() {
    console.log(`Лампа модели ${this.model}, световой поток - ${this.lumen} лм`)
}


const comp = new Computer(frequency=1000, power=110)
const lamp = new Lamp(model='RGB', lumen=10000, power=20)

comp.plugIn()
comp.plugIn()
comp.consumedPower()
comp.getInfo()
lamp.getInfo()