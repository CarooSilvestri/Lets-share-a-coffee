const cafeterias = {


     cafe1:   {
            "nombre": "Old day's",
            "direccion": "Olga Cossettini 1182, Buenos Aires"
        }
}

var cont = document.getElementById("cont-res")

for (const elem in cafeterias) {

    cont.innerHTML +=  `
        
        <div class="col-sm-12 col-md-6 col-lg-4 cafeterias">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-9">
                <h2>${elem.nombre}</h2>
                <hr>
                <p>
                    ${elem.dirección}
                </p>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-3 align-self-center">
                <img src="rsc/icon/Taza.png" width="100%">
            </div>
        </div>
    </div>
    `
}
