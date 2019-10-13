// ==UserScript==
// @name         YouTube Link Redirect Fixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replaces YouTube's redirected links with regular links
// @author       clover v.
// @match        https://www.youtube.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function(){
    // For correcting on navigation to a new video
    window.addEventListener("spfdone", function(e) {
        fixURLs();
    });

    // For when you load a video directly
    window.addEventListener("load", function(e) {
        fixURLs();
    });

    // Used for Material Design YouTube
    window.addEventListener("yt-navigate-finish", function(e) {
        fixURLs();
    });

    // fixURLs has two functions: Remove the YouTube link redirector, and also replace the truncated URL text with the full URL
    function fixURLs(){
        for (let link of document.links) {
            var urlParams;

            // Sometimes "q" will be the first parameter
            if (link.href.includes("?q")) {
                urlParams = new URLSearchParams(link.href);
                console.log(urlParams.get("https://www.youtube.com/redirect?q"));
                var pURL = urlParams.get("https://www.youtube.com/redirect?q");
                link.href = pURL;
                link.innerText = pURL;
            };
            // Other times it will appear later in the URL
            if (link.href.includes("&q")) {
                urlParams = new URLSearchParams(link.href);
                console.log(urlParams.get("q"));
                pURL = urlParams.get("q");
                link.href = pURL;
                link.innerText = pURL;
            };
        };
    };
})();