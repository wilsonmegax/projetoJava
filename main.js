

class TodoList{
    constructor(){
this.todos = [];
}
addTodo(){
    this.todos.push('Novo todo');
    console.log(this.todos);
}
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}

//importar funções webpack da pagina funcoes
import {soma} from'./funcoes';
console.log(soma(1,2));
