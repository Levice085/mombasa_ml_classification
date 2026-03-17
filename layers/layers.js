ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([39.507513, -4.153201, 39.959914, -3.907867]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_mombasa_predicted_landcover_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'mombasa_predicted_landcover<br />\
    <img src="styles/legend/mombasa_predicted_landcover_1_0.png" /> Water<br />\
    <img src="styles/legend/mombasa_predicted_landcover_1_1.png" /> Built-up areas<br />\
    <img src="styles/legend/mombasa_predicted_landcover_1_2.png" /> Vegetation<br />\
    <img src="styles/legend/mombasa_predicted_landcover_1_3.png" /> Bareground<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/mombasa_predicted_landcover_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [39.552193, -4.152462, 39.772370, -3.918811]
        })
    });

lyr_GoogleMaps_0.setVisible(true);lyr_mombasa_predicted_landcover_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_mombasa_predicted_landcover_1];
