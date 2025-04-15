import Alertas from './alerts.js';
import { toggleMenu, closeMenu, asidebar } from './navbar.js';
import { copy } from './code.js';
import { create} from './create.js';

window.Alertas = Alertas;
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;
window.copy = copy;
window.create = create;
window.asidebar = asidebar;

document.addEventListener("DOMContentLoaded", () => {
    create();
    toggleMenu();
    closeMenu();
    copy();
    asidebar();
});