// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import JS
// import menuOpen from "./menuOpen";
// import infiniteScroll from "./infiniteScroll";
import codeBlock from "./codeBlock";
codeBlock();

// // Call the menu and infinite scroll functions
// menuOpen();
// infiniteScroll();

import Prism from "prismjs";
Prism.highlightAll();
import "prismjs/components/prism-bash";
import "prismjs/components/prism-toml";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markup-templating";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
import "prismjs/components/prism-php";

import Alpine from "alpinejs";
import switcher from "./switcher";
window.Alpine = Alpine;
switcher();
Alpine.start();
