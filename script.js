const cafeterias = {
  "Belgrano": [
    {
      "nombre": "Nucha",
      "direccion": "O'higgins 1400",
      "barrio": "Belgrano",
      "tipo_caf":"para tomar en el local"
    },
  ],

  "Monserrat": [
    {
      "nombre": "El Gato Negro",
      "direccion": "Av. Corrientes 1669",
      "barrio": "Monserrat",
      "tipo_caf":"venta de granos"
    },
    {
      "nombre": "La Poesía",
      "direccion": "Chile 502",
      "barrio": "Monserrat",
      "tipo_caf":"venta de granos"
    },
  ],

  "Palermo": [
    {
      "nombre": "Café Registrado",
      "direccion": "Costa Rica 5901",
      "barrio": "Palermo",
      "tipo_caf":"venta de granos"
    },
    {
      "nombre": "Lattente",
      "direccion": "Thames 1891",
      "barrio": "Palermo",
      "tipo_caf":"para tomar en el local"
    },
    {
      "nombre": "Vive Café",
      "direccion": "Costa Rica 5772",
      "barrio": "Palermo",
      "tipo_caf":"venta de granos"
    },
  ],
  
  "Puerto Madero": [
    {
      "nombre": "Old day's",
      "direccion": "Olga Cossettini 1182",
      "barrio": "Puerto madero",
      "tipo_caf":"take away"
    }
  ],
  
  "Recoleta": [
    {
      "nombre": "FOKO Recoleta",
      "direccion": "Arenales 2630",
      "barrio": "Recoleta",
      "tipo_caf":"venta de granos"
    },
    {
      "nombre": "PANI",
      "direccion": "Vicente López 2056",
      "barrio": "Recoleta",
      "tipo_caf":"para tomar en el local"
    },
    {
      "nombre": "Delicius Café",
      "direccion": "Laprida 2015",
      "barrio": "Recoleta",
      "tipo_caf":"para tomar en el local"
    },
  ],

  "San Nícolas": [
    {
      "nombre": "Café Tortoni",
      "direccion": "Av. de Mayo 825",
      "barrio": "San Nícolas",
      "tipo_caf":"venta de granos"
    },
    
    {
      "nombre": "London City",
      "direccion": "Av, de Mayo 599",
      "barrio": "San Nícolas",
      "tipo_caf":"para tomar en el local"
    },
  ],

  "San Telmo": [
    {
      "nombre": "Coffee Town",
      "direccion": "Bolivar 976",
      "barrio": "San Telmo",
      "tipo_caf":"take away"
    },
  ]
}

//--------------------------------------------------------------------

llenar_form()
cargar_cafeterias()

function llenar_form() {

  var form_html = document.getElementById("form_lugares")

  for (var clave in cafeterias) {

    form_html.innerHTML += `<option value="${clave}">${clave}</option>`
  }
}

function cargar_cafeterias() {

  var cont_tarjetas = document.getElementById("cont-res")
  document.getElementById("lugar_act").innerHTML  = `Todas las cafeterías`  
  
  for (var value in cafeterias){ 
  
    for (var i = 0; i < cafeterias[value].length; i++) {

      crear_contenido(cafeterias[value][i], cont_tarjetas)
      
    }
  }
}

$('#form_lugares').change(function() {

  var cont_tarjetas = document.getElementById("cont-res")
	var filter = $(this).val();
	filterList(filter, cont_tarjetas);
});

function filterList(value, cont) {
  
  cont.innerHTML = `` 
  
  if (value == "All") {

    cargar_cafeterias()

  } else {

    document.getElementById("lugar_act").innerHTML  = `${value}`
    
    cafeterias[value].forEach(element => {
      
      crear_contenido(element, cont)  
    });
    
  }
}

function crear_contenido(elem, cont_tarjetas) {

  cont_tarjetas.innerHTML +=  `
        
    <div class="d-flex cafeterias flex-column d-none d-md-block">  
      <img src="rsc/icon/${elem.tipo_caf}.png" width="50%" alt="${elem.tipo_caf}" class="img-fluid align-self-center"> 
      <hr>
      <h3>${elem.nombre}</h3>
      <p>${elem.direccion}</p>
    </div>     

    <div class="col-10 cafeterias-card d-sm-block d-md-none">  
      <div class="row cont-card">
        <div class="col-8">  
          <h3>${elem.nombre}</h3>
          <hr>     
          <p>${elem.direccion}</p>
        </div>
        <div class="col-4 align-self-center">  
          <img src="rsc/icon/${elem.tipo_caf}.png" alt="${elem.tipo_caf}" class="img-fluid">
        </div>
      </div>
    </div>  
  `
}