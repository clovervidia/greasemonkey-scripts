// ==UserScript==
// @name         Slickdeals Redirect Fixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replaces Slickdeals's redirected links with regular links
// @author       clover v.
// @match        https://slickdeals.net/f/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function(){
    window.addEventListener("load", function(e) {
        fixURLs();
    });

    function fixURLs(){
        for (let link of document.links) {
            var urlParams;

            // "u2" never appears to be the first parameter, so this will work fine
            if (link.href.includes("&u2")) {
                urlParams = new URLSearchParams(link.href);
                console.log(urlParams.get("u2"));
                var pURL = urlParams.get("u2");
                link.href = pURL;
            };

            // But just in case it decides to
            if (link.href.includes("?u2")) {
                urlParams = new URLSearchParams(link.href);
                console.log(urlParams.get("https://slickdeals.net/?u2"));
                pURL = urlParams.get("https://slickdeals.net/?u2");
                link.href = pURL;
            };

            // Some URLs may also have truncated URLs. This fixes that
            if (link.innerText.includes("...") && !link.innerText.includes(" ")){
                link.innerText = link.href;
            };
        };
    };
})();
