document.body.onload = function() {
    const nam = document.getElementById("name"); 
    // const prin = document.getElementById("principal"); 
    const nam2 = document.getElementById("name2");
    const pkm3 = document.getElementById("pk3");
    const pkm4 = document.getElementById("pk4");
    const pkm5 = document.getElementById("pk5");
    const pkm6 = document.getElementById("pk6");
    const button = document.getElementById("botones")
    const pokeNameInput = document.getElementById("pokeName");
    const est= document.getElementById("estadisticas"); 
    const movim = document.getElementById("movimientos"); 
    const url1 = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126`;
    ran1= random(0,3);
    ran2 =random(0,20)
    // console.log(ran1);
    fetch(url1).then((res) => {
        return res.json();
    }).then((data) => {
        if (data) {
            // console.log(data);
            url2 = data.results[random(0,1025)].url;
            url3 = data.results[random(0,1025)].url;
            url4 = data.results[random(0,1025)].url;
            url5 = data.results[random(0,1025)].url;
            url6 = data.results[random(0,1025)].url;
            url7 = data.results[random(0,1025)].url;
            // console.log(url2,url3,url4);
            if(url2 == url3 || url3 == url4 || url2 == url4){
                url2 = data.results[random(0,1025)].url;
                url3 = data.results[random(0,1025)].url;
                url4 = data.results[random(0,1025)].url;
                url5 = data.results[random(0,1025)].url;
                url6 = data.results[random(0,1025)].url;
                url7 = data.results[random(0,1025)].url;
            }
            if (url2 != url3 & url3 != url4){
                fetch(url2).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        const name2 = data.species.name;
                        nam.innerHTML = `<button class="btjs"  onclick="fetchPokemon1()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn">${data.species.name}</h1></button><br> `
                    }
                });
                fetch(url3).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        const name2 = data.species.name;
                        nam2.innerHTML = `<button class="btjs"  onclick="fetchPokemon2()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn2">${data.species.name}</h1></button><br> `

                    }
                });
                fetch(url4).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        // console.log(pokeImg1);
                        pkm3.innerHTML = `<button class="btjs"  onclick="fetchPokemon3()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn3">${data.species.name}</h1></button><br> `

                    }
                });
                fetch(url5).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        // console.log(pokeImg1);
                        pkm4.innerHTML = `<button class="btjs"  onclick="fetchPokemon4()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn4">${data.species.name}</h1></button><br> `
                    }
                });
                fetch(url6).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        // console.log(pokeImg1);
                        pkm5.innerHTML = `<button class="btjs"  onclick="fetchPokemon5()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn5">${data.species.name}</h1></button><br> `
                    }
                });
                fetch(url7).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        // console.log(pokeImg1);
                        pkm6.innerHTML = `<button class="btjs"  onclick="fetchPokemon6()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn6">${data.species.name}</h1></button><br> `
                    }
                });
                
            }
        }
    });
    button.innerHTML= ` <button id="b1" onclick="fetchPokemon()">Cambiar Pokemon</button> <button ><a href="./pokedex.html"> Regresar</a></button> <button id="b1" onclick="randompokemon()">Cambiar Pokemons aleatorios</button>`
  }
const randompokemon = () =>{
    const nam = document.getElementById("name"); 
    // const prin = document.getElementById("principal"); 
    const nam2 = document.getElementById("name2");
    const pkm3 = document.getElementById("pk3");
    const pkm4 = document.getElementById("pk4");
    const pkm5 = document.getElementById("pk5");
    const pkm6 = document.getElementById("pk6");
    const button = document.getElementById("botones")
    const pokeNameInput = document.getElementById("pokeName");
    const est= document.getElementById("estadisticas"); 
    const movim = document.getElementById("movimientos"); 
    const url1 = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126`;
    ran1= random(0,3);
    ran2 =random(0,20)
    // console.log(ran1);
    fetch(url1).then((res) => {
        return res.json();
    }).then((data) => {
        if (data) {
            // console.log(data);
            url2 = data.results[random(0,1025)].url;
            url3 = data.results[random(0,1025)].url;
            url4 = data.results[random(0,1025)].url;
            url5 = data.results[random(0,1025)].url;
            url6 = data.results[random(0,1025)].url;
            url7 = data.results[random(0,1025)].url;
            // console.log(url2,url3,url4);
            if(url2 == url3 || url3 == url4 || url2 == url4){
                url2 = data.results[random(0,1025)].url;
                url3 = data.results[random(0,1025)].url;
                url4 = data.results[random(0,1025)].url;
                url5 = data.results[random(0,1025)].url;
                url6 = data.results[random(0,1025)].url;
                url7 = data.results[random(0,1025)].url;
            }
            if (url2 != url3 & url3 != url4){
                fetch(url2).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        const name2 = data.species.name;
                        nam.innerHTML = `<button class="btjs"  onclick="fetchPokemon1()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn">${data.species.name}</h1></button><br> `
                    }
                });
                fetch(url3).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        const name2 = data.species.name;
                        nam2.innerHTML = `<button class="btjs"  onclick="fetchPokemon2()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn2">${data.species.name}</h1></button><br> `

                    }
                });
                fetch(url4).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        // console.log(pokeImg1);
                        pkm3.innerHTML = `<button class="btjs"  onclick="fetchPokemon3()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn3">${data.species.name}</h1></button><br> `

                    }
                });
                fetch(url5).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        // console.log(pokeImg1);
                        pkm4.innerHTML = `<button class="btjs"  onclick="fetchPokemon4()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn4">${data.species.name}</h1></button><br> `
                    }
                });
                fetch(url6).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        // console.log(pokeImg1);
                        pkm5.innerHTML = `<button class="btjs"  onclick="fetchPokemon5()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn5">${data.species.name}</h1></button><br> `
                    }
                });
                fetch(url7).then((res) => {
                    return res.json();
                }).then((data) => {
                    if (data) {
                        const pokeImg1 = data.sprites.front_default;
                        // console.log(pokeImg1);
                        pkm6.innerHTML = `<button class="btjs"  onclick="fetchPokemon6()"> <img src="${pokeImg1}" width="100%,height: 100%"><h1 id="sn6">${data.species.name}</h1></button><br> `
                    }
                });
                
            }
        }
    });
}

const pokeImage = (data2) => {  
    
    let url = data2.sprites.front_default;
    let namex = data2.species.name;
    const id = data2.id;
    const tipo = data2.types;
    if (tipo.length ==2){
        console.log(tipo);
        const pokePhoto = document.getElementById("p1");
        pokePhoto.innerHTML = `<h1 id="sn">${namex.toUpperCase()}  N. °${id}</h1><img src="${url}" width="100%,height: 100%"> <span><h2 id=""tipo"">${tipo[0].type.name}</h2> <h2 id=""tipo"">${tipo[1].type.name}</h2></span>   `;
    }
    if(tipo.length==1){
        const pokePhoto = document.getElementById("p1");
        pokePhoto.innerHTML = `<h1 id="sn">${namex.toUpperCase()}  N. °${id}</h1><img src="${url}" width="100%,height: 100%"> <h2 id=""tipo"">${tipo[0].type.name}</h2> `;
    };
}
const name1 = (nametp) => {
    // console.log(nombre);
    const nametipe = `<li> Altura: ${nametp.height/10} m</li> <li> Peso: ${nametp.weight/10} kg </li>  <li> Habilidad: ${nametp.abilities[0].ability.name} </li>`;           
    const pokeStat = document.getElementById("namegrl"); 
    pokeStat.innerHTML = `<ul><h1> Caracteristicas:</h1> <br> ${nametipe} </ul>`;
}
const est1 = (esta) => {
    // console.log(esta);
    const  ed= `<li> ${(esta.stats[0].stat.name).toUpperCase()}: ${esta.stats[0].base_stat}</li> <li> ${(esta.stats[1].stat.name).toUpperCase()}: ${esta.stats[1].base_stat}</li> <li> ${(esta.stats[2].stat.name).toUpperCase()}: ${esta.stats[2].base_stat}</li> <li> ${(esta.stats[3].stat.name).toUpperCase()}: ${esta.stats[3].base_stat}</li> <li> ${(esta.stats[4].stat.name).toUpperCase()}: ${esta.stats[4].base_stat}</li> <li> ${(esta.stats[5].stat.name).toUpperCase()}: ${esta.stats[5].base_stat}</li>`;
    const pokeest = document.getElementById("estadisticas"); 
    pokeest.innerHTML = ` <ul class="estadisticas-base"><h1>Estadisticas base:</h1> <br> ${ed} </ul>`    
}
const movi = (mo1) => {
    let mo = mo1.moves;
    console.log("mov1",mo);
    let datalenght = mo.length;       
    if (datalenght >4)
    {
        mr1= random(0,datalenght);
        mr2= random(0,datalenght);
        mr3= random(0,datalenght);
        mr4= random(0,datalenght);
        if( mr1 == mr2 || mr1 == mr3 || mr1 == mr4 || mr2 == mr3 || mr2 == mr4 || mr3 == mr4){
            mr1= random(0,datalenght)
            mr2= random(0,datalenght)
            mr3= random(0,datalenght)
            mr4= random(0,datalenght)
        } 
        const mov1= ` <li>${(mo[mr1].move.name).toUpperCase()}</li>  <li>${(mo[mr2].move.name).toUpperCase()}</li> <li>${(mo[mr3].move.name).toUpperCase()}</li> <li>${(mo[mr4].move.name).toUpperCase()}</li>`
        const movim = document.getElementById("movimientos"); 
        movim.innerHTML = ` <ul><h1>Movimientos: <br></h1>${mov1}</ul>`;              
    }
    if(datalenght == 4)
    {
        const mov1= ` <li>${(mo[0].move.name).toUpperCase()}</li>  <li>${(mo[1].move.name).toUpperCase()}</li> <li>${(mo[2].move.name).toUpperCase()}</li> <li>${(mo[3].move.name).toUpperCase()}</li>`
        const movim = document.getElementById("movimientos"); 
        movim.innerHTML = ` <ul><h1>Movimientos: <br></h1>${mov1}</ul>`;
    }
    if(datalenght<4)
            
    {
        if(datalenght==3)
        {          
            const mov1= ` <li>${(mo[0].move.name).toUpperCase()}</li>  <li>${(mo[1].move.name).toUpperCase()}</li> <li>${(mo[2].move.name).toUpperCase()}</li>`
            const movim = document.getElementById("movimientos"); 
            movim.innerHTML = ` <ul><h1>Movimientos: <br></h1>${mov1}</ul>`;
        }
        if(datalenght==2)
        {
            const mov1= ` <li>${(mo[0].move.name).toUpperCase()}</li>  <li>${(mo[1].move.name).toUpperCase()}</li>`
            const movim = document.getElementById("movimientos"); 
            movim.innerHTML = ` <ul><h1>Movimientos: <br></h1>${mov1}</ul>`;
        }
        if(datalenght==1)
        {
            const mov1= ` <li>${(mo[0].move.name).toUpperCase()}</li>`
            const movim = document.getElementById("movimientos"); 
            movim.innerHTML = ` <ul><h1>Movimientos: <br></h1>${mov1}</ul>`;
        }
    }
    console.log("datalenght", datalenght);        
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            pokeImage("./Imagenes/pokemon-sorp.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            movi(data)
            pokeImage(data);
            name1(data);
            est1(data);
        }  
    });
}
const fetchPokemon1 = (h1) => {
    // console.log("fetch1")
    const pokeNameInput = document.getElementById("sn");
    const button = document.getElementById("botones")
    let pokeName = pokeNameInput.innerHTML;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            pokeImage("./Imagenes/pokemon-sorp.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // console.log(data);
            movi(data)
            pokeImage(data);
            name1(data);
            est1(data);
        }  
    });
    button.innerHTML= `<button ><a href="./pokedex.html"> Regresar</a></button>`
    // console.log(url); 
}
const fetchPokemon2 = (h1) => {
    // console.log("fetch1")
    const pokeNameInput = document.getElementById("sn2");
    const button = document.getElementById("botones")
    let pokeName = pokeNameInput.innerHTML;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            pokeImage("./Imagenes/pokemon-sorp.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // console.log(data);
            movi(data)
            pokeImage(data);
            name1(data);
            est1(data);
        }  
    });
    button.innerHTML= `<button ><a href="./pokedex.html"> Regresar</a></button>`
    // console.log(url); 
}
const fetchPokemon3 = (h1) => {
    // console.log("fetch1")
    const pokeNameInput = document.getElementById("sn3");
    const button = document.getElementById("botones")
    let pokeName = pokeNameInput.innerHTML;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            pokeImage("./Imagenes/pokemon-sorp.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // console.log(data);
            movi(data)
            pokeImage(data);
            name1(data);
            est1(data);
        }  
    });
    button.innerHTML= `<button ><a href="./pokedex.html"> Regresar</a></button>`
    // console.log(url); 
}
const fetchPokemon4 = (h1) => {
    // console.log("fetch1")
    const pokeNameInput = document.getElementById("sn4");
    const button = document.getElementById("botones")
    let pokeName = pokeNameInput.innerHTML;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            pokeImage("./Imagenes/pokemon-sorp.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // console.log(data);
            movi(data)
            pokeImage(data);
            name1(data);
            est1(data);
        }  
    });
    button.innerHTML= `<button ><a href="./pokedex.html"> Regresar</a></button>`
    // console.log(url); 
}
const fetchPokemon5 = (h1) => {
    // console.log("fetch1")
    const pokeNameInput = document.getElementById("sn5");
    const button = document.getElementById("botones")
    let pokeName = pokeNameInput.innerHTML;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            pokeImage("./Imagenes/pokemon-sorp.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // console.log(data);
            movi(data)
            pokeImage(data);
            name1(data);
            est1(data);
        }  
    });
    button.innerHTML= `<button ><a href="./pokedex.html"> Regresar</a></button>`
    // console.log(url); 
}
const fetchPokemon6 = (h1) => {
    // console.log("fetch1")
    const pokeNameInput = document.getElementById("sn6");
    const button = document.getElementById("botones")
    let pokeName = pokeNameInput.innerHTML;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            // console.log(res);
            pokeImage("./Imagenes/pokemon-sorp.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            // console.log(data);
            movi(data)
            pokeImage(data);
            name1(data);
            est1(data);
        }  
    });
    button.innerHTML= `<button ><a href="./pokedex.html"> Regresar</a></button>`
    // console.log(url); 
}