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

// https://selectize.dev/docs.html
import "../../node_modules/selectize/dist/js/selectize";

// https://bulmajs.tomerbe.co.uk/docs
import Bulma from '@vizuaalog/bulmajs';

// https://wikiki.github.io/form/iconpicker/
import 'bulma-iconpicker';

// https://fontawesome.com/icons
import "@fortawesome/fontawesome-free";

import Randomizer from "./randomizer";
window.randomizer = new Randomizer();

// Vue components
import VueDiceThrow from '../components/header/dice-throw.vue'

$(function () {
    $("select[multiple]").selectize();
});

const app = createApp(VueDiceThrow).mount("#dice_throw");

$(document).on("load", () => {
    
});
