function translator(str){
    str = "in rage 1, 1, b or f+3, 2";
    symbols = ["】","【","☆"];
    ret = "";
    var inputs = str.split(' ');
    for(x=0;x<inputs.length;x++){
        ret+=calculator(inputs[x])+" ";
    }
    return ret;
}
function input_img(img){
    return "<img class='input' class='img-responsive' src='"+img+".png'>";
}
function calculator(input){
    exception = ["in","rage","or"];
    if(exception.indexOf(input)==-1){
        if(input.indexOf(',')==-1){
            return input_img(input);
        }else{
            input = input.substring(0, input.length-1);
            return input_img(input)+input_img('c');
        }
    }else{
        if(input.indexOf(',')==-1){
            return input;
        }else{
            input = input.substring(0, input.length-1);
            return input+input_img('c');
        }
    }
}

console.log(translator("oui"));