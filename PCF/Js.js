const btn = document.querySelectorAll('button');

btn.forEach(button => {
    button.addEventListener('click', () => {
        const   myArray = ['pierre', 'feuille', 'ciseau'];
        let cordi = myArray[Math.floor(Math.random() * myArray.length)];
        //ordi.classList.add('ordi');
        //ordi.textContent = (cordi);
        //container.appendChild(ordi);

       // player.classList.add('player');
        playRound(player.textContent = (button.id), ordi.textContent = (cordi));
       // container.appendChild(player);
        //cmpt++;
        //compteur.classList.add('compteur');
        //compteur.textContent = (cmpt);
        //container.appendChild(compteur);
        // if(cmpt == 20)
        // {
        //     cmpt = 0;
        //     alert('finitoPipo')
        // }
    });

});
let computer = 0;
let Leplayer = 0;
function    playRound(playerSelection, computerSelection)
{
   
    let p = "pierre";
    let c = "ciseau";
    let f = "feuille";
    let j = playerSelection;
    let o = computerSelection;
   
    if (o == p && j == p || o == c && j == c || o == f && j == f)
    {
        Pmessage("Tie");
        return;
    }
    else if (j == c)
    {
        if (o == p)
        {
            computer++;
            Pmessage("Lose");
        }
        else
        {
            Leplayer++;
            Pmessage("Win");
        }
    }
    else if (j == f)
    {
        if (o == p)
        {
            Leplayer++;
            Pmessage("Win");
        }
        else
        {
            computer++;
            Pmessage("Lose");
        }
    }
    else if (j == p)
    {
        if (o == c)
        {
            Leplayer++;
            Pmessage("Win");
        }
        else
        {
            computer++;
            Pmessage("Lose");
        }
    }
    

    if (Leplayer == 5 || computer == 5)
    {
     
        if (Leplayer == 5)
        {
            alert("VICTOIRE !")
        }
        else
        {
            alert("DEFAITE !")
        }    
        alert ("rejouer ?")
        Leplayer = 0;
        computer = 0;  
    }
    Ptscore(Leplayer, computer);
    //faire avec if elsif mettre le result dans un variable
    //fqire un variable avec les joueurs et donne des points
}

function Pmessage(str)
{
    message.textContent = (str);
}

function Ptscore(player, ordi)
{
    Pscore.textContent = (player)
    Tscore.textContent = ('vs')
    Oscore.textContent = (ordi)
}

const container = document.querySelector('#container');
const divbtn = document.querySelector('#btn');
// const h = document.createElement('h3');
// h.classList.add('titre');
// h.textContent = 'Bienvenue sur le champ de bataille';
// container.appendChild(h);

const Ophoto = document.createElement('p');
    Ophoto.classList.add('Ophoto');
    Ophoto.innerHTML = ("<img src = 'image/images.png'  style='width: 70px;'></img>");
    container.appendChild(Ophoto);
const espace = document.createElement('p');
    espace.classList.add('espace');
    espace.textContent = ('vs');
    container.appendChild(espace);
const Pphoto = document.createElement('p');
    Pphoto.classList.add("Pphoto");
    Pphoto.innerHTML = ("<img src = 'image/bg.jpg'  style='width: 70px;'></img>");
    container.appendChild(Pphoto);

const ordi = document.createElement('p');
    ordi.classList.add('ordi');
    ordi.textContent = ("?");
    container.appendChild(ordi);

const message = document.createElement('p');
    message.classList.add('message');
    message.textContent = ('vs');
    container.appendChild(message);

const player = document.createElement('p');
        player.classList.add('player');
        player.innerHTML = ("?");
        container.appendChild(player);

const Oscore = document.createElement('p');
    Oscore.classList.add('Oscore');
    Oscore.textContent = ('0');
    container.appendChild(Oscore);
const Tscore = document.createElement('p');
    Tscore.classList.add('Tscore');
    Tscore.textContent = ('vs');
    container.appendChild(Tscore);
const Pscore = document.createElement('p');
    Pscore.classList.add('Pscore');
    Pscore.textContent = ('0');
    container.appendChild(Pscore);
    
// const text = document.createElement('p');
// text.classList.add('texte');
// document.write (choice);
// container.appendChild(text);
let cmpt = 0;
// const compteur = document.createElement('p');
//         compteur.classList.add('compteur');
//         compteur.textContent = (cmpt);
//         container.appendChild(compteur);


//h.setAttribute('style', 'color : white; text-align: center')
container.setAttribute('style', 'text-align: center; font-size : xx-large; display : grid; gap: 10px; grid-template-columns: repeat(3, 1fr); border : solid; background-color: black')
player.setAttribute('style', 'color : white;  display: inline-block;')
message.setAttribute('style', 'color : white; display: inline-block;')
ordi.setAttribute('style', 'color : white; display: inline-block;')
divbtn.setAttribute('style', 'display : grid; gap: 10px; grid-template-columns: repeat(3, 1fr); background-color:black; text-align : center;')
Oscore.setAttribute('style', 'color : pink; font-size : xx-large; text-align:center;')
Tscore.setAttribute('style', 'color : pink; font-size : xx-large; text-align:center;')
Pscore.setAttribute('style', 'color : pink; font-size : xx-large; text-align:center;')