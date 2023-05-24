 document.querySelectorAll(".artists__dropdown-wrap").forEach(item => {
         new SimpleBar(item, {
             AutoHide: false,
             scrollbarMaxSize: 33,
         })
     })
     // new SimpleBar(document.getElementById('realism-dropdown'), {
     //     autoHide: false,
     //     scrollbarMaxSize: 80,
     // });
