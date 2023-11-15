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
    
    const targetClassName1 = 'ytp-ad-skip-button.ytp-button';
    const targetClassName2 = 'ytp-ad-skip-button-modern.ytp-button';
    
    clickButtonByClassName(targetClassName1);
    clickButtonByClassName(targetClassName2);
})();
