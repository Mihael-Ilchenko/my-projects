 document.addEventListener("DOMContentLoaded", () => {
     //     // choices
     const defaultSelect = () => {
         const element = document.querySelector('#galery-art')
         const choices = new Choices(element, {
             searchEnabled: false,
         })
     }
     defaultSelect();
 })
