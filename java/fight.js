var dragonniteHP = 100
var tyranitarHP = 100

var dragonniteHP = 100
var tyranitarHP = 100


var shank = 20
var superstoter = 5
var overkill = 1
var guccipetje = 3


function shankmove() {
    if (shank != 0) {
        shank -= 1

        if (Math.floor(Math.random() * 20) == 19) {
            document.getElementById("tekst").textContent = "Helaas je shank heeft gemist";

        } else {
            tyranitarHP -= 5;
            document.getElementById("tekst").textContent = "Mooie shank broeder";
            
        }

        document.getElementById('hpttar').textContent = tyranitarHP + "/100 HP";
        document.getElementById('healthbart').value = tyranitarHP;
        document.getElementById('shank').textContent = shank + "/20";
        window.setTimeout(tyranitarbeurt, 1000);
        window.setTimeout(Hebjegewonnen,1000);

    } else {
        document.getElementById("tekst").textContent = "Je shank is stuk";
    }

}
 
document.querySelector('#shanks').addEventListener("click", shankmove);

function supermove() {
    if (superstoter != 0) {
        superstoter -= 1

        if (Math.floor(Math.random() * 5) == 4) {
            document.getElementById("tekst").textContent = "Jammer volgendde keer beter";

        } else {
            tyranitarHP -= 20;
            document.getElementById("tekst").textContent = "Stooooottteeeeeennnnnnn";
            
        }

        document.getElementById('hpttar').textContent = tyranitarHP + "/100 HP";
        document.getElementById('healthbart').value = tyranitarHP;
        document.getElementById('superstoter').textContent = superstoter + "/5";
        window.setTimeout(tyranitarbeurt, 1000);
        window.setTimeout(Hebjegewonnen,1000);
        

    } else {
        document.getElementById("tekst").textContent = "Helaas je kan niet meer superstoter gebruiken";
    }

}
 
document.querySelector('#superstoters').addEventListener("click", supermove);

function killmove() {
    if (overkill != 0) {

        if (guccipetje >0) {
            document.getElementById("tekst").textContent = "Je bent nog rustig";

        } else {
            overkill -= 1
            tyranitarHP -= 75;
            document.getElementById("tekst").textContent = "Niet aan me raken";
            
        }

        document.getElementById('hpttar').textContent = tyranitarHP + "/100 HP";
        document.getElementById('healthbart').value = tyranitarHP;
        document.getElementById('overkill').textContent = overkill + "/1";
        window.setTimeout(tyranitarbeurt, 1000);
        window.setTimeout(Hebjegewonnen,1000);

    } else {
        document.getElementById("tekst").textContent = "Even rustig doen";
    }

}
 
document.querySelector('#overkills').addEventListener("click", killmove);

function guccimove() {
    if (guccipetje != 0) {
      guccipetje -= 1

        document.getElementById("tekst").textContent = "Even mijn gucci voelen";
        document.getElementById('guccipetje').textContent = guccipetje + "/3";
        window.setTimeout(tyranitarbeurt, 1000);
        window.setTimeout(Hebjegewonnen,1000);

} else{
    document.getElementById("tekst").textContent = "Druk is op overkill";
}
}
 
document.querySelector('#guccipetjes').addEventListener("click", guccimove);


function tyranitarbeurt () {

        var tyranitaraanval = Math.floor(Math.random() * 2)

        if (tyranitaraanval == 0) {
        if (Math.floor(Math.random() * 5) == 4) {
            document.getElementById("tekst").textContent = "Tyranitar slaat mis";
        } else {
            dragonniteHP -= 20
            document.getElementById("tekst").textContent = "Tyranitar geeft je goeie pomper";
        }

        }
            if (tyranitaraanval == 1) {

        if (Math.floor(Math.random() * 10) == 9) {
            document.getElementById("tekst").textContent = "Tyranitar mist";
        } else {
            dragonniteHP -= 10
            document.getElementById("tekst").textContent = "Tyranitar gebruikt vuurwapen";
        }

        if (tyranitaraanval == 2) {

            dragonniteHP -= 5
            document.getElementById("tekst").textContent = "Tyranitar gebruikt kleine duw";
        }
    }
        document.getElementById('hpnite').textContent = dragonniteHP + "/100 HP";
        document.getElementById('healthbard').value = dragonniteHP;
        window.setTimeout(Hebjegewonnen,1000)
}

function Hebjegewonnen() {

    if (dragonniteHP <= 0) {
        dragonniteHP = 0;
        document.getElementById('hpnite').textContent = dragonniteHP + "/100 HP";
        document.getElementById('tekst').textContent = "Tyranitar heeft de gucci van Dragonnite gewonnen"
    }

    if (tyranitarHP <= 0) {
        tyranitarHP = 0;
        document.getElementById('hpttar').textContent = tyranitarHP + "/100 HP";
        document.getElementById('tekst').textContent = "Dragonnite heeft respect afgedwongen"
        
    }
}