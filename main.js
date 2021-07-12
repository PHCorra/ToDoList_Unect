    function abrirModal(modalID){
        const modal = document.getElementById(modalID);
        if(typeof modal == 'undefined' || modal === null)
            return;

            modal.style.display = 'flex';
    }

    function fecharModal() {
        const modal = document.getElementById('modal');
        window.onclick = (event) => {
            if(event.target == modal)
                modal.style.display = 'none';
        }

    }

   

    function addTask(){
        
        let writeUser = document.getElementById('task-add');
        let writeUserSalvo = writeUser.value;
        writeUser.value = "";
        let todoList = document.getElementById('articleToDo');
        

        const div = document.createElement('div');
        todoList.appendChild(div);

        

        const p = document.createElement('p');
        p.innerHTML = writeUserSalvo;
        div.appendChild(p);

        const linha = document.createElement('hr');
        p.appendChild(linha);

        let imgExcluirToDo = document.createElement('img');
        imgExcluirToDo.src = 'images/excluirIMG.png';
        div.appendChild(imgExcluirToDo);

        let imgPassar = document.createElement('img');
        imgPassar.src = 'images/passarIMG.png';
        div.appendChild(imgPassar);
        
        
        imgExcluirToDo.addEventListener("click", () =>{ // Função de excluir
            div.remove();
        });

        

        imgPassar.addEventListener("click", () =>{ // Função para passar a task
            div.remove();
            let doingList = document.getElementById('articleDoing');
        

            const divDoing = document.createElement('div');
            doingList.appendChild(divDoing);

            const pDoing = document.createElement('p');
            pDoing.innerHTML = p.innerHTML;
            divDoing.appendChild(pDoing);

            
            

            let imgDone = document.createElement('img'); /* Icones */
            imgDone.src = 'images/doneIMG.png';
            divDoing.appendChild(imgDone);

            let imgExcluirDoing = document.createElement('img'); /* Icones */
            imgExcluirDoing.src = 'images/excluirIMG2.png';
            divDoing.appendChild(imgExcluirDoing);

            imgExcluirDoing.addEventListener("click", () =>{ // Função de excluir
                divDoing.remove();
            });

            imgDone.addEventListener('click', () => {
                divDoing.remove();

                let doneList = document.getElementById('articleDone');
                let divDone = document.createElement('div');
                doneList.appendChild(divDone);

                let pDone = document.createElement('p');
                pDone.innerHTML = pDoing.innerHTML;
                divDone.appendChild(pDone);

                let imgReturn = document.createElement('img');
                imgReturn.src = 'images/returnIMG.png';
                divDone.appendChild(imgReturn);

                let imgExcluirDone = document.createElement('img'); /* Icones */
                imgExcluirDone.src = 'images/excluirIMG2.png';
                divDone.appendChild(imgExcluirDone);

                imgExcluirDone.classList.add("imgCriado");
                imgReturn.classList.add("imgCriado2");
                pDone.classList.add("classeCriadaDone");
 
                imgExcluirDone.addEventListener("click", () =>{ // Função de excluir
                    divDone.remove();
                });

                imgReturn.addEventListener("click", () => {
                    alert("Função em desenvolvimento"); 
                } // Função de retorno da task
                    
                  )



            })


            imgExcluirDoing.classList.add("imgCriado");
            imgDone.classList.add("imgCriado2");
            pDoing.classList.add("classeCriada");

           
        })

        

        

        p.classList.add("classeCriada");
        imgExcluirToDo.classList.add("imgCriado");
        imgPassar.classList.add("imgCriado2");
        


    }

    function darkModeOn() {
        let botao = document.getElementById('darkMode').value;        
        let divBotao = document.getElementById('divDarkm');
        let addTaskButton = document.getElementById('botaoAddTask');
        
        
        addTaskButton.src= "images/add_task.png";

        let bodyBlack = document.body;






        /*divBotao.classList.add("darkModeClass");*/

        bodyBlack.classList.toggle("darkModeBody");



    }

    function aplicarBackground() {
        let inputURL = document.getElementById('planoDeFundo').value;

        let bodyBackground = document.body;

        bodyBackground.style.background = `url(${inputURL})`;
       



    }

    function limparBox() {
        let writeUser = document.getElementById('planoDeFundo');
        writeUser.value = '';
    }

   