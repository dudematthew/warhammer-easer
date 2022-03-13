// https://www.npmjs.com/package/regenerator-runtime
// import 'regenerator-runtime/runtime'

// https://api.jquery.com/
window.$ = window.jQuery = require("jquery");

/**
 * Methods in Vue methods object need to be
 * written like this:
 * function () {}
 * instead of:
 * () => {}
 * if you want to have access to "this" Vue
 * object
 * 
 * https://vuejs.org/guide
 */
import { createApp } from 'vue';

// https://github.com/vueform/multiselect
import '@vueform/multiselect'

// https://bulmajs.tomerbe.co.uk/docs
import Bulma from '@vizuaalog/bulmajs';

// https://wikiki.github.io/form/iconpicker/
import 'bulma-iconpicker';

// https://fontawesome.com/icons
import "@fortawesome/fontawesome-free";

import Randomizer from "./lib/randomizer";
window.randomizer = new Randomizer();

// Vue components
import App from './components/app.vue'

let app = createApp(App).mount("#app");

import "./lib/behaviours";

$(document).on("load", () => {
    console.error("window loaded");
});
