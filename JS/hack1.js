(function() {
    'use strict';

    var previewSlot = document.querySelector('.ytp-ad-preview-slot');
    if (previewSlot) {
        previewSlot.remove();
    }

    var buttonSlots = document.querySelectorAll('.ytp-ad-skip-button-slot');
    buttonSlots.forEach(function(buttonSlot) {
        buttonSlot.style.display = 'flex';
    });

    var buttonContainers = document.querySelectorAll('.ytp-ad-skip-button-container');
    buttonContainers.forEach(function(buttonContainer) {
        buttonContainer.style.display = 'flex';
    });

    function clickButtonByClassName(className) {
        const button = document.querySelector('.' + className);
        if (button) {
            button.click();
        } else {
            console.log("Button with class name '" + className + "' not found.");
        }
    }

    const targetClassName = 'ytp-ad-skip-button.ytp-button';

    clickButtonByClassName(targetClassName);
})();
