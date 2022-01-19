import { itemsMenu } from "../model/menuModel.js";

export function showMenu() {
   itemsMenu.forEach( e =>{
      const creacionItem = document.createElement('a');
      creacionItem.href = e.links;
      creacionItem.innerHTML = e.title 
      document.getElementById('navitem').appendChild(creacionItem)
      
   })   
}


                                       