var Human = /** @class */ (function () {
    function Human(myeyes) {
        this.eyes = myeyes;
        this.nose = 1;
        this.ears = 2;
    }
    Human.prototype.witeyes = function () { };
    return Human;
}());
var kishore = new Human(6);
console.log(kishore);
