var TiltControls = {
    tiltX: 0,
    tiltY: 0,
    permissionGranted: false,
    
    init: function() {
        // For non-iOS, start immediately
        if (typeof DeviceOrientationEvent === 'undefined' || 
            typeof DeviceOrientationEvent.requestPermission !== 'function') {
            TiltControls.permissionGranted = true;
            TiltControls.startListening();
        }
        // iOS permission will be requested when game starts
    },
    
    startListening: function() {
        window.addEventListener('deviceorientation', function(event) {
            TiltControls.tiltX = event.gamma;
            TiltControls.tiltY = event.beta;
        }, true);
    },
    
    getTiltX: function() {
        return TiltControls.tiltX;
    },
    
    getTiltY: function() {
        return TiltControls.tiltY;
    }
};
TiltControls.init();