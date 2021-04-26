'use strict'
let duomenys = {
    "id": "0001",
    "type": "donut",
    "name": "cake",
    "ppu": 0.55,
    "topping": [
        {"id": "5001", "type": "None"},
        {"id": "5002", "type": "Glazed" },
        {"id": "5005", "type": "Sugar" },
        {"id": "5007", "type": "Powdered sugar" },
        {"id": "5006", "type": "Chocolade with sprincles" },
        {"id": "5003", "type": "Chocolade" },
        {"id": "5004", "type": "Chocolade maple" }
    ]
}

for (let lygis1 in duomenys) {
  if (typeof (duomenys[lygis1]) !== "object"){
    console.log(lygis1+":"+duomenys[lygis1]);
}
  else{
    for (let lygis2 in duomenys[lygis1]) {
        console.log(lygis1+" :");
        for (let lygis3 in duomenys[lygis1][lygis2]) {
          console.log(lygis3+": "+duomenys[lygis1][lygis2][lygis3]);
        }
      }
    }
}