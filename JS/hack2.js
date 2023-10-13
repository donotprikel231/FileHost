(function() {
    'use strict';

    function skipToEndOfVideo() {
        const videoElement = document.querySelector('video');
        if (videoElement) {
            videoElement.currentTime = videoElement.duration;
        }
    }
})();
