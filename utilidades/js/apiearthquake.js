var fecha = new Date();
var horamenos = fecha.getFullYear() + '-' + fecha.getMonth() + '-0' + fecha.getDay() + 'T' + (fecha.getHours() - 1) + ':' + fecha.getMinutes() + ':' + fecha.getSeconds() + '-06:00';
$.ajax({
    url: 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=' + horamenos,
    dataType: 'json',
    success: function (data) {
        var caja = document.getElementById('caja');
        var text = 'lugar, magnitud, coordenadas, horas<br>';
        const tamanio = Object.keys(data.features).length;
        for (var i = 1; i <= tamanio - 1; i++) {
            var dia = new Date(data.features[0].properties.time);
            text += data.features[i].properties.place + ', ' + data.features[i].properties.mag + ', ' + data.features[i].geometry.coordinates + ', ' + dia.toString() + '<br>'
        }
        caja.innerHTML = `${text}`;
    }
});
/*
         var caja = document.getElementById('caja');
        var text = `<table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Lugar</th>
                          <th scope="col">Magnitud</th>
                          <th scope="col">Coordenadas</th>
                          <th scope="col">Horas</th>
                        </tr>
                      </thead>
                      <tbody>`;
        const tamanio = Object.keys(data.features).length;
        for (var i = 1; i <= tamanio - 1; i++) {
              var dia = new Date(data.features[0].properties.time);
            text += ` <tr><td>`+data.features[i].properties.place+'</td><td>'+data.features[i].properties.mag+'</td><td>'+data.features[i].geometry.coordinates+'</td><td>'+ dia.toString()+'</td></tr>'
        }
        text += ` </tbody>
                </table>`;
        caja.innerHTML = `${text}`;
*/
