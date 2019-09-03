var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
var storage = window.localStorage;
var characters = ['akuma','alisa','anna','armor_king','asuka','bob','bryan','claudio','devil_jin','dragunov','eddy','eliza','feng','geese','gigas','heihachi','hwoarang','jack7','jin','josie','julia','katarina','kazumi','kazuya','king','kuma','lars','law','lee','lei','leo','lili','lucky_chloe','marduk','master_raven','miguel','negan','nina','noctis','panda','paul','shaheen','steve','xiaoyu','yoshimitsu'];
var elements = ['Block frame','Counter hit frame', 'Hit frame', 'Start up frame'];
var soundstatus = storage.getItem("sound");
function goTo(src){
   document.location.href=src;  
}
function toggleVisibility(elmt)
{
   if(typeof elmt == "string")
      elmt = document.getElementById(elmt);
   if(elmt.style.visibility == "hidden")
      elmt.style.visibility = "visible";
   else
      elmt.style.visibility = "hidden";
}
function toggleDisplay(elmt)
{
   if(typeof elmt == "string")
      elmt = document.getElementById(elmt);
   if(elmt.style.display == "none"){
      elmt.style.display = "";
   }else{
      elmt.style.display = "none";
   }
}
function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if ( param ) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}
function playSound(src) {
   if(soundstatus==0){}else{
       if (window.cordova) {
           if (deviceType == 'Android') {
               src = '/android_asset/www/' + src;
           }
           var media = new Media(src, success, error_error);
       } else {
           var media = new Audio(src, success, error_error);
       }
       media.play();
   }
   
}
function playTheme(srct){
   if(soundstatus==0){
   }else{
       if (window.cordova) {
           if (deviceType == 'Android') {
               srct = '/android_asset/www/' + srct;
           }
           var theme = new Media(srct, success, error_error);
       } else {
           var theme = new Audio(srct, success, error_error);
       }
       theme.play();
       theme.setVolume('0.1');
   }
}
function success() {
   // ignore
}

function error_error(e) {
   alert('bug son');
   alert(e.message);
}
function init() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("deviceready", onDeviceReady, false);
    if (window.cordova) {
        
    }else{

    }
}
function date(){
   var tab_jour=new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
   var today = new Date();
   var dd = today.getDate();
   var mm = today.getMonth()+1; //January is 0!
   var yyyy = today.getFullYear();

   if(dd<10) {
       dd = '0'+dd
   } 

   if(mm<10) {
       mm = '0'+mm
   } 
   day = today.getDay();
   day = tab_jour[day];
   today = mm + '/' + dd + '/' + yyyy;
   return day;
}
function evenement(){
   date = date();
   var storage = window.localStorage;
   loginday = storage.getItem("dailycoin");
   if(loginday != date){
      $('#panneauNews').fadeTo( "slow", 1 );
      $('#panneauNews').text("D A I L Y B O N U S");
      setTimeout(function () {
          $('#panneauNews').fadeTo( "slow", 0 );
      }, 3000);
      var money = addCoin(10);
      $('.navbarmoney').text(money);
      storage.setItem("dailycoin",date);
  }
}
function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
}
function addCoin(amount){
   var coin = storage.getItem('coin');
   coin = parseInt(coin);
   coin+=amount;
   storage.setItem('coin',coin);
   return coin;
}
function useCoin(amount){
   var coin = parseInt(storage.getItem('coin'));
   coin = parseInt(coin);
   coin-=amount;
   storage.setItem('coin',coin);
   return coin;
}
function addHit(target){
   var hit = storage.getItem(target);
   hit = parseInt(hit);
   hit+=1;
   storage.setItem(target,hit);
}
function getHit(target){
   var hit = storage.getItem(target);
   hit = parseInt(hit);
   return hit;
}