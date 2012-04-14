// ==UserScript==
// @name            Google Reader:  move link icons
// @namespace       halpenny
// @description     On a wide screen, the open icon is way too far away from the star and the item title.  This script moves that open icon next to the star.
// @include         http*://www.google.com/reader/view/*
// @version         0.1
// ==/UserScript==


// Don't bother getting fancy by detaching the opener 'a' from the DOM and
// appending it to the star icon container.  Just style the icon into place
// and shift the title over a bit.
//
// This has the added benefit of still working when new rows are
// dynamically added to the page.

var el = document.createElement("style");
el.type = "text/css";
el.textContent = "a.entry-original { left: 22px !important; } h2.entry-title { padding-left: 15px !important; }";
document.getElementsByTagName('head')[0].appendChild(el);
