

function adicionarTarefa() {


   let mensagem = "Tarefa adicionada com sucesso!";
   let mensagemerro = "Erro!"
   let inputtarefa = document.getElementById("inputtarefa")
   let tarefa = inputtarefa.value.trim()



   if (tarefa == "") {
      document.getElementById("mensagem").textContent = mensagemerro;
   } else {
      document.getElementById("mensagem").textContent =  mensagem;
      let listatarefas = document.getElementById("listatarefas")
      let novatarefa = document.createElement("li")
      novatarefa.textContent = tarefa
      listatarefas.appendChild(novatarefa)
   }


   


   inputtarefa.value = ""



}

