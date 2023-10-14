(function() {
    'use strict';

    function adDec() {
        console.log("15 Second ad detected");
    }

    function detectElement() {
        const element1 = document.getElementById("ad-text:2");
        const element2 = document.getElementById("ad-text:4");
        if (element1 || element2) {
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
