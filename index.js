var hoy = new Date ()
console.log("Hoy es" + hoy)

var i
for(i=0; i<10; i++){
    console.log(i)
}

var moment = require ("moment");

console.log("Naci "+ moment("19910408","YYYYMMDD").fromNow());
