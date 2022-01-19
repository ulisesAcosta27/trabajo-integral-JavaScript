import { productos } from "../model/productModel.js";

export function showProducts() {
      productos.forEach(e =>{
         const createItem = document.createElement('div');
         createItem.className = 'producto';
         createItem.innerHTML = `
         <img src="${e.image}" alt="Producto" />
         <div class="texto-producto">
         <h3>${e.name}</h3>
         <p>${e.description}{</p>
         <p class="precio">${e.price}</p>
         <a href="#" class="btn">${e.link}</a>`;
         document.querySelector('.listado-productos').appendChild(createItem);
  })                                           
}
