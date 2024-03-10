(function () {
    'use strict';

    var API_ENDPOINT = 'https://analytics.ghuddi.co/api/event';
    var domain = document.currentScript.getAttribute('data-domain');

    function sendEvent(eventName, eventData) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', API_ENDPOINT, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ event: eventName, domain: domain, data: eventData }));
    }
    sendEvent('pageview', { path: window.location.pathname });
})();
