import _ from 'lodash'

export class MyClass{

    constructor(public idade:number, public nome:string){

    }

    DizerNome(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }

    soma1(numeros){
        return _.map(numeros,item => item + 1)
    }
}