/* exercice 1 */
/* create  container */
let mainContainer = document.createElement("div");
document.body.appendChild(mainContainer) ;
mainContainer.style.display = "inherit"

let sdContainer = document.createElement("div");
document.body.appendChild(sdContainer) ;



function createElement1(){



  /* creer H1*/
let nameCinema = document.createElement("h1");
mainContainer.appendChild(nameCinema) ;
nameCinema.textContent = "Cinéma Le Dauphin" ;

  /* creer H1*/
let descCinema = document.createElement("p") ;
mainContainer.appendChild(descCinema ) ;
descCinema.textContent = "nvongntonn n obtgntngntrongtr o ntrb otnbnots"

/* creer  bouton */
let voirFilm = document.createElement("input") ;
mainContainer.appendChild(voirFilm) ;
voirFilm.type = "button"
voirFilm.value = "Voir les films à l’affiche cette semaine"
voirFilm.addEventListener("click" , functionVoirFilm , false)



}

createElement1()

/* exercice 1.2 */

let filmAffiche = [
  ["Titre du film" , "Réalisateur" , "Nationalité", "Année" , "Durée" , "Version"] ,
  ["IN MY ROOM" , "Ulrich Köhler" , "Allemagne", "2019" , "2h" , "vf"] ,
  ["UN VIOLENT DÉSIR DE BONHEUR" , "Clément Schneider" , "France", "2018" , "1h15" , "vf" ] ,
  ["WHAT YOU GONNA DO WHEN THEWORLDS ON FIRE ?" , "Roberto Minervini" , "Etats-Unis/Italie", "2018" , "2h03" , "vostfr"],
  ["GRASS" , "Hong Sang-Soo" , "Corée du Sud", "2018" , "1h06" , "vostfr"]

]


/* exercice 1.3*/


function createTab(tab){
 let i = 0
 let j = 0
 let currentElement

 let table = document.createElement("table")
 let thead = document.createElement("thead")
 let tbody = document.createElement("tbody")
 table.appendChild(thead)
 sdContainer.appendChild(table)
 table.appendChild(tbody)
 //thead
 while (i < tab[0].length){
   let th = document.createElement("th")
   thead.appendChild(th)
   currentElement = tab [0] [i]
   th.textContent = currentElement
   i = i + 1
 }
 i = 1
 // body
 while (i<tab.length){
   let tr = document.createElement("tr")
   j = 0
   while(j < tab[i].length ){
     let td = document.createElement("td")
     currentElement = tab [i] [j]
     td.textContent = currentElement
     tr.appendChild(td)
     j = j + 1
   }
   tbody.appendChild(tr)
   i = i + 1
 }
}




/* exercice 1.4*/

function functionVoirFilm (){

mainContainer.style.display = "none"
createTab(filmAffiche)



}



/* exercice_2.1 */


let tab2 = [
  ['SUBSTANCES', 'Température de fusion ou solidification en °C', 'Température d’ébullition en °C'],
	['acide acétique', '17', '118'],
	['acide nitrique', '-41', '86'],
	['acide sulfurique', '10', '290'],
	['alcool éthylique', '-114', '78'],
	['aluminium', '660', '2450']
]


/* exercice_2.1 */

function functionTemperrature(tab2 , number){

  let valeurInferieure = [];
  let i = 0 ;
  let currentElement ;
  let nameSub ;
  let tempEbu ;

  while (i < tab2.length) {
    currentElement = tab2[i]
    nomSub = currentElement[0]
    tempEbu =  parseInt(currentElement[2]);

    if (tempEbu < number) {
    valeurInferieure.push(nomSub);

    }
   i = i +1
  }
  return valeurInferieure
  }
 
