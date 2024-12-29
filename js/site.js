window.focusElement = (selector) => {
    try {
        // Try direct selector first
        let element = document.querySelector(selector);

        // If not found and it looks like a tabindex selector, try finding by tabindex
        if (!element && selector.includes('tabindex')) {
            const tabIndex = selector.match(/\d+/);
            if (tabIndex) {
                element = document.querySelector(`input[tabindex="${tabIndex[0]}"]`);
            }
        }

        if (element) {
            element.focus();
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error in focusElement:', error);
        return false;
    }
};
