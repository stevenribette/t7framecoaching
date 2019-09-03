var character_id = parseInt($_GET('character'));
var character = characters[character_id];
var frame = frames[character_id];
var max_answer = 4;
var answers = [];
var good_answer;
var element;
var affichage = false;
function afficherContainer(str){
    affichage = true;
    $('#containerPanneauResult').removeClass('fadeOutLeft');
    $('#panneauResult span').text(str);
    toggleDisplay('containerPanneauResult');
}
function effacerContainer(){
    $('#containerPanneauResult').addClass('fadeOutLeft');
    setTimeout(function(){
        $('#panneauResult span').text('');
        toggleDisplay('containerPanneauResult');
        affichage = false;
    },300);
}
function panneau_result(str){
    afficherContainer(str);
    setTimeout(function () {
        effacerContainer();
        shuffle();
    }, 3000);
}
function training_answer(answer_id){
    if(affichage == true){
        return false;
    }
    if(frame[answer_id][element]==answers[good_answer].move[element]){
        panneau_result("Good Answer");
    }else{
        panneau_result('The answer was "'+answers[good_answer].move[ element ]+'"');
    }
}
function training_shuffle(){
    answers = [];
    for(var x=0;x<max_answer;x++){
        var input = getRandomInt(frame.length);
        answers.push({'id':input,'move':frame[input]});
    }
    good_answer = getRandomInt(answers.length);
    element = elements[getRandomInt(elements.length)];

    var str='';
    for(var x=0;x<answers.length;x++){
        var answer = answers[x];
        var id = answer.id;
        var block_frame = answer.move[ element ];
        str += "<div class='col-sm-6 btn btn-block btngame' onclick='training_answer("+id+")' id='btn_"+id+"'>"+block_frame+"</div>";
    }
    $('#controller').html(str);
    str='';
    str+="<img id='gif' class='img-responsive' src='http://bloper97.fr/r/t7framecoaching/api/img/"+character+"/move_"+answers[good_answer].id+".gif'/>";
    str+="<div class='col-sm-12 inputLayer'>"+answers[good_answer].move[ 'Command' ]+"</div><br>";
    str+="<div class='col-sm-12 inputLayer'>"+element+"</div><br>";
    $('#question').html(str);
}
function fight_answer(answer_id){
    
}
function fight_shuffle(){

}