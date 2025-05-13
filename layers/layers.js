var wms_layers = [];


        var lyr_Indonesia_0 = new ol.layer.Tile({
            'title': 'Indonesia',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Nusa_Tenggara_1 = new ol.format.GeoJSON();
var features_Nusa_Tenggara_1 = format_Nusa_Tenggara_1.readFeatures(json_Nusa_Tenggara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nusa_Tenggara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nusa_Tenggara_1.addFeatures(features_Nusa_Tenggara_1);
var lyr_Nusa_Tenggara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nusa_Tenggara_1, 
                style: style_Nusa_Tenggara_1,
                popuplayertitle: 'Nusa_Tenggara',
                interactive: true,
                title: '<img src="styles/legend/Nusa_Tenggara_1.png" /> Nusa_Tenggara'
            });
var format_Bali_2 = new ol.format.GeoJSON();
var features_Bali_2 = format_Bali_2.readFeatures(json_Bali_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bali_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bali_2.addFeatures(features_Bali_2);
var lyr_Bali_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bali_2, 
                style: style_Bali_2,
                popuplayertitle: 'Bali',
                interactive: true,
                title: '<img src="styles/legend/Bali_2.png" /> Bali'
            });
var format_Jawa_3 = new ol.format.GeoJSON();
var features_Jawa_3 = format_Jawa_3.readFeatures(json_Jawa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jawa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jawa_3.addFeatures(features_Jawa_3);
var lyr_Jawa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jawa_3, 
                style: style_Jawa_3,
                popuplayertitle: 'Jawa',
                interactive: true,
                title: '<img src="styles/legend/Jawa_3.png" /> Jawa'
            });
var format_LokasiKHDTK_4 = new ol.format.GeoJSON();
var features_LokasiKHDTK_4 = format_LokasiKHDTK_4.readFeatures(json_LokasiKHDTK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiKHDTK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiKHDTK_4.addFeatures(features_LokasiKHDTK_4);
var lyr_LokasiKHDTK_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiKHDTK_4, 
                style: style_LokasiKHDTK_4,
                popuplayertitle: 'Lokasi KHDTK',
                interactive: true,
                title: '<img src="styles/legend/LokasiKHDTK_4.png" /> Lokasi KHDTK'
            });

lyr_Indonesia_0.setVisible(true);lyr_Nusa_Tenggara_1.setVisible(true);lyr_Bali_2.setVisible(true);lyr_Jawa_3.setVisible(true);lyr_LokasiKHDTK_4.setVisible(true);
var layersList = [lyr_Indonesia_0,lyr_Nusa_Tenggara_1,lyr_Bali_2,lyr_Jawa_3,lyr_LokasiKHDTK_4];
lyr_Nusa_Tenggara_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Bali_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jawa_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_LokasiKHDTK_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Lokasi_1': 'Lokasi Pemerintahan', 'LokasiKawa': 'Lokasi Kawasan', 'Nama': 'Nama', 'Koordina_1': 'Koordinat', 'Luas': 'Luas', 'SK_1': 'SK Penetapan', 'Foto': 'Foto', 'Peta': 'Peta', });
lyr_Nusa_Tenggara_1.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'PROV': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Bali_2.set('fieldImages', {'OBJECTID': 'Hidden', 'PROV': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Jawa_3.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'PROV': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_LokasiKHDTK_4.set('fieldImages', {'OBJECTID': 'Hidden', 'Id': 'Hidden', 'Lokasi_1': 'TextEdit', 'LokasiKawa': 'TextEdit', 'Nama': 'TextEdit', 'Koordina_1': 'TextEdit', 'Luas': 'TextEdit', 'SK_1': 'TextEdit', 'Foto': 'ExternalResource', 'Peta': 'ExternalResource', });
lyr_Nusa_Tenggara_1.set('fieldLabels', {'PROV': 'no label', });
lyr_Bali_2.set('fieldLabels', {});
lyr_Jawa_3.set('fieldLabels', {});
lyr_LokasiKHDTK_4.set('fieldLabels', {'Lokasi_1': 'inline label - always visible', 'LokasiKawa': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Koordina_1': 'inline label - always visible', 'Luas': 'inline label - always visible', 'SK_1': 'inline label - always visible', 'Foto': 'no label', 'Peta': 'no label', });
lyr_LokasiKHDTK_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});