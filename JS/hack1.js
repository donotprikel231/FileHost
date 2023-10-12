(function() {
    'use strict';

    // Delete the element with class "preview-slot"
    var previewSlot = document.querySelector('.ytp-ad-preview-slot');
    if (previewSlot) {
        previewSlot.remove();
    }

    // Change the display property of elements with class "button-slot" to "flex"
    var buttonSlots = document.querySelectorAll('.ytp-ad-skip-button-slot');
    buttonSlots.forEach(function(buttonSlot) {
        buttonSlot.style.display = 'flex';
    });

    // Change the display property of elements with class "button-container" to "flex"
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

    // Replace 'your-button-class' with the actual class name of the button you want to click
    const targetClassName = 'ytp-ad-skip-button.ytp-button';

    // Execute the click function
    clickButtonByClassName(targetClassName);
})();
