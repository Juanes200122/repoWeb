document.addEventListener('DOMContentLoaded', function() {
    const whatAPP = document.getElementById('APP_Modal');
    const modalAPP = document.getElementById('APP_modalOpen');

    const closeAPP = document.getElementById('close_ModalAPP');


    whatAPP.addEventListener('click', function() {
        modalAPP.style.height = '280px';
        closeAPP.style.display = 'flex';

    })

    closeAPP.addEventListener('click', function() {
        modalAPP.style.height = '0px';
        closeAPP.style.display = 'none';

    })
});