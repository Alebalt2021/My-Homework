var heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
}

var teamName = heroes.squadName //Primera forma
// var team = heroes["squadName"]; ->Segunda forma (buscador)
console.log(teamName);

/////Mostrar el nombre de la base secreta 
var TeamMembers = heroes.members
console.log(TeamMembers);

////Mostrar uno de los integrantes
var member1 = TeamMembers[1];
console.log(member1);

////Mostrar los superpoder del segundo integrante
//var power1 = TeamMembers[1].powers
//console.log(power1);
var power = member1.powers;
console.log(power);

function Persona(nombre,edad,ciudad,intereses){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.intereses = intereses;

    this.info = function(){
        let mensaje = this.nombre+" tiene "+this.edad+" años. y vive en "+this.ciudad+".";
        alert(mensaje);
    }
    this.hobbies = function(){
        let mensaje1 = " Sus intereses de "+this.nombre+" son: "+this.intereses;
        alert(mensaje1);
    }
}