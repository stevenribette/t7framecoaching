var storage = window.localStorage;
if(storage.getItem("coin")){
    document.write('<nav class="navbar navbar-fixed-top" style="text-align:center;margin-top:2%;">');
    document.write('<p class="navbarmoney">'+storage.getItem("coin")+'</p>');
    document.write('</nav>');
}else{
    storage.setItem('coin',0);
    document.write('<nav class="navbar navbar-fixed-top" style="text-align:center;margin-top:2%;">');
    document.write('<p class="navbarmoney">'+storage.getItem("coin")+'</p>');
    document.write('</nav>');
}
if(storage.getItem("sound")){
    
}else{
    storage.setItem('sound',1);
}
if(storage.getItem("vibration")){

}else{
    storage.setItem('vibration',0);
}
if(storage.getItem("traintotalhit")){

}else{
    storage.setItem('traintotalhit',0);
}
if(storage.getItem("trainsuccesshit")){

}else{
    storage.setItem('trainsuccesshit',0);
}
if(storage.getItem("gamebackground")){

}else{
    storage.setItem('gamebackground','default.jpg');
}
if(storage.getItem("backgroundunlocked")){

}else{
    storage.setItem('backgroundunlocked', JSON.stringify(['default.jpg']));
}
if(storage.getItem("favoritecharacter")){

}else{
    storage.setItem('favoritecharacter',0);
}