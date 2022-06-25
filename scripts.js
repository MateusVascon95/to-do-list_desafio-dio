
function limpar(){
    document.getElementById("tarefa").value = "";
    document.getElementById("tarefa").focus();
}


function adicionar(){

    //Criando uma checkbox
    var checkBox = cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = "c1";
    cb.name = "check1";
    cb.value = "c1";
    cb.checked = false;

    // Create an "newli" node:
    var newLi = document.createElement("label");
    newLi.id = "elemento";
    newLi.htmlFor = "c1";

    // Atribuindo o que foi digitado a variavel tarefa
    var tarefa = document.getElementById("tarefa").value;

    // Criando uma text node
    const text = document.createTextNode(tarefa);
    
    // Append the text node to the "li" node:
    newLi.appendChild(text);

    var br = document.createElement('br');

    var container = document.getElementById('container');
    container.appendChild(cb);
    container.appendChild(newLi);
    container.appendChild(br);
}   