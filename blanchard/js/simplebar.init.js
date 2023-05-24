    window.addEventListener('DOMContentLoaded', function() {
        // simplebar
        document.querySelectorAll(".artists__dropdown-wrap").forEach(item => {
            new SimpleBar(item, {
                autoHide: false,
                scrollbarMaxSize: 33,
            })
        })
    })
