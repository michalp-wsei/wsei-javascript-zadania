var Robot = function (name) {
    this.name = name;
    this.isFunctional = false;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

let robot = new Robot('Michał');
robot.sayHi('Tomasz');
robot.fixIt();
robot.sayHi('Tomasz');
robot.changeName('Jakub');
robot.sayHi('Tomasz');
