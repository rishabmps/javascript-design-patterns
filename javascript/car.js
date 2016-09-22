/**
 * Created by idnrsj on 9/22/2016.
 */
function car(name,cost,model,color,type) {
    this.color = color;
    this.cost = cost;
    this.name = name;
    this.model = model;
    this.type = type;
}

car.prototype.changeColor = function () {
    this.color = 'blue';
}

var car1 = new car("Tesla",12800,'Model-S','Red',1);
var car2 = new car("BMW",232342,'CL20','Black',2);
var car3 = new car("Ford",22800,'Mustang','Green',3);
