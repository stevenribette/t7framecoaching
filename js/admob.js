function verifAdmob(){
    setTimeout(function () {    
        if(window.admob){
            admob.destroyBannerView();
        }
    }, 2000);
}
setTimeout(function () {
    if(window.admob){
        admob.createBannerView({
            publisherId:          "ca-app-pub-1425909170075293/5545028162"
        });
    }else{
        alert("admob not ready");
    } 
}, 2000);