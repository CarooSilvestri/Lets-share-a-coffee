const cafeterias = [
  {
    "nombre": "Old day's",
    "direccion": "Olga Cossettini 1182",
    "barrio": "Puerto madero"
  },
  {
    "nombre": "FOKO Recoleta",
    "direccion": "Arenales 2630",
    "barrio": "Recoleta"
  },
  {
    "nombre": "PANI",
    "direccion": "Vicente López 2056",
    "barrio": "Recoleta"
  },
  {
    "nombre": "El Gato Negro",
    "direccion": "Av. Corrientes 1669",
    "barrio": "Monserrat"
  },
  {
    "nombre": "Café Tortoni",
    "direccion": "Av. de Mayo 825",
    "barrio": "San Nícolas"
  },
  {
    "nombre": "Café Registrado",
    "direccion": "Costa Rica 5901",
    "barrio": "Palermo"
  },
  {
    "nombre": "Coffee Town",
    "direccion": "Bolivar 976",
    "barrio": "San Telmo"
  },
  {
    "nombre": "Vive Café",
    "direccion": "Costa Rica 5772",
    "barrio": "Palermo"
  },
  {
    "nombre": "Lattente",
    "direccion": "Thames 1891",
    "barrio": "Palermo"
  },
  {
    "nombre": "Nucha",
    "direccion": "O'higgins 1400",
    "barrio": "Belgrano"
  },
  {
    "nombre": "La Poesía",
    "direccion": "Chile 502",
    "barrio": "Monserrat"
  },
  {
    "nombre": "Delicius Café",
    "direccion": "Laprida 2015",
    "barrio": "Recoleta"
  },
  {
    "nombre": "London City",
    "direccion": "Av, de Mayo 599",
    "barrio": "San Nícolas"
  }
]
var cont = document.getElementById("cont-res")

for (let i = 0; i < cafeterias.length; i++) {
    
    cont.innerHTML +=  `
        
        <div class="d-flex cafeterias">
            <div class="col-sm-12 col-md-6 col-lg-9">
                <h2>${cafeterias[i].nombre}</h2>
                <hr>
                <p>
                    ${cafeterias[i].dirección}
                </p>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-3 align-self-center">
                <img src="rsc/icon/Taza.png" width="100%">
            </div>
        </div>
    `
}
