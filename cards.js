//Listes des restaurants
class restaurant {
  constructor(restaurant, desc, adresse, link, image, categorie) {
    this.restaurant = restaurant;
    this.desc = desc;
    this.adresse = adresse;
    this.link = link;
    this.image = image;
    this.categorie = categorie;
  }
}
const restoDispo = [
  new restaurant(
    "L’Expérience",
    "Restaurant rémois au concept novateur, l’Expérience privilégie le partage autour de l’assiette!",
    "83 Place Drouet d’Erlon",
    "https://www.lexperience-reims.fr/",
    "img/lexperience.png",
    "français"
  ),
  {
    restaurant: "L’Alambic",
    desc: "L’Alambic est un restaurant des terroirs où les assiettes raviront vos papilles, vos yeux ainsi que votre appétit.",
    adresse: "63 bis, rue de Chativesle",
    link: "https://www.restaurant-lalambic.fr/",
    image: "img/lalambic.png",
    categorie: "français",
  },
  {
    restaurant: "Green sur mesure",
    desc: "Green sur mesure est le premier concept convivial et sain. Salades, pâtes, sandwichs, pokés, soupes : chacun peut composer son repas chaud ou froid à partir des nombreuses bases et ingrédients frais proposés chaque jour.",
    adresse: "4 Bis rue Gaston Boyer",
    link: "https://www.greensurmesure.fr/le-concept/",
    image: "img/greensurmesure.png",
    categorie: "veggie",
  },
  {
    restaurant: "Koboon",
    desc: "Pad Thaï, Wok bœuf Koh Tao, Nasi goreng à la mode Thaï... dégustez une diversité de saveurs typiquement thaïlandaises en provenance de Bangkok, Phuket.",
    adresse: "9, boulevard du Général Leclerc",
    link: "https://www.koboon-resto.fr/",
    image: "img/koboon.png",
    categorie: "veggie",
  },
  {
    restaurant: "Come Prima",
    desc: "Une échappée italienne au cœur de la Cité des Sacres. Une cuisine authentique. Chacun de nos plats est cuisiné maison.",
    adresse: "3 rue Buirette",
    link: "https://come-prima-reims.eatbu.com/?lang=fr",
    image: "img/comeprima.png",
    categorie: "italien",
  },
  {
    restaurant: "L’Oriental",
    desc: "Véritable dépaysement, pour vos sorties entre ami(e)s ou déjeuners professionnels, ainsi que vos événements.",
    adresse: "13 rue Gerbert",
    link: "http://restaurant-couscous-reims.com/",
    image: "img/loriental.png",
    categorie: "other",
  },
  {
    restaurant: "Mizzica",
    desc: "Produits siciliens et spécialités italiennes à Reims : l'épicerie Mizzica vous propose des produits artisanaux.",
    adresse: "60 Rue Gambetta",
    link: "https://www.mizzicareims.fr/",
    image: "img/Mizzicacard.png",
    categorie: "italien",
  },
  {
    restaurant: "Marcel & Jane",
    desc: "Faites-vous plaisir avec les délicieuses recettes de Marcel & Jane, une cuisine bio et raisonnée",
    adresse: "99 Rue Gambetta",
    link: "https://www.facebook.com/MarcelandJane",
    image: "img/M&Jcard.png",
    categorie: "veggie",
  },
  {
    restaurant: "Zwiebel",
    desc: "le 1er K E B A P 100% BERLINOIS de Reims",
    adresse: "103 Rue de Neufchâtel",
    link: "https://zwiebel-reims.business.site/",
    image: "img/Zwiebielcard.png",
    categorie: "other",
  },
  {
    restaurant: "Le Parc Les Crayères",
    desc: "Découvrez le restaurant Le Parc et notre chef étoilé au Domaine Les Crayères",
    adresse: "64 Boulevard Henry Vasnier",
    link: "https://lescrayeres.com/fr/restaurant-le-parc.html",
    image: "img/C.png",
    categorie: "français",
  },
];
//Create cards
function CreateCard(restaurant) {
  return `
     <a class="lien-resto" href = "${restaurant.link}">  
      <article class="card-resto">
         <img src=${restaurant.image} class="img-resto"/>
         <aside class="text-resto">
           <h3 class="nom-resto">${restaurant.restaurant}</h3>
           <p class="description-resto">${restaurant.desc}</p>
           <p class="adresse-resto">${restaurant.adresse}</p>
         </aside>
       </article>
    </a>
  `;
}
//Index.js
function createAllCards(filter, categorie) {
  let cards = "";
  for (let i = 0; i < restoDispo.length; i++) {
    if (
      filter == null ||
      restoDispo[i].restaurant.startsWith(filter) ||
      categorie == restoDispo[i].categorie
    ) {
      cards += CreateCard(restoDispo[i]);
    }
  }

  if (cards == "") {
    cards = `<h2 class = "no-result" >Pas de résultats</h2>`;
  }
  return cards;
}

document.querySelector(".search-bar").addEventListener("change", () => {
  const filter = document.querySelector(".search-bar").value;
  document.querySelector(".list-resto").innerHTML = createAllCards(filter);
});

document.querySelector(".list-resto").innerHTML = createAllCards();

let buttons = document.getElementsByTagName("div");

for (let i = 0; i < buttons.length; i++) {
  if (buttons[i].className == "button-categorie") {
    buttons[i].addEventListener("click", () => {
      const categorie = buttons[i].getAttribute("id");
      document.querySelector(".list-resto").innerHTML = createAllCards(
        "no filter",
        categorie
      );
    });
  }
}
