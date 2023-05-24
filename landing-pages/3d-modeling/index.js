window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#burger-list').classList.toggle('burger--active')
        document.querySelector('.burger-btn-elem-1').classList.toggle('burger-btn-elem-1--active'),
            document.querySelector('.burger-btn-elem-2').classList.toggle('burger-btn-elem-2--active'),
            document.querySelector('.burger-btn-elem-3').classList.toggle('burger-btn-elem-3--active')
    });

})