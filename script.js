const cafeterias = [
    {
      "nombre": "Old day's",
      "dirección": "Olga Cossettini 1182, Puerto madero"
    },
    {
      "nombre": "FOKO Recoleta",
      "dirección": "Arenales 2630, Recoleta"
    },
    {
      "nombre": "PANI",
      "dirección": "Vicente López 2056"
    },
    {
      "nombre": "El Gato Negro",
      "dirección": "Av. Corrientes 1669,"
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
