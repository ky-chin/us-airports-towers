// map object.
var mymap = L.map('map', {
    center: [39.8283, 98.5795],
    zoom: 3,
    maxZoom: 10,
    minZoom: 2,
    detectRetina: true});

// base map
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);

// Add control towers GeoJSON Data
// Null variable that will hold control tower data
var airports = null;


// set color ramp
var colors = chroma.scale('RdYlGn').mode('lch').colors(9);

// assign color to markers
for (i = 0; i < 9; i++) {
    $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 15px; text-shadow: 0 0 3px #ffffff;} </style>"));
}

// Get GeoJSON and put on it on the map when it loads
// popup function added to display info on each cell tower when clicked
cellTowers= L.geoJson.ajax("assets/airports.geojson", {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.CNTL_TWR);
    },
    pointToLayer: function (feature, latlng) {
        var id = 0;
        if (feature.properties.CNTL_TWR == "Y") { id = 0; }
        else { id = 8;} // "Salem Cellular"
        return L.marker(latlng, {icon: L.divIcon({className: 'fa fa-plane marker-color-' + (id + 1).toString() })});
    },
    attribution: 'US Airports &copy; Data.gov | US States &copy; Mike Bostock (D3) | Base Map &copy; CartoDB | Made By Kelsey Chin'
}).addTo(mymap);


//base map color ramp set
colors = chroma.scale('OrRd').colors(5); //colors = chroma.scale('RdPu').colors(5);

function setColor(density) {
    var id = 0;
    if (density > 18) { id = 4; }
    else if (density > 13 && density <= 18) { id = 3; }
    else if (density > 10 && density <= 13) { id = 2; }
    else if (density > 5 &&  density <= 10) { id = 1; }
    else  { id = 0; }
    return colors[id];
}


// style function for airport density
function style(feature) {
    return {
        fillColor: setColor(feature.properties.count),
        fillOpacity: 0.4,
        weight: 2,
        opacity: 1,
        color: '#b4b4b4',
        dashArray: '4'
    };
}

// Add state polygons
// create USStates variable, and assign null to it.
var USStates = null;
USStates = L.geoJson.ajax("assets/us-states.geojson", {
    style: style
}).addTo(mymap);


// 9. Create Leaflet Control Object for Legend
var legend = L.control({position: 'topright'});

// 10. Function that runs when legend is added to map
legend.onAdd = function () {

    // Create Div Element and Populate it with HTML
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<b># Airports</b><br />';
    div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p>19+</p>';
    div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p>14-18</p>';
    div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p>11-13</p>';
    div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p> 6-10</p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p> 0- 5</p>';
    div.innerHTML += '<hr><b>Has Control Tower<b><br />';
    div.innerHTML += '<i class="fa fa-plane marker-color-1"></i><p> Yes</p>';
    div.innerHTML += '<i class="fa fa-plane marker-color-2"></i><p> No</p>';

    // Return the Legend div containing the HTML content
    return div;
};

// 11. Add a legend to map
legend.addTo(mymap);

// 12. Add a scale bar to map
L.control.scale({position: 'bottomleft'}).addTo(mymap);
