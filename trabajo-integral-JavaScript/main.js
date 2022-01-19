import { getMenu } from "./controller/menuController.js";
import { getController } from "./controller/productController.js";
import { hamburgerMenu } from "./view/showHamburgetMenu.js";
function main() {
    getMenu();
    getController();
    hamburgerMenu();
}
main()
