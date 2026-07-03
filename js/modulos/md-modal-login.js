export class MDModallogin extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
        this.shadowRoot.innerHTML = `
            <!-- CSS -->
            <link href="css/bootstrap.css" rel="stylesheet">
            <!---------------->

            <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-light">
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <img src="media/logo-fogo-preto.png" width="20" alt="">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                Acesse à Volkka!
                                </h1>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body w-100 pb-5 pt-4">
                            <p class="text-center fs-5">
                                <strong>Cadastre Grátis</strong>
                            </p>
                            <div class="w-100 d-flex flex-column justify-content-center align-items-center mt-3">
                                <p class="fs-7 fw-light">
                                Já tem uma conta?
                                </p>
                                <a href="login.html" class="w-75 text-decoration-none">
                                <button type="button" class="w-100 py-3 fs-7 btn btn-red rounded-2 fw-medium d-flex align-items-center justify-content-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="20px">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
                                    </svg>
                                    FAZER LOGIN
                                </button>
                                </a>
                            </div>
                            <div class="w-100 d-flex flex-column justify-content-center align-items-center mt-4">
                                <p class="fs-7 fw-light">
                                    Ainda não tem uma conta?
                                </p>
                                <a href="Cadastrar-se.html" class="w-75 text-decoration-none">
                                <button type="button" class="w-100 py-3 fs-7 btn btn-outline-red rounded-2 fw-medium d-flex align-items-center justify-content-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="20px">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                                    </svg>
                                    CADASTRAR
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        // Inicializa a instância do modal do Bootstrap e a guarda
        this.loginModalInstance = new bootstrap.Modal(this.shadowRoot.querySelector('#login'));
    }
    /**
     * API Pública: Este método pode ser chamado de fora para abrir o modal.
     */
    abrirModalLogin() {
        console.log('Gerenciador de Modais: Recebi o comando para abrir o modal de login.');
        this.loginModalInstance.show();
    }
}