var map = L.map('map').setView([23.8103, 90.4125], 12);
    var userMarker;

    function addTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap | © Crime Map'
        }).addTo(map);
    }

    function setMapView(lat, lng, zoomLevel = 13, showMarker = false) {
        map.setView([lat, lng], zoomLevel);
        if (showMarker) {
            if (userMarker) {
                userMarker.setLatLng([lat, lng]);
            } else {
                userMarker = L.marker([lat, lng]).addTo(map)
                    .bindPopup('You are here!')
                    .openPopup();
            }
        }
    }

    function onLocationSuccess(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        setMapView(lat, lng, 13, true);
    }

    function onLocationError() {
        alert('Unable to retrieve your location. Defaulting to Dhaka.');
        setMapView(23.8103, 90.4125, 13);
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError);
        } else {
            alert('Geolocation is not supported by this browser.');
            setMapView(23.8103, 90.4125, 13);
        }
    }

    function addCrimeMarkers() {
        crimeReports.forEach(report => {
            const fields = report.fields; // Access fields directly
            const coordinates = [fields.latitude, fields.longitude]; // Create an array with latitude and longitude
            const intensity = fields.intensity; // Get intensity
    
            // Check for valid coordinates
            if (fields.latitude !== undefined && fields.longitude >= -180 && fields.longitude <= 180) {
                L.circleMarker(coordinates, {
                    radius: 18,
                    color: getMarkerColor(intensity),
                    fillColor: getMarkerColor(intensity),
                    fillOpacity: 0.2
                }).addTo(map).bindPopup(`${fields.crime_type} reported in ${fields.location} (Intensity: ${intensity})`);
            } else {
                console.error(`Invalid coordinates for report:`, report);
            }
        });
    }
    

    function getMarkerColor(intensity) {
        if (intensity === 1) return 'green';
        if (intensity === 2) return 'yellow';
        if (intensity === 3) return 'orange';
        if (intensity === 4) return 'red';
        if (intensity === 5) return 'darkred';
    }

    addTileLayer();
    getLocation();
    addCrimeMarkers();

    document.getElementById('locate-btn').addEventListener('click', function() {
        getLocation();
    });