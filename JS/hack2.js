(function() {
    'use strict';

    function adDec() {
        console.log("15 Second ad detected");
    }

    function detectElement() {
        const element1 = document.getElementById("ad-text:1");
        const element2 = document.getElementById("ad-text:2");
        const element3 = document.getElementById("ad-text:3");
        const element4 = document.getElementById("ad-text:4");
        const elementl = document.getElementById("ad-text:l");
        if (element1 || element2 || element3 || element4 || elementl) {
            skipToEndOfAd()
            adDec();
        }
    }

    function skipToEndOfAd() {
        const videoElement = document.querySelector('video');
        if (videoElement) {
            videoElement.currentTime = videoElement.duration;
        }
    }

    detectElement();
})();
