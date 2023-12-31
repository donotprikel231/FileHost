(function() {
    'use strict';

    function adDec() {
        console.log("15 Second ad detected");
    }

    function detectElement() {
        const elements = document.querySelectorAll('.ytp-ad-text.ytp-ad-preview-text, .ytp-ad-text'); // Elements with the class
        if (elements) {
            console.log("Class and id found");
        } else {
            console.log("No class and id detected");
        }

        elements.forEach((element) => {
            // Check if the element's ID matches the pattern "image-text:*"
            const id = element.getAttribute('id');
            if (id && id.startsWith('ad-text:')) {
                // If the condition is met, execute the changeImage function
                skipToEndOfAd()
                adDec();
            }
        });
    }

    function skipToEndOfAd() {
        const videoElement = document.querySelector('video');
        if (videoElement) {
            videoElement.currentTime = videoElement.duration;
        }
    }

    detectElement();
})();
