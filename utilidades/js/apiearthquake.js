var fecha = new Date();
var horamenos = fecha.getFullYear() + '-' + (fecha.getMonth() +1)+ '-' + fecha.getDay() + ' ' + (fecha.getHours() -1)+ ':' + fecha.getMinutes() + ':' + fecha.getSeconds() + '-06:00';
var ur = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=' + horamenos;
$.ajax({
    url: ur,
    dataType: 'json',
    success: function (data) {
        var caja = document.getElementById('caja');
        var text = 'lugar, magnitud, coordenadas, horas<br>';
        const tamanio = Object.keys(data.features).length;
        for (var i = 1; i <= tamanio - 1; i++) {
            var dia = new Date(data.features[i].properties.time);
            text += data.features[i].properties.place + ', ' + data.features[i].properties.mag + ', ' + data.features[i].geometry.coordinates + ', ' + dia.toString() + '<br>'
        }
        caja.innerHTML = `${text}`;
    }
});