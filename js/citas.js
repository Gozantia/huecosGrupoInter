async function getData() {
  const response = await fetch("/data/Store.csv");
  const data = await response.text();
  let resp = [];
  const rows = data.split("\n").slice(1);
  rows.forEach((eltRow) => {
    const row = eltRow.split(",");
    const obj = {
      ciudad: row[2],
      nombre: row[0],
      dir: row[1],
      tel: row[3],
    };
    resp.push(obj);
  });
  return resp;
}

let locales = [];
let ciudad = [];
let uniCiudad = [];
let uniLocal = [];

const list1 = document.getElementById("ciudadCampo");
const list2 = document.getElementById("localCampo");

getData().then((resp) => {
  // console.log("RESp", resp)

  locales = resp;
  //  console.log(resp)

  for (let i = 0; i < locales.length; i++) {
    let a = locales[i].ciudad;
    let b = locales[i].nombre + ": " + locales[i].dir;
    ciudad.push(a);
    uniLocal.push(b);
  }

  for (let i = 0; i < ciudad.length; i++) {
    if (uniCiudad.indexOf(ciudad[i]) === -1) {
      uniCiudad.push(ciudad[i]);
    }
  }

  for (let i = 0; i < uniCiudad.length; i++) {
    option = document.createElement("option");
    option.setAttribute("value", uniCiudad[i]);
    option.setAttribute("id", locales[i].ciudad);
    option.appendChild(document.createTextNode(uniCiudad[i]));
    list1.appendChild(option);
  }
});

function checkSelectors(ciudad) {
  if (document.getElementById("ciudadCampo").value == `${ciudad}`) {
    for (let i = 0; i < uniLocal.length; i++) {
      if (locales[i].ciudad == `${ciudad}`) {
        option = document.createElement("option");
        option.setAttribute("value", uniLocal[i]);
        option.appendChild(document.createTextNode(uniLocal[i]));
        list2.appendChild(option);
      }
    }
  }
}

function getSelectionValue() {
  list2.innerHTML = "";
  checkSelectors("ARMENIA");
  checkSelectors("BELLO");
  checkSelectors("BOGOTÁ");
  checkSelectors("NEIVA");
  for (let i = 0; i < uniCiudad.length; i++) {
    checkSelectors(uniCiudad[i]);
  }
}
