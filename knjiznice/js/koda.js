
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';

var username = "ois.seminar";
var password = "ois4fri";


/**
 * Prijava v sistem z privzetim uporabnikom za predmet OIS in pridobitev
 * enolične ID številke za dostop do funkcionalnosti
 * @return enolični identifikator seje za dostop do funkcionalnosti
 */
function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
                "&password=" + encodeURIComponent(password),
        async: false
    });
    return response.responseJSON.sessionId;
}


/**
 * Generator podatkov za novega pacienta, ki bo uporabljal aplikacijo. Pri
 * generiranju podatkov je potrebno najprej kreirati novega pacienta z
 * določenimi osebnimi podatki (ime, priimek in datum rojstva) ter za njega
 * shraniti nekaj podatkov o vitalnih znakih.
 * @param stPacienta zaporedna številka pacienta (1, 2 ali 3)
 * @return ehrId generiranega pacienta
 */
function generirajPodatke(stPacienta) {
  ehrId = "";
  var teza,visina,datum;
  if(stPacienta==1){
    teza = 50;
    visina = 170;
    datum = 01062016;
  }
  if(stPacienta==2){
    teza = 60;
    visina = 180;
    datum = 02062016;
  }
  if(stPacienta==3){
    teza = 70;
    visina = 190;
    datum = 03062016;
  }

  // TODO: Potrebno implementirati

  return ehrId;
}



// TODO: Tukaj implementirate funkcionalnost, ki jo podpira vaša aplikacija

function calculateIMB(height,weight){
    var factor = height/(weight*weight);
    return factor;
}

function weightStatus(imbFactor){
    if(imbFactor<18.5){
        return "Suh";
    }
    if(imbFactor>30){
        return "Debel";
    }
    if((imbFactor>=18.5)&&(imbFactor<=24.9)){
        return "Pravilna Teža";
    }
    if((imbFactor>=25)&&(imbFactor<=29.9)){
        return "Prekomerno Težek";    
    }
}