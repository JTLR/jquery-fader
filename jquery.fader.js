(function($) {
    $.fn.fader = function(options) {

        // Plugin defaults
        var settings = $.extend({
            interval: 2000,
            transitionSpeed: 500,
            selector: '.fade-item'
        }, options),
                fader = this,
                currentItem = $(settings.selector + ':first-child', fader),
                nextItem = currentItem.next(settings.selector);

        if (nextItem.length < 1) {
            nextItem = $(settings.selector + ':first-child', fader);
        }

        var interval = setInterval(function() {
            currentItem.fadeOut(settings.transitionSpeed);
            nextItem.fadeIn(settings.transitionSpeed);
            recalculateItems(nextItem);
        }, settings.interval);

        function recalculateItems(prevNextItem) {
            currentItem = prevNextItem;
            nextItem = currentItem.next(settings.selector);
            if (nextItem.length < 1) {
                nextItem = $(settings.selector + ':first-child', fader);
            }
        }

        return fader;
    };
}(jQuery));

