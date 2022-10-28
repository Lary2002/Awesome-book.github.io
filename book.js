//Selection des differentes parties
var liste = document.getElementById('list');
var form = document.getElementById('form');
var contact = document.getElementById('contact');

//Recuperation des boutons cliqués
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

//Fonction d'affichage
function show(section, valeur) {
    if (valeur == 'two') {
        section.style.display = "flex";
    }
    else {
        section.style.display = "block"
    }
}

//Fonction pour cacher
function hide(section) {
    section.style.display = "none"
}

//Affichage dynamique en fonnction des boutons cliqués
one.addEventListener('click', () => {
    show(liste, 'one');
    hide(form);
    hide(contact)
    
})

two.addEventListener('click', () => {
    show(form, 'two');
    hide(liste);
    hide(contact)
    
})

three.addEventListener('click', () => {
    show(contact, 'three');
    hide(liste);
    hide(form)
    
})

//Affichge de la date 
var mydate = document.getElementById('date');
setInterval(() => {
    mydate.innerHTML = new Date();
}, 1000);


//Recuperation du bouton de soumission 
var pub = document.getElementById('btn');
var posts = []; //Tableau pour stocker les livres publiés

//Fonction de soumission et affichage de la liste des livres publiés
function publier(){
    //Creation de la table des livres
    var posttable = document.createElement('table');
    var line = document.createElement('tr');
    var col1 = document.createElement('td');
    var col2 = document.createElement('td');
    posttable.appendChild(line)
    line.appendChild(col1);
    line.appendChild(col2);
    console.log(line);

    //Bouton de suppression
    var remove = document.createElement('button');
    remove.innerHTML = "remove";
    remove.addEventListener('click', (e) => {
        parent = e.path[3];
        parent.removeChild(e.path[2]);
    })

    var postdiv = document.createElement('div');
    postdiv.style.justifyContent = "space-around";
    postdiv.style.display = "flex";
    var title = document.querySelector('.title').value;    // Récuperation des valeurs entrées 
    var author = document.querySelector('.author').value;  // dans le formulaire

    posts.push({ 'book': title, 'author': author }); //Ajout dans le tableau de stockage

    //Affichage de la liste des livres publier
    for (const post of posts) {
        postdiv.textContent = post.book + " by " + post.author;
        col1.appendChild(postdiv);
        col2.appendChild(remove);
        liste.appendChild(line);
        localStorage.setItem('list', posts);
        show(liste, 'one');
        hide(form);
    }

}

//pub.addEventListener('click', publier())







