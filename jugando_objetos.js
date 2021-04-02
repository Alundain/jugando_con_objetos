                      //[0]                       [2]                    [3]
let usuarios = [{nombre: "Michael", edad:37}, {nombre: "John", edad:30}, {nombre: "David", edad:27}];

//¿Cómo harías print/log de la edad de John?
console.log(usuarios[1], edad);

// ¿Cómo harías print/log del nombre del primer objeto?
console.log(usuarios[0].nombre);

//  ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? 

for (var i = 0; i < usuarios.length; i++){
    console.log(usuarios[i].nombre, "-", usuarios[i].edad);
}
//¿Cómo harías para imprimir el nombre de los mayores de edad?

for (let i = 0; i < edad.length; i++){
    console.log(usuarios[i].edad);
}