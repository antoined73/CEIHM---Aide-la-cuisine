function createCallback(app) {
    var app = app;
    return function (event) {
        app.$events.fire('gest-event', event.direction);
        console.log(event.direction);
    };
}

export default {
    initGest: function(Vue) {
        window.gestIsStarted = true;
        window.gest.start();
        window.gest.options.sensitivity(85);
        window.gest.options.subscribeWithCallback(createCallback(Vue));
    }
}

