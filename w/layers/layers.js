var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_const_0 = new ol.format.GeoJSON();
var features_const_0 = format_const_0.readFeatures(json_const_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_const_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_const_0.addFeatures(features_const_0);var lyr_const_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_const_0, 
                style: style_const_0,
                title: '<img src="styles/legend/const_0.png" /> const'
            });var format_fo_1 = new ol.format.GeoJSON();
var features_fo_1 = format_fo_1.readFeatures(json_fo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fo_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_fo_1.addFeatures(features_fo_1);var lyr_fo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fo_1, 
                style: style_fo_1,
                title: '<img src="styles/legend/fo_1.png" /> fo'
            });var format_cto_2 = new ol.format.GeoJSON();
var features_cto_2 = format_cto_2.readFeatures(json_cto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cto_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cto_2.addFeatures(features_cto_2);var lyr_cto_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cto_2, 
                style: style_cto_2,
                title: '<img src="styles/legend/cto_2.png" /> cto'
            });var format_em_3 = new ol.format.GeoJSON();
var features_em_3 = format_em_3.readFeatures(json_em_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_em_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_em_3.addFeatures(features_em_3);var lyr_em_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_em_3, 
                style: style_em_3,
                title: '<img src="styles/legend/em_3.png" /> em'
            });

lyr_const_0.setVisible(true);lyr_fo_1.setVisible(true);lyr_cto_2.setVisible(true);lyr_em_3.setVisible(true);
var layersList = [baseLayer,lyr_const_0,lyr_fo_1,lyr_cto_2,lyr_em_3];
lyr_const_0.set('fieldAliases', {'MAPA': 'MAPA', 'DELEGACIO': 'DELEGACIO', 'MUNICIPIO': 'MUNICIPIO', 'MASA': 'MASA', 'PARCELA': 'PARCELA', 'HOJA': 'HOJA', 'TIPO': 'TIPO', 'CONSTRU': 'CONSTRU', 'COORX': 'COORX', 'COORY': 'COORY', 'NUMSYMBOL': 'NUMSYMBOL', 'AREA': 'AREA', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'PCAT1': 'PCAT1', 'PCAT2': 'PCAT2', 'EJERCICIO': 'EJERCICIO', 'NUM_EXP': 'NUM_EXP', 'CONTROL': 'CONTROL', 'REFCAT': 'REFCAT', });
lyr_fo_1.set('fieldAliases', {'id': 'id', 'ubi': 'ubi', 'usa': 'usa', 'fibras': 'fibras', });
lyr_cto_2.set('fieldAliases', {'id': 'id', });
lyr_em_3.set('fieldAliases', {'id': 'id', });
lyr_const_0.set('fieldImages', {'MAPA': 'TextEdit', 'DELEGACIO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'MASA': 'TextEdit', 'PARCELA': 'TextEdit', 'HOJA': 'TextEdit', 'TIPO': 'TextEdit', 'CONSTRU': 'TextEdit', 'COORX': 'TextEdit', 'COORY': 'TextEdit', 'NUMSYMBOL': 'TextEdit', 'AREA': 'TextEdit', 'FECHAALTA': 'TextEdit', 'FECHABAJA': 'TextEdit', 'NINTERNO': 'TextEdit', 'PCAT1': 'TextEdit', 'PCAT2': 'TextEdit', 'EJERCICIO': 'TextEdit', 'NUM_EXP': 'TextEdit', 'CONTROL': 'TextEdit', 'REFCAT': 'TextEdit', });
lyr_fo_1.set('fieldImages', {'id': 'TextEdit', 'ubi': 'TextEdit', 'usa': 'TextEdit', 'fibras': 'TextEdit', });
lyr_cto_2.set('fieldImages', {'id': 'TextEdit', });
lyr_em_3.set('fieldImages', {'id': 'TextEdit', });
lyr_const_0.set('fieldLabels', {'MAPA': 'no label', 'DELEGACIO': 'no label', 'MUNICIPIO': 'no label', 'MASA': 'no label', 'PARCELA': 'no label', 'HOJA': 'no label', 'TIPO': 'no label', 'CONSTRU': 'no label', 'COORX': 'no label', 'COORY': 'no label', 'NUMSYMBOL': 'no label', 'AREA': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'PCAT1': 'no label', 'PCAT2': 'no label', 'EJERCICIO': 'no label', 'NUM_EXP': 'no label', 'CONTROL': 'no label', 'REFCAT': 'no label', });
lyr_fo_1.set('fieldLabels', {'id': 'no label', 'ubi': 'no label', 'usa': 'no label', 'fibras': 'no label', });
lyr_cto_2.set('fieldLabels', {'id': 'no label', });
lyr_em_3.set('fieldLabels', {'id': 'no label', });
lyr_em_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});