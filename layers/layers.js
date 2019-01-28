var wms_layers = [];
var format_parcela_0 = new ol.format.GeoJSON();
var features_parcela_0 = format_parcela_0.readFeatures(json_parcela_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcela_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_parcela_0.addFeatures(features_parcela_0);var lyr_parcela_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcela_0, 
                style: style_parcela_0,
                title: '<img src="styles/legend/parcela_0.png" /> parcela'
            });var format_uuiiparcela_1 = new ol.format.GeoJSON();
var features_uuiiparcela_1 = format_uuiiparcela_1.readFeatures(json_uuiiparcela_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uuiiparcela_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_uuiiparcela_1.addFeatures(features_uuiiparcela_1);var lyr_uuiiparcela_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uuiiparcela_1, 
                style: style_uuiiparcela_1,
                title: '<img src="styles/legend/uuiiparcela_1.png" /> uuii parcela'
            });var format_Pegadoery_2 = new ol.format.GeoJSON();
var features_Pegadoery_2 = format_Pegadoery_2.readFeatures(json_Pegadoery_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pegadoery_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pegadoery_2.addFeatures(features_Pegadoery_2);var lyr_Pegadoery_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pegadoery_2, 
                style: style_Pegadoery_2,
                title: '<img src="styles/legend/Pegadoery_2.png" /> Pegadoery'
            });var format_dfyjkdshfk_3 = new ol.format.GeoJSON();
var features_dfyjkdshfk_3 = format_dfyjkdshfk_3.readFeatures(json_dfyjkdshfk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dfyjkdshfk_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_dfyjkdshfk_3.addFeatures(features_dfyjkdshfk_3);var lyr_dfyjkdshfk_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dfyjkdshfk_3, 
                style: style_dfyjkdshfk_3,
                title: '<img src="styles/legend/dfyjkdshfk_3.png" /> dfyjkdshfk,'
            });var format_cpd_4 = new ol.format.GeoJSON();
var features_cpd_4 = format_cpd_4.readFeatures(json_cpd_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cpd_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cpd_4.addFeatures(features_cpd_4);var lyr_cpd_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cpd_4, 
                style: style_cpd_4,
                title: '<img src="styles/legend/cpd_4.png" /> cpd'
            });

lyr_parcela_0.setVisible(true);lyr_uuiiparcela_1.setVisible(true);lyr_Pegadoery_2.setVisible(true);lyr_dfyjkdshfk_3.setVisible(true);lyr_cpd_4.setVisible(true);
var layersList = [lyr_parcela_0,lyr_uuiiparcela_1,lyr_Pegadoery_2,lyr_dfyjkdshfk_3,lyr_cpd_4];
lyr_parcela_0.set('fieldAliases', {'id': 'id', 'mapa': 'mapa', 'delegacio': 'delegacio', 'municipio': 'municipio', 'masa': 'masa', 'hoja': 'hoja', 'tipo': 'tipo', 'parcela': 'parcela', 'coorx': 'coorx', 'coory': 'coory', 'via': 'via', 'numero': 'numero', 'numerodup': 'numerodup', 'numsymbol': 'numsymbol', 'area': 'area', 'fechaalta': 'fechaalta', 'fechabaja': 'fechabaja', 'ninterno': 'ninterno', 'pcat1': 'pcat1', 'pcat2': 'pcat2', 'ejercicio': 'ejercicio', 'num_exp': 'num_exp', 'control': 'control', 'refcat': 'refcat', });
lyr_uuiiparcela_1.set('fieldAliases', {'MUNICIPIO': 'MUNICIPIO', 'MASA': 'MASA', 'VIA': 'VIA', 'NUMERO': 'NUMERO', 'AREA': 'AREA', 'REFCAT': 'REFCAT', 'uuii': 'uuii', });
lyr_Pegadoery_2.set('fieldAliases', {'Identifica': 'Identifica', 'Longitud_r': 'Longitud_r', });
lyr_dfyjkdshfk_3.set('fieldAliases', {'Identifica': 'Identifica', });
lyr_cpd_4.set('fieldAliases', {'id': 'id', });
lyr_parcela_0.set('fieldImages', {'id': 'TextEdit', 'mapa': 'TextEdit', 'delegacio': 'TextEdit', 'municipio': 'TextEdit', 'masa': 'TextEdit', 'hoja': 'TextEdit', 'tipo': 'TextEdit', 'parcela': 'TextEdit', 'coorx': 'TextEdit', 'coory': 'TextEdit', 'via': 'TextEdit', 'numero': 'TextEdit', 'numerodup': 'TextEdit', 'numsymbol': 'TextEdit', 'area': 'TextEdit', 'fechaalta': 'TextEdit', 'fechabaja': 'TextEdit', 'ninterno': 'TextEdit', 'pcat1': 'TextEdit', 'pcat2': 'TextEdit', 'ejercicio': 'TextEdit', 'num_exp': 'TextEdit', 'control': 'TextEdit', 'refcat': 'TextEdit', });
lyr_uuiiparcela_1.set('fieldImages', {'MUNICIPIO': 'TextEdit', 'MASA': 'TextEdit', 'VIA': 'TextEdit', 'NUMERO': 'TextEdit', 'AREA': 'TextEdit', 'REFCAT': 'TextEdit', 'uuii': 'TextEdit', });
lyr_Pegadoery_2.set('fieldImages', {'Identifica': 'TextEdit', 'Longitud_r': 'TextEdit', });
lyr_dfyjkdshfk_3.set('fieldImages', {'Identifica': 'TextEdit', });
lyr_cpd_4.set('fieldImages', {'id': 'TextEdit', });
lyr_parcela_0.set('fieldLabels', {'id': 'no label', 'mapa': 'no label', 'delegacio': 'no label', 'municipio': 'no label', 'masa': 'no label', 'hoja': 'no label', 'tipo': 'no label', 'parcela': 'no label', 'coorx': 'no label', 'coory': 'no label', 'via': 'no label', 'numero': 'no label', 'numerodup': 'no label', 'numsymbol': 'no label', 'area': 'no label', 'fechaalta': 'no label', 'fechabaja': 'no label', 'ninterno': 'no label', 'pcat1': 'no label', 'pcat2': 'no label', 'ejercicio': 'no label', 'num_exp': 'no label', 'control': 'no label', 'refcat': 'no label', });
lyr_uuiiparcela_1.set('fieldLabels', {'MUNICIPIO': 'no label', 'MASA': 'no label', 'VIA': 'no label', 'NUMERO': 'no label', 'AREA': 'no label', 'REFCAT': 'no label', 'uuii': 'no label', });
lyr_Pegadoery_2.set('fieldLabels', {'Identifica': 'no label', 'Longitud_r': 'no label', });
lyr_dfyjkdshfk_3.set('fieldLabels', {'Identifica': 'no label', });
lyr_cpd_4.set('fieldLabels', {'id': 'no label', });
lyr_cpd_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});