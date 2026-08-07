const modal = document.getElementById('modal');
const perguntaCronograma = document.getElementById('PerguntarCronograma');
const home = document.getElementById('home');

// Abrir o Modal
perguntaCronograma.addEventListener('click', () => {
    // 1. Inicia animação da home subindo
    home.style.animation = "move-home 1s forwards";

    // 2. Transição para o modal subir
    setTimeout(() => {
        home.style.display = "none";
        modal.style.display = "flex";
        modal.style.animation = "go-front 1s forwards";
    }, 800);
});

// Fechar o Modal (Função Unificada)
function fecharModal() {
    // 1. Modal começa a descer
    modal.style.animation = "go-back 1s forwards";

    // 2. Torna a Home visível IMEDIATAMENTE e dispara a animação dela descendo de volta
    home.style.display = "flex";
    home.style.animation = "move-home-reverse 1s forwards";

    // 3. Esconde o modal apenas quando a animação terminar totalmente
    setTimeout(() => {
        modal.style.display = "none";
    }, 1000);
}

function CloseTask() {
    fecharModal();
}

function cancelAction() {
    fecharModal();
}



// AVANÇA PARA A PRIXMA PERGUNTA



function AvancedNext(){
    const selectTask = document.getElementById('select_task');

    const valorSelecionado = selectTask.value;
    
    console.log(valorSelecionado);
}