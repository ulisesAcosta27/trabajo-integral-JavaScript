export function hamburgerMenu() {
   document.getElementById('clickOpen').addEventListener('click', e =>{
      const responsiveNarvar = document.querySelector('.contenedor-navegacion');
      responsiveNarvar.classList.toggle('close')
  });                    
}