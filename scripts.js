window.onload = function() {
    valitutTuotteet = lataaOstoslista();
    paivitaValitutTuotteet();
};

// Funktio, joka käsittelee pudotusvalikon muutokset
function showUserChoice() {
    var selectElement = document.getElementById("mySelect");
    var selectedKategoria = selectElement.value;
    alert("Valitsit: " + selectedKategoria);

    // Kutsu funktiota, joka vaihtaa kategorialistan käyttäjän valinnan mukaan
    changeKategorialista(selectedKategoria);
}

function changeKategorialista(selectedKategoria) {
    var listaElement = document.getElementById("kategoriaLista");
    
    // Tyhjennä listaelementti
    listaElement.innerHTML = "";

    // Lisää uudet elementit valinnan mukaan
    switch (selectedKategoria) {
        case "hedelmät":
            listaElement.innerHTML += `
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="hedelmät" value="Omena" id="CheckboxGroup1_0" title="Actions">
                    Omena 
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="hedelmät" value="Päärynä" id="CheckboxGroup1_1">
                    Päärynä
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="hedelmät" value="Banaani" id="CheckboxGroup1_2"> 
                    Banaani
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="hedelmät" value="Viinirypäle" id="CheckboxGroup1_3"> 
                    Viinirypäle
                </label>
            `;
            break;
        case "vihannekset":
            listaElement.innerHTML += `
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="vihannekset" value="Tomaatti" id="CheckboxGroup2_0" title="Actions">
                    Tomaatti 
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="vihannekset" value="Kurkku" id="CheckboxGroup2_1">
                    Kurkku
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="vihannekset" value="Paprika" id="CheckboxGroup2_2"> 
                    Paprika
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="vihannekset" value="Jäävuorisalaatti" id="CheckboxGroup2_3"> 
                    Jäävuorisalaatti
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="vihannekset" value="Ruukkusalaatti" id="CheckboxGroup2_4"> 
                    Ruukkusalaatti
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="vihannekset" value="Peruna" id="CheckboxGroup2_5"> 
                    Peruna
                </label>                                    
            `;
            break;
        case "leivät":
            listaElement.innerHTML += `
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="leivät" value="Tummaleipä" id="CheckboxGroup3_0" title="Actions">
                    Tumma leipä 
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="leivät" value="Vaalealeipä" id="CheckboxGroup3_1"> 
                    Vaalea leipä
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="leivät" value="Paistopiste" id="CheckboxGroup3_2"> 
                    Paistopiste
                </label>
            `;
            break;
        case "maitotuotteet":
            listaElement.innerHTML += `
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="maitotuotteet" value="Rasvaton maito" id="CheckboxGroup4_0" title="Actions">
                    Rasvaton maito 
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="maitotuotteet" value="Sininen maito" id="CheckboxGroup4_1">
                    Sininen maito
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="maitotuotteet" value="Rahka" id="CheckboxGroup4_2"> 
                    Rahka
                </label>
                <br>
                <label>
                <input onchange="lisaaTuote(this)" type="checkbox" name="maitotuotteet" value="Ruokakerma" id="CheckboxGroup4_3"> 
                Ruokakerma
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="maitotuotteet" value="Makurahka" id="CheckboxGroup4_4"> 
                    Makurahka
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="maitotuotteet" value="Jugurtti" id="CheckboxGroup4_5"> 
                    Jugurtti
                </label>                                       
            `;
            break;
        case "ruuat":
            listaElement.innerHTML += `
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="ruuat" value="Jauheliha" id="CheckboxGroup5_0" title="Actions">
                    Jauheliha 
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="ruuat" value="Kanan suikale" id="CheckboxGroup5_1">
                    Kanan suikale
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="ruuat" value="Kanan pihvi" id="CheckboxGroup5_2"> 
                    Kanan pihvi
                </label>
                <br>
                <label>
                <input onchange="lisaaTuote(this)" type="checkbox" name="ruuat" value="Possun pihvi" id="CheckboxGroup5_3"> 
                Possun pihvi
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="ruuat" value="Possun liha" id="CheckboxGroup5_4"> 
                    Possun lihapala
                </label>                                 
            `;
            break;
        case "voit":
            listaElement.innerHTML += `
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="voit" value="Voimariini" id="CheckboxGroup6_0" title="Actions">
                    Voimariini 
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="voit" value="Becel" id="CheckboxGroup6_1">
                    Becel
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="voit" value="Juusto" id="CheckboxGroup6_2"> 
                    Juusto
                </label>
                <br>
                <label>
                <input onchange="lisaaTuote(this)" type="checkbox" name="voit" value="Raejuusto" id="CheckboxGroup6_3"> 
                Raejuusto
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="voit" value="Tofu" id="CheckboxGroup6_4"> 
                    Tofu
                </label>  
            `;
            break;
        case "murot":
            listaElement.innerHTML += `
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="murot" value="Murot" id="CheckboxGroup7_0" title="Actions">
                    Murot 
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="murot" value="Mysli" id="CheckboxGroup7_1">
                    Mysli
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="murot" value="Kauralese" id="CheckboxGroup7_2"> 
                    Kaurlese
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="murot" value="Vehnälese" id="CheckboxGroup7_3"> 
                    Vehnälese
                </label>                  
            `;
            break;
        case "pastat":
            listaElement.innerHTML += `
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="pastat" value="Pasta" id="CheckboxGroup8_0" title="Actions">
                    Pasta 
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="pastat" value="Spagetti" id="CheckboxGroup8_1">
                    Spagetti
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="pastat" value="Makaroni" id="CheckboxGroup8_2"> 
                    Makaroni
                </label>
                  
            `;
            break;
        case "pakasteet":
            listaElement.innerHTML += `
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="pakasteet" value="Pakastevihannekset" id="CheckboxGroup9_0" title="Actions">
                    Pakastevihannekset 
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="pakasteet" value="Pakasteherneet" id="CheckboxGroup9_1">
                    Pakasteherneet
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="pakasteet" value="Pakastewok" id="CheckboxGroup9_2"> 
                    Wok-vihannekset
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="pakasteet" value="Ranskalaiset" id="CheckboxGroup9_3"> 
                    Ranskalaiset
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="pakasteet" value=Pakastekala" id="CheckboxGroup9_4"> 
                    Pakastekala
                </label>                  
            `;
            break;
        case "muut":
            listaElement.innerHTML += `
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="muut" value="Kananmunat" id="CheckboxGroup10_0" title="Actions">
                    Kananmunat 
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="muut" value="Paseerattutomaatti" id="CheckboxGroup10_1">
                    Paseerattutomaatti
                </label>
                <br>
                <label>
                    <input onchange="lisaaTuote(this)" type="checkbox" name="muut" value="Vichy" id="CheckboxGroup10_2"> 
                    Vichy
                </label>                  
            `;
            break;
        
        
    }
}

var valitutTuotteet = {}; // Tähän tallennetaan valitut tuotteet

function lisaaTuote(checkbox) {
    var tuotteenNimi = checkbox.value;

    if (checkbox.checked) {
        // Lisätään tuote valittujen tuotteiden listaan
        valitutTuotteet[tuotteenNimi] = true;
    } else {
        // Poistetaan tuote valittujen tuotteiden listalta
        delete valitutTuotteet[tuotteenNimi];
    }

    paivitaValitutTuotteet();
}

function validateInput() {
    var inputField = document.getElementById("textfield");
    var errorMessage = document.getElementById("error-message");
    var inputValue = inputField.value.trim(); // Poistetaan ylimääräiset välilyönnit

    if (inputValue.length < 3) {
        // Näytetään virheilmoitus ja korostetaan kenttä punaisella reunuksella
        errorMessage.style.display = "block";
        inputField.style.borderColor = "red";
    } else {
        // Piilotetaan virheilmoitus ja poistetaan mahdollinen korostus
        errorMessage.style.display = "none";
        inputField.style.borderColor = ""; // Palautetaan alkuperäinen reunusväri
    }
}

// Lisätään tapahtumankäsittelijä syöttökentälle, joka kuuntelee syötteen muutoksia
document.getElementById("textfield").addEventListener("input", validateInput);

// Lisätään tapahtumankäsittelijä Enter-näppäimelle syöttökentässä
document.getElementById("textfield").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Suoritetaan toiminto, esim. päivitetään valitut tuotteet
        paivitaValitutTuotteet();
    }
});


function paivitaValitutTuotteet() {
    var valitutTuotteetElementti = document.getElementById("valitutTuotteet");
    var ostoslistaElementti = document.getElementById("ostoslista");
    var tekstikentta = document.getElementById("textfield");

    var syotettyTuote = tekstikentta.value.trim(); // Otetaan tekstikentän arvo ja poistetaan ylimääräiset välilyönnit

    if (syotettyTuote !== "") {
        // Lisätään syötetty tuote valittujen tuotteiden listaan
        valitutTuotteet[syotettyTuote] = true;
        // Lisätään syötetty tuote ostoslistaan
        lisaaOstoslistaan(syotettyTuote);
    }

    // Tallenna ostoslista Local Storageen
    tallennaOstoslista();

    // Tyhjennetään listat ennen päivitystä
    valitutTuotteetElementti.innerHTML = "";
    ostoslistaElementti.innerHTML = "";

    // Lisätään valitut tuotteet listaan ja ostoslistaan
    for (var tuote in valitutTuotteet) {
        var uusiTuoteElementti = document.createElement("p");
        uusiTuoteElementti.textContent = tuote;

        // Lisätään valitut tuotteet listaan
        valitutTuotteetElementti.appendChild(uusiTuoteElementti);

        // Lisätään tuote ostoslistaan
        lisaaOstoslistaan(tuote);
    }


    // Tyhjennetään tekstikenttä syötön jälkeen
    tekstikentta.value = "";

}

function lisaaOstoslistaan(tuoteNimi) {
    var ostoslistaElementti = document.getElementById("ostoslista");

    var uusiTuoteElementti = document.createElement("p");
    uusiTuoteElementti.textContent = tuoteNimi;
    
    // Lisätään mahdollisuus yliviivata tuote ostoslistalla
    uusiTuoteElementti.addEventListener("click", function() {
        if (uusiTuoteElementti.classList.contains("yliviivattu")) {
            uusiTuoteElementti.classList.remove("yliviivattu");
        } else {
            uusiTuoteElementti.classList.add("yliviivattu");
        }
    });

    ostoslistaElementti.appendChild(uusiTuoteElementti);
}

function tyhjenna() {
    var valitutTuotteetElementti = document.getElementById("valitutTuotteet");
    var ostoslistaElementti = document.getElementById("ostoslista");

    // Tyhjennetään valitut tuotteet lista
    valitutTuotteetElementti.innerHTML = "";
    // Tyhjennetään ostoslista
    ostoslistaElementti.innerHTML = "";

    // Tyhjennetään valitutTuotteet-objekti
    valitutTuotteet = {};

    // Poistetaan valinta kaikista tuotekategorialistauksista
    var kaikkiCheckboxit = document.querySelectorAll('input[type="checkbox"]');
    kaikkiCheckboxit.forEach(function(checkbox) {
        checkbox.checked = false;
    });
}

function tyhjennaviivatut() {
    var ostoslistaElementti = document.getElementById("ostoslista");

    // Haetaan ostoslistan lapset (tuote-elementit)
    var tuoteElementit = ostoslistaElementti.getElementsByTagName("p");

    // Käydään läpi kaikki tuote-elementit
    for (var i = 0; i < tuoteElementit.length; i++) {
        var tuoteElementti = tuoteElementit[i];
        
        // Tarkistetaan, onko tuote-elementillä luokka yliviivattu
        if (tuoteElementti.classList.contains("yliviivattu")) {
            // Poistetaan tuote-elementti (yliviivattu tuote)
            ostoslistaElementti.removeChild(tuoteElementti);
            // Vähennetään laskuria yhdellä, koska poistimme yhden tuotteen
            i--;
        }
    }
}

function laskeJaNaytaJaljellaOlevatTuotteet() {
    var ostoslistaElementti = document.getElementById("ostoslista");
    var tuoteElementit = ostoslistaElementti.getElementsByTagName("p");
    var laskuri = 0;

    for (var i = 0; i < tuoteElementit.length; i++) {
        var tuoteElementti = tuoteElementit[i];
        if (!tuoteElementti.classList.contains("yliviivattu")) {
            laskuri++;
        }
    }

    var jäljelläOlevatTuotteetElementti = document.getElementById("jäljelläOlevatTuotteet");
    jäljelläOlevatTuotteetElementti.textContent = laskuri;
}

function naytaOstoslista() {
    var ostoslistaDiv = document.getElementById("kauppaan");
    ostoslistaDiv.style.display = "block";
}

function piilotaValinnat() {
    var valinnatDiv = document.getElementById("valinnat");
    valinnatDiv.style.display = "none";
}
function naytaValinnat() {
    var valinnatDiv = document.getElementById("valinnat");
    valinnatDiv.style.display = "block";
}

function tallennaOstoslista() {
    // Muunna ostoslistan objekti JSON-muotoon
    var ostoslistaJSON = JSON.stringify(valitutTuotteet);

    // Tallenna JSON-muotoinen ostoslista Local Storageen
    localStorage.setItem('ostoslista', ostoslistaJSON);
}

function lataaOstoslista() {
    // Hae ostoslista Local Storagesta
    var ostoslistaJSON = localStorage.getItem('ostoslista');

    // Jos ostoslistaa ei ole tallennettu, palauta tyhjä objekti
    if (!ostoslistaJSON) {
        return {};
    }

    // Muunna JSON-muotoinen ostoslista takaisin objektiksi ja palauta se
    return JSON.parse(ostoslistaJSON);
}
