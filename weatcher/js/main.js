import { choiceTabs } from './modules/tabs.js';
import { openCloseSearch, changeTheme } from './modules/myFunctions.js';
import { choiceSwiper } from './modules/swipers.js';

document.addEventListener('DOMContentLoaded', () => {
    choiceTabs();
    openCloseSearch();
    changeTheme();
})
