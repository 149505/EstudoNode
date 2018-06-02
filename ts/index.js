"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var MyClass = /** @class */ (function () {
    function MyClass(idade, nome) {
        this.idade = idade;
        this.nome = nome;
    }
    MyClass.prototype.DizerNome = function () {
        console.log("Meu nome \u00E9 " + this.nome + " e minha idade \u00E9 " + this.idade);
    };
    MyClass.prototype.soma1 = function (numeros) {
        return lodash_1["default"].map(numeros, function (item) { return item + 1; });
    };
    return MyClass;
}());
exports.MyClass = MyClass;
