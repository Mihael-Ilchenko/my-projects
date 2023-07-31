export const searchForm = () => {
    if (document.getElementById('searchForm')) {
        const form = document.getElementById('searchForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })
    }
}

export const subscribedForm = () => {

    if (document.querySelector('.subscribe-form')) {
        const form = document.querySelector('.subscribe-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })
    }


}