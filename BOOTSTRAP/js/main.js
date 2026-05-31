document.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
    new bootstrap.Popover(el, {
        trigger: el.getAttribute('data-bs-trigger') || 'click'
    });
});
    // Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(function (popoverTriggerEl) {
        new bootstrap.Popover(popoverTriggerEl);
    });

    // Toast для корзины – ищем кнопки с классом btn-outline-secondary (иконка корзины)
    const cartButtons = document.querySelectorAll('.btn-outline-secondary');
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toastEl = document.getElementById('successToast');
            if (toastEl) {
                const toast = new bootstrap.Toast(toastEl);
                toast.show();
            }
        });
    });
   
       // Toast для избранного – ищем кнопки с классом btn-fav
const favButtons = document.querySelectorAll('.btn-fav');
favButtons.forEach(button => {
    button.addEventListener('click', function() {
        const toastEl = document.getElementById('favToast');
        if (toastEl) {
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }
    });
});
});