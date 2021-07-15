// async function getData() {
//     const response = await fetch('/data/Store.csv')
//     const data = await response.text()

//     const rows = data.split('\n').slice(1)
//     rows.forEach(eltRow => {
//         const row = eltRow.split(',')
//         const ciudad = row[2]
//         const nombre = row[0]
//         const dir = row[1]
//         const tel = row[3]
//     })
//     return data
// }

// getData()

// const values = getData()

// console.log(values)

const locales = [
    {
        ciudad: "Armenia",
        nombre: "BATERICARS",
        dir: "CRA 15 CALLE 26 FRENTE AL PARQUE CAFETERO - Armenia",
        tel: "3173645090",
    },
    {
        ciudad: "Barranquilla",
        nombre: "JAIRO ECHEVERRY & CIA LTDA",
        dir: "CALLE 53 #53-66 - Barranquilla",
        tel: "(5) 3493238 - 3187755102",
    },
    {
        ciudad: "Bello",
        nombre: "CSA INTERLLANTAS ÉXITO BELLO",
        dir: "DIAGONAL 51 #35-20 C.C PUERTA DEL NORTE SÓTANO",
        tel: "Bello 3217993714",
    },
    {
        ciudad: "Bello",
        nombre: "CSA INTERLLANTAS - ÉXITO BELLO",
        dir: "DIAGONAL 51 #35-120 ÉXITO BELLO PARQUEADERO ZONA 7 - Bello",
        tel: "3217993714",
    },
    {
        ciudad: "Bogotá",
        nombre: "INVERLLANTAS",
        dir: "CALLE 29 A SUR #29C-52 - Bogotá",
        tel: "7201130-3212049684",
    },
    {
        ciudad: "Bogotá",
        nombre: "REENSUR",
        dir: "CALLE 30 SUR #32-52 BOGOTÁ D.C. - Bogotá",
        tel: "3212049684",
    },
    {
        ciudad: "Bogotá",
        nombre: "CSA INTERLLANTAS ÉXITO CALLE 80",
        dir: "CARRERA 59A #79-30 SÓTANO - Bogotá",
        tel: "3166914463",
    },
    {
        ciudad: "Bogotá",
        nombre: "CSA INTERLLANTAS ÉXITO VILLA MAYOR",
        dir: "AUTOPISTA SUR CALLE 38A SUR-07 - Bogotá",
        tel: "3166914440",
    },
    {
        ciudad: "Bogotá",
        nombre: "CSA INTERLLANTAS ÉXITO NORTE CALLE 170",
        dir: "CALLE 175 #22-13 SÓTANO - Bogotá",
        tel: "3166913544",
    },
    {
        ciudad: "Bogotá",
        nombre: "MULTILLANTAS ZONA NORTE",
        dir: "CRA 41 #195-08 - Bogotá",
        tel: "(1) 6787665",
    },
    {
        ciudad: "Bogotá",
        nombre: "DACAR PLUS",
        dir: "CRA20B #76-79 BOGOTÁ - Bogotá",
        tel: "2175156",
    },
    {
        ciudad: "Bogotá",
        nombre: "MULTILLANTAS LA SABANA",
        dir: "CALLE 195 #20-91 - Bogotá",
        tel: "6701311",
    },
    {
        ciudad: "Bogotá",
        nombre: "LLANTAS BETO",
        dir: "CRA 28 #8-31 - Bogotá",
        tel: "PBX:3700474",
    },
    {
        ciudad: "Bogotá",
        nombre: "AL LLANTAS LTDA.",
        dir: "AV. BOYACÁ #37-02 SUR - Bogotá",
        tel: "PBX:(1)4513681-3102878457",
    },
    {
        ciudad: "Neiva",
        nombre: "LLANTAS DEL SUR",
        dir: "CALLE 2A SUR #7-96 LOCAL 4 - ESTACIÓN COOMOTOR - Neiva",
        tel: "(8) 8703101",
    },
    {
        ciudad: "Maicao",
        nombre: "LLANTAS EL MONO",
        dir: "CALE 11 #7-83 - Maicao",
        tel: "7254420 - 3135006690",
    },
    {
        ciudad: "Medellín",
        nombre: "SERVILLANTAS LA 57",
        dir: "CALLE 60 #55-22 - Medellín",
        tel: "4480130",
    },
    {
        ciudad: "Cúcuta",
        nombre: "CENTRO DE LUBRICACIÓN LA GRAN ESQUINA",
        dir: "Calle 3 #3-90 - Cúcuta",
        tel: "5743116 - 3133373476",
    },
    {
        ciudad: "Bogotá",
        nombre: "INVERLLANTAS",
        dir: "CALLE 29 A SUR #29C-52 - Bogotá",
        tel: "7201130-3212049684",
    },
    {
        ciudad: "Medellín",
        nombre: "EURO TECNICENTRO",
        dir: "CRA 52 #35-66 - Medellín",
        tel: "4447190",
    },
    {
        ciudad: "Bogotá",
        nombre: "REENSUR",
        dir: "CALLE 30 SUR #32-52 BOGOTÁ D.C. - Bogotá",
        tel: "3212049684",
    },
    {
        ciudad: "Montería",
        nombre: "CSA ARCÁNGEL",
        dir: "CALLE 78 VÍA SEGUNDO ANILLO VIAL NORTE-SUR - Montería",
        tel: "(4) 7851747-3114114174",
    },
    {
        ciudad: "Villavicencio",
        nombre: "MERQUELLANTAS",
        dir: "CARRERA 1 #18-05 - Villavicencio",
        tel: "3227289947",
    },
    {
        ciudad: "Valledupar",
        nombre: "MERQUELLANTAS",
        dir: "CARRERA 7 #28-04 - Valledupar",
        tel: "3102097884",
    },
    {
        ciudad: "Ibagué",
        nombre: "MERQUELLANTAS",
        dir: "CARRERA 20 AV- AMBALÁ #36-27 - Ibagué",
        tel: "3124039413",
    },
    {
        ciudad: "Duitama",
        nombre: "CSA DUITAMA",
        dir: "AVENIDA DE LAS AMÉRICAS #27-11 - Duitama",
        tel: "3104149206",
    },
    {
        ciudad: "Bello",
        nombre: "CSA INTERLLANTAS ÉXITO BELLO",
        dir: "DIAGONAL 51 #35-20 C.C PUERTA DEL NORTE SÓTANO - Bello",
        tel: "3217993714",
    },
    {
        ciudad: "Medellín",
        nombre: "CSA INTERLLANTAS POBLADO",
        dir: "CRA 43A #25A-66 AV. POBLADO POR EL CENTRO AUTOMOTRIZ - Medellín",
        tel: "313 716 84 85 - 322 95 16 ",
    },
    {
        ciudad: "Bogotá",
        nombre: "CSA INTERLLANTAS ÉXITO CALLE 80",
        dir: "CARRERA 59A #79-30 SÓTANO - Bogotá",
        tel: "3166914463",
    },
    {
        ciudad: "Bogotá",
        nombre: "CSA INTERLLANTAS ÉXITO VILLA MAYOR",
        dir: "AUTOPISTA SUR CALLE 38A SUR-07 - Bogotá",
        tel: "3166914440",
    },
    {
        ciudad: "Bogotá",
        nombre: "CSA INTERLLANTAS ÉXITO NORTE CALLE 170",
        dir: "CALLE 175 #22-13 SÓTANO - Bogotá",
        tel: "3166913544",
    },
    {
        ciudad: "Tunja",
        nombre: "CASARANA BOUTIQUE",
        dir: "CENTRO EMPRESARIAL GREEN HILLS AV. UNIVERSITARIA 75A-00 - Tunja",
        tel: "(8) 7459815",
    },
    {
        ciudad: "Santa Marta",
        nombre: "LLANTAS EL MONO",
        dir: "CALLE 10 #12-03 ED. MIRAFLORES ZONA CENTRO - SANTA MARTA - Santa Marta",
        tel: "4372097 - 3116225585",
    },
    {
        ciudad: "Barranquilla",
        nombre: "JAIRO ECHEVERRY & CIA LTDA",
        dir: "CALLE 53 #53-66 - Barranquilla",
        tel: "(5) 3493238 - 3187755102",
    },
    {
        ciudad: "Cartagena",
        nombre: "LLANTAS MALLARINO",
        dir: "PIE DEL CERRO CALLE 30 #14-27 - Cartagena",
        tel: "6665104 - 3126226072",
    },
    {
        ciudad: "Sincelejo",
        nombre: "INTERLLANTAS SINCELEJO",
        dir: "CALLE 25A #28-73 - Sincelejo",
        tel: "(5) 2800258 - 3148272408",
    },
    {
        ciudad: "Montería",
        nombre: "SU LLANTA DEL NORTE",
        dir: "CALLE 41 #8-37 - Montería ",
        tel: "7811000 - 3145961298",
    },
    {
        ciudad: "Pasto",
        nombre: "BATERICARS",
        dir: "CRA 14 #16a-02 AV. JULIAN BUCHELY - Pasto",
        tel: "3177226956",
    },
    {
        ciudad: "Armenia",
        nombre: "BATERICARS",
        dir: "CRA 15 CALLE 26 FRENTE AL PARQUE CAFETERO - Armenia",
        tel: "3173645090",
    },
    {
        ciudad: "Pasto",
        nombre: "BATERICARS",
        dir: "CRA 14 #17-02 AV. CHAMPAGNAT - Pasto",
        tel: "317 442 3475",
    },
    {
        ciudad: "Pasto",
        nombre: "BATERICARS",
        dir: "PARQUEADERO ÉXITO AV. PANAMERICANA - Pasto",
        tel: "317 442 3620",
    },
    {
        ciudad: "Ipiales",
        nombre: "BATERICARS",
        dir: "CRA 1A #12-106 - Ipiales",
        tel: "3174423533",
    },
    {
        ciudad: "Ibagué",
        nombre: "BATERICARS",
        dir: "CRA 5ta #79-28 EL JARDÍN - Ibagué",
        tel: "3177226956",
    },
    {
        ciudad: "Ibagué",
        nombre: "MULTILLANTAS LA MESA",
        dir: "CALLE 4 # 27A- 62 BARRIO LA CEIBA - La Mesa",
        tel: "3138868169",
    },
    {
        ciudad: "Ibagué",
        nombre: "MULTILLANTAS ZONA NORTE",
        dir: "CALLE 4 # 27A- 62 BARRIO LA CEIBA - La Mesa",
        tel: "3138868169",
    },

]

const list1 = document.getElementById('list-1')
const list2 = document.getElementById('list-2')

let ciudad = []

let uniCiudad = []

let uniLocal = []

for (let i = 0; i < locales.length; i++) {
    let a = locales[i].ciudad
    let b = locales[i].nombre + ": " + locales[i].dir
    ciudad.push(a)
    uniLocal.push(b)
}


for (let i = 0; i < ciudad.length; i++) {
    if (uniCiudad.indexOf(ciudad[i]) === -1) {
        uniCiudad.push(ciudad[i])
    }
}


for (let i = 0; i < uniCiudad.length; i++) {
    option = document.createElement('option');
    option.setAttribute('value', uniCiudad[i]);
    option.setAttribute('id', locales[i].ciudad);
    option.appendChild(document.createTextNode(uniCiudad[i]));
    list1.appendChild(option);
}

function getSelectionValue() {
    var selectectValue = document.getElementById('list-1').value
    list2.innerHTML = ""
    if (document.getElementById('list-1').value == 'Armenia') {
        for (let i = 0; i < uniLocal.length; i++) {
            if (locales[i].ciudad == "Armenia") {
                option = document.createElement('option');
                option.setAttribute('value', uniLocal[i]);
                option.appendChild(document.createTextNode(uniLocal[i]));
                list2.appendChild(option);
            }
        }
    }
    if (document.getElementById('list-1').value == 'Barranquilla') {
        for (let i = 0; i < uniLocal.length; i++) {
            if (locales[i].ciudad == "Barranquilla") {
                option = document.createElement('option');
                option.setAttribute('value', uniLocal[i]);
                option.appendChild(document.createTextNode(uniLocal[i]));
                list2.appendChild(option);
            }
        }
    }
    if (document.getElementById('list-1').value == 'Bello') {
        for (let i = 0; i < uniLocal.length; i++) {
            if (locales[i].ciudad == "Bello") {
                option = document.createElement('option');
                option.setAttribute('value', uniLocal[i]);
                option.appendChild(document.createTextNode(uniLocal[i]));
                list2.appendChild(option);
            }
        }
    }
    if (document.getElementById('list-1').value == 'Bogotá') {
        for (let i = 0; i < uniLocal.length; i++) {
            if (locales[i].ciudad == "Bogotá") {
                option = document.createElement('option');
                option.setAttribute('value', uniLocal[i]);
                option.appendChild(document.createTextNode(uniLocal[i]));
                list2.appendChild(option);
            }
        }
    }
}
