window.fbAsyncInit = function() {
  FB.init({
    appId      : '5668652199922175',
    status     : true,
    xfbml      : true,
    version    : 'v2.7'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk')); 


function share() {
  
  FB.ui({
      method : "share",
      href : "https://edsonirammoreno.github.io/GraficasWeb/",
      hasTag : "#Jugando",
      quote: "¡He ganado!"
  }, function(response){});
}
