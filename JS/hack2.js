(function() {
    'use strict';

    function adDec() {
        console.log("15 Second ad detected");
    }

    function detectElement() {
        const element2 = document.getElementById("ad-text:2");
        const element3 = document.getElementById("ad-text:3");
        const element4 = document.getElementById("ad-text:4");
        if (element2 || element3 || element4) {
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
