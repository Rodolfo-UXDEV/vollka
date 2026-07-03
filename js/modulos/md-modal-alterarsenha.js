export class MDModalAlterarSenha extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
        this.shadowRoot.innerHTML = `
            <!-- CSS -->
            <link href="css/bootstrap.css" rel="stylesheet">
            <!---------------->

            <div class="modal fade" id="ModalAlterarSenha" tabindex="-1" aria-labelledby="ModalAlterarSenha" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-light">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                Alterar senha
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body w-100 pb-5 pt-4">
                            <h2 class="fs-5 text-center fw-bold">
                                Importante!
                            </h2>
                            <p class="text-center fs-6 mb-4">
                                Certifique-se de manter sua senha em um local seguro e nunca a compartilhe com outros usuários.
                            </p>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Senha Atual:</label>
                                    <div class="password-container">
                                        <input type="password" class="form-control" id="senha" placeholder="Digite sua senha" onkeyup="validarSenha()">
                                        <svg width="20" fill="#868e96" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="toggle-password" onclick="toggleSenha()">
                                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nova Senha:</label>
                                    <div class="password-container">
                                        <input type="password" class="form-control" id="senha" placeholder="Digite sua senha" onkeyup="validarSenha()">
                                        <svg width="20" fill="#868e96" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="toggle-password" onclick="toggleSenha()">
                                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Confirme sua nova Senha:</label>
                                    <div class="password-container">
                                        <input type="password" class="form-control" id="senha" placeholder="Digite sua senha" onkeyup="validarSenha()">
                                        <svg width="20" fill="#868e96" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="toggle-password" onclick="toggleSenha()">
                                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                                        </svg>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-red">Enviar</button>
                            </form>
                        </div>
                    </div>            
                </div>
            </div>
        `
        // Inicializa a instância do modal do Bootstrap e a guarda
        this.loginModalInstance = new bootstrap.Modal(this.shadowRoot.querySelector('#alterarsenha'));
    }
    /**
     * API Pública: Este método pode ser chamado de fora para abrir o modal.
     */
    abrirModalAlterarSenha() {
        console.log('Gerenciador de Modais: Recebi o comando para abrir o modal de Alterar Senha.');
        this.loginModalInstance.show();
    }
}