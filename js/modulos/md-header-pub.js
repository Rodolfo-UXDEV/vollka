export class MDHeaderpub extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link href="css/bootstrap.css" rel="stylesheet">
            
            <style>
                /* Garante que o dropdown fique acima de tudo */
                .dropdown-menu {
                    z-index: 1050; 
                    margin-top: 5px;
                }
                /* Garante que o ícone do menu mobile tenha cor */
                .navbar-toggler-icon {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
                }
            </style>

            <nav class="navbar navbar-light bg-white pb-3 pt-3">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="media/Logo-Principal.png" width="120" alt="Volkka Logo">
                    </a>

                    <div class="d-flex align-items-center">
                        <a href="#" class="pe-0" data-bs-toggle="modal" data-bs-target="#login" id="login">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                                <path fill="#2b2b2b" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                            </svg>
                        </a>

                        <div class="dropdown me-1">
                            <button class="btn btn-link position-relative" id="notifButton" type="button" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                                <path fill="#2b2b2b" d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                                </svg>
                            </button>
                
                            <ul class="dropdown-menu dropdown-menu-end p-3" id="notifMenu" aria-labelledby="notifButton" style="min-width: 300px;">
                                <li class="m-0 p-0">
                                    <p class="fw-semibold fs-5 m-0 p-0">
                                        Notificações
                                    </p>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <a href="#" class="text-decoration-none">
                                    <li class="d-flex justify-content-start align-items-center gap-2">
                                        <img src="media/butterfly-blue.svg" height="30px" alt="">
                                        <div>
                                            <p class="fw-semibold fs-7 m-0 p-0 text-dark">Novidade na Volkka!</p>
                                            <p class="fs-10 m-0 p-0 text-dark">há 1 semana</p>
                                        </div>
                                    </li>
                                </a>
                            </ul>
                        </div>

                        <button type="button" class="fs-6 btn btn-red rounded-2 fw-medium px-4 py-2 d-none d-lg-block" onclick="window.location.href='cadastrarse.html';">
                            CADASTRE GRÁTIS
                        </button>
                        
                        <button class="navbar-toggler d-lg-none" type="button" id="mobileMenuBtn" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" class="btn-close" id="btnCloseMobile" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body d-flex flex-column justify-content-start align-items-start">
                            <div class="navbar-nav d-flex justify-content-between">
                                <div>
                                    <p class="fs-2 fw-semibold d-flex align-items-center gap-2 mb-4">
                                        <img src="media/logo-fogo-preto.png" width="20" alt=""> volkka
                                    </p>
                                    <a href="cadastrarse.html" class="link-red fw-bold d-flex align-items-center gap-2 mb-3">CADASTRE GRÁTIS</a>
                                    <a href="login.html" class="link-red fw-bold d-flex align-items-center gap-2">LOGIN</a>
                                </div>
                            </div>
                            
                            <div class="d-flex justify-content-center align-items-center flex-column pb-4 mt-8">
                                <p class="fw-light fs-5">
                                    SIGA A <span class="text-red fw-bold">VOLKKA</span>
                                </p>
                                <div class="d-flex align-items-center justify-content-center gap-4">
                                    <a href="#" target="_blank" class="text-decoration-none text-dark">
                                        <svg height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7H19C19.5523 7 20 7.44771 20 8V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V8C4 7.44772 4.44772 7 5 7ZM2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM10 9L14 12L10 15V9Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                    <a href="#" target="_blank" class="text-decoration-none text-dark">
                                        <svg height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                    <a href="#" target="_blank" class="text-decoration-none text-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 512 512">
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                                        </svg>
                                    </a>
                                    <a href="#" target="_blank" class="text-decoration-none text-dark">
                                        <svg height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                    <a href="#" target="_blank" class="text-decoration-none text-dark">
                                        <svg height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        `;
    }

    connectedCallback() {
        // Verifica se o Bootstrap foi carregado no index.html (window)
        if (!window.bootstrap) {
            console.error('Bootstrap JS não encontrado na window. Importe o bootstrap.bundle.js no seu index.html');
            return;
        }

        // ======================================================
        // 1. CONFIGURAÇÃO DO DROPDOWN (Notificações)
        // ======================================================
        const notifBtn = this.shadowRoot.querySelector('#notifButton');
        const notifMenu = this.shadowRoot.querySelector('#notifMenu');

        if (notifBtn && notifMenu) {
            // Cria a instância manualmente
            const dropdown = new window.bootstrap.Dropdown(notifBtn, {
                popperConfig: function (defaultBsPopperConfig) {
                    // "fixed" ajuda a posicionar corretamente fora do fluxo normal do Shadow DOM
                    return { ...defaultBsPopperConfig, strategy: 'fixed' };
                }
            });

            // Toggle manual ao clicar
            notifBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Impede fechar imediatamente
                dropdown.toggle();
            });

            // Fecha o dropdown se clicar fora (simulação manual)
            // Nota: Adicionamos o listener na window para pegar cliques fora do componente
            window.addEventListener('click', (e) => {
                // Se o clique não foi dentro do botão nem do menu
                if (!e.composedPath().includes(notifBtn) && !e.composedPath().includes(notifMenu)) {
                    dropdown.hide();
                }
            });
        }

        // ======================================================
        // 2. CONFIGURAÇÃO DO OFFCANVAS (Menu Mobile)
        // ======================================================
        const offcanvasEl = this.shadowRoot.querySelector('#offcanvasNavbar');
        const btnOpenMobile = this.shadowRoot.querySelector('#mobileMenuBtn');
        const btnCloseMobile = this.shadowRoot.querySelector('#btnCloseMobile');

        if (offcanvasEl) {
            // Cria a instância do Offcanvas
            const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasEl);

            // ABRIR: Clique no hambúrguer
            if (btnOpenMobile) {
                btnOpenMobile.addEventListener('click', (e) => {
                    e.stopPropagation();
                    bsOffcanvas.show();
                });
            }

            // FECHAR: Clique no "X"
            if (btnCloseMobile) {
                btnCloseMobile.addEventListener('click', (e) => {
                    e.stopPropagation();
                    bsOffcanvas.hide();
                });
            }
            
            // FECHAR: Ao clicar em links dentro do menu (opcional, mas boa prática de UX)
            const links = offcanvasEl.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => bsOffcanvas.hide());
            });
        }

        // ======================================================
        // 3. EVENTO DE LOGIN
        // ======================================================
        const loginBtn = this.shadowRoot.querySelector('#login');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('loginRequisitado', { bubbles: true, composed: true }));
            });
        }
    }
}