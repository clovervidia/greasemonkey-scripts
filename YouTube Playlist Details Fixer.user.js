// ==UserScript==
// @name         YouTube Playlist Details Fixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fixes the playlist details so you can copy/paste them properly
// @author       clover v.
// @match        https://www.youtube.com/playlist?list=*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    // For correcting on navigation to a new video
    window.addEventListener("spfdone", function(e) {
        fixDesc();
    });

    // For when you load a video directly
    window.addEventListener("load", function(e) {
        fixDesc();
    });

    // Used for Material Design YouTube
    window.addEventListener("yt-navigate-finish", function(e) {
        fixDesc();
    });


    function fixDesc(){
        for(let p of document.querySelector("ul.pl-header-details").children) {
            p.innerHTML += "<br>"
        }
    }
})();
