export class MDModalareamembro extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
        this.shadowRoot.innerHTML = `
            <!-- CSS -->
            <link href="css/bootstrap.css" rel="stylesheet">
            <!---------------->

            <div class="modal fade" id="areamembro" tabindex="-1" aria-labelledby="areamembro" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content p-3">
                        <div class="d-flex justify-content-end p-2">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="">
                            <p class="m-0 text-center fw-semibold fs-5">
                                Área do Membro
                            </p>
                            <p class="m-0 text-center fw-norma text-gray fs-6">
                                <strong>Olá!</strong> testevolkka@gmail.com
                            </p>
                        </div>
                        <div class="mt-4 mb-2 d-flex flex-column gap-3">
                            <div class="w-100 bg-light p-3 rounded-3 border border-1 border-light-subtle shadow-sm">
                                <a href="dashboard.html" class="d-flex align-items-center justify-content-between gap-2 link-red fw-bold fs-6">
                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M1.667 5.417c0-1.768 0-2.652.549-3.201.549-.55 1.433-.55 3.2-.55 1.768 0 2.652 0 3.201.55.55.549.55 1.433.55 3.2 0 1.768 0 2.652-.55 3.201-.549.55-1.433.55-3.2.55-1.768 0-2.652 0-3.201-.55-.55-.549-.55-1.433-.55-3.2ZM10.833 14.583c0-1.768 0-2.651.55-3.2.549-.55 1.433-.55 3.2-.55 1.768 0 2.652 0 3.201.55.55.549.55 1.433.55 3.2 0 1.768 0 2.652-.55 3.201-.549.55-1.433.55-3.2.55-1.768 0-2.652 0-3.201-.55-.55-.549-.55-1.433-.55-3.2ZM1.667 14.583c0-1.768 0-2.651.549-3.2.549-.55 1.433-.55 3.2-.55 1.768 0 2.652 0 3.201.55.55.549.55 1.433.55 3.2 0 1.768 0 2.652-.55 3.201-.549.55-1.433.55-3.2.55-1.768 0-2.652 0-3.201-.55-.55-.549-.55-1.433-.55-3.2ZM10.833 5.417c0-1.768 0-2.652.55-3.201.549-.55 1.433-.55 3.2-.55 1.768 0 2.652 0 3.201.55.55.549.55 1.433.55 3.2 0 1.768 0 2.652-.55 3.201-.549.55-1.433.55-3.2.55-1.768 0-2.652 0-3.201-.55-.55-.549-.55-1.433-.55-3.2Z"></path>
                                    </svg>
                                    PAINEL
                                </div>
                                
                                <svg width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                                </a>
                            </div> 
                            <div class="w-100 bg-light p-3 rounded-3 border border-1 border-light-subtle shadow-sm">
                                <a href="meusanuncios.html" class="d-flex align-items-center justify-content-between gap-2 link-red fw-bold fs-6">
                                <div class="d-flex align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M13.333 4.872c2.357 0 3.536 0 4.268.75.732.752.732 1.96.732 4.378s0 3.626-.732 4.377c-.732.751-1.91.751-4.268.751H6.667c-2.357 0-3.536 0-4.268-.75-.732-.752-.732-1.96-.732-4.378 0-2.417 0-3.626.732-4.377.732-.751 1.91-.751 4.268-.751h6.666Z"></path>
                                    <path fill="currentColor" fill-rule="evenodd" d="M16.875 2.308c0 .354-.28.64-.625.64H3.75a.633.633 0 0 1-.625-.64c0-.354.28-.641.625-.641h12.5c.345 0 .625.287.625.64Zm0 15.384c0 .354-.28.641-.625.641H3.75a.633.633 0 0 1-.625-.64c0-.355.28-.642.625-.642h12.5c.345 0 .625.287.625.641Z" clip-rule="evenodd"></path>
                                    </svg>
                                    MEUS ANÚNCIOS
                                </div>
                                
                                <svg width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                                </a>
                            </div> 
                            <div class="w-100 bg-light p-3 rounded-3 border border-1 border-light-subtle shadow-sm">
                                <a href="creditos.html" class="d-flex align-items-center justify-content-between gap-2 link-red fw-bold fs-6">
                                <div class="d-flex align-items-center gap-2">
                                    <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/>
                                    </svg>
                                    CARTEIRA
                                </div>
                                
                                <svg width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                                </a>
                            </div> 
                            <div class="w-100 bg-light p-3 rounded-3 border border-1 border-light-subtle shadow-sm">
                                <a href="cupons.html" class="d-flex align-items-center justify-content-between gap-2 link-red fw-bold fs-6">
                                <div class="d-flex align-items-center gap-2">
                                    <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"/>
                                    </svg>
                                    CUPONS
                                </div>
                                
                                <svg width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                                </a>
                            </div> 
                            <div class="w-100 bg-light p-3 rounded-3 border border-1 border-light-subtle shadow-sm">
                                <a href="configuracoesdaconta.html" class="d-flex align-items-center justify-content-between gap-2 link-red fw-bold fs-6">
                                <div class="d-flex align-items-center gap-2">
                                    <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
                                    </svg>
                                    CONFIGURAÇÕES
                                </div>
                                
                                <svg width="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                </svg>
                                </a>
                            </div> 
                        </div>
                        <div class="my-4">
                            <a href="#" target="_blank" class="d-flex justify-content-center align-items-center gap-2 link-red fs-6 fw-bold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd" d="M16.125 12a.75.75 0 0 0-.75-.75H4.402l1.961-1.68a.75.75 0 1 0-.976-1.14l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 .976-1.14l-1.96-1.68h10.972a.75.75 0 0 0 .75-.75Z" clip-rule="evenodd"></path>
                                <path fill="currentColor" d="M9.375 8c0 .702 0 1.053.169 1.306a1 1 0 0 0 .275.275c.253.169.604.169 1.306.169h4.25a2.25 2.25 0 0 1 0 4.5h-4.25c-.702 0-1.053 0-1.306.168a1 1 0 0 0-.275.276c-.169.253-.169.604-.169 1.306 0 2.828 0 4.243.879 5.121.878.879 2.292.879 5.12.879h1c2.83 0 4.243 0 5.122-.879.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C20.617 2 19.203 2 16.375 2h-1c-2.829 0-4.243 0-5.121.879-.879.878-.879 2.293-.879 5.121Z"></path>
                                </svg>
                                ENCERRAR SESSÃO
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `
        // Inicializa a instância do modal do Bootstrap e a guarda
        this.areaMembroModalInstance = new bootstrap.Modal(this.shadowRoot.querySelector('#areamembro'));
    }
    /**
     * API Pública: Este método pode ser chamado de fora para abrir o modal.
     */
    abrirModalAreaMembro() {
        console.log('Gerenciador de Modais: Recebi o comando para abrir o modal de área do membro.');
        this.areaMembroModalInstance.show();
    }
}