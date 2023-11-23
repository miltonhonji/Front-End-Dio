class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${ this.nome } e minha idade é ${ this.idade }`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const milton = new Pessoa('Milton', 37);
const renan = new Pessoa('Renan', 30);

compararPessoas(milton, renan);

/*class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${ this.nome } e minha idade é ${ this.idade }`);
    }
}

const milton = new Pessoa('Milton', 37);
const renan = new Pessoa('Renan', 30);

milton.descrever();
renan.descrever();

console.log(milton);*/

/*class Pessoa{
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${ this.nome } e minha idade é ${ this.idade }`);
    }
}

const milton = new Pessoa();
milton.nome = 'Milton Honji';
milton.idade = 37;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;

milton.descrever();
renan.descrever();*/

/*const pessoa = {
    nome: 'Milton Honji',
    idade: 37,
    
    descrever: function(){
        console.log(`Meu nome é ${ this.nome } e minha idade é ${ this.idade }`);
    }
};

pessoa['nome'] = 'teste';
pessoa.nome = 'teste';*/

/*const atributo = 'idade';

console.log(pessoa['nome']);*/

/*const pessoa = {
    nome: 'Milton Honji',
    idade: 37,
    
    descrever: function(){
        console.log(`Meu nome é ${ this.nome } e minha idade é ${ this.idade }`);
    }
};

pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();*/

/*const milton = {
    nome: 'Milton Honji',
    idade: 37
}

milton.altura = 1.68;
delete milton.nome;
console.log(milton);*/