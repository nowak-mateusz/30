
function createForm() 
{
    function addRadio(form, name, id, val, check)
    {
        var text = '<div class="form-check"> \
                    <input class="form-check-input" type="radio" name="' + name + '" id="' + name + id +'" value="' + val +'"';
        if(check)
            text += ' checked';
        text +='> \
                  <label class="form-check-label" for="exampleRadios' + id + '"> \
                  ' + val +' \
                  </label> \
                  </div>';
        form.append(text)
    }
    
    var adaFullList = [ "bidon",
                        "cukierniczka",
                        "kosmetyczka",
                        "kosmetyki",
                        "kostki do lodu chłodzące",
                        "lodówka turystyczna",
                        "mata  do ćwiczeń",
                        "młynki do soli i pieprzu",
                        "mop",
                        "otwieracz do puszek",
                        "pościel 140 x 200",
                        "prześcieradło 140 x 200",
                        "ręcznik plażowy",
                        "serwetnik",
                        "stojak  do ręcznika papierowego",
                        "śpiwór",
                        "termofor",
                        "ugniatacz do ziemniaków",
                        "wiatrak podłogowy",
                        "wyciskarka do owoców",
                        "zestaw  kubków",
                        "zestaw barmański",
                        "zestaw pojemników do przechowywania żywności",
                        "zestaw przyborów kuchennych ( łopatka, nabierka, trzepaczka)",
                        "zestaw ręczników"];
    
    var adaList =  $('.adaList');
    $form = $('<form action="https://docs.google.com/forms/d/e/1FAIpQLSciUzge69Yr9uecRnKCYey28SN6ApbTmGNLSMFRZGCrh5DDPg/formResponse" method="post" target="hidden_iframe" onsubmit="submitted=true;"></form>');
    $field = $('<fieldset class="form-group"></fieldset>')
    $listCol = $('<div class="col-sm-10"></div>');
    
    $.getJSON("https://spreadsheets.google.com/feeds/cells/1gSzknowFqgOMfUoPMYNiSoLetoOzsAY2X8ZNTSySpnQ/1/public/full?alt=json", function(data) 
    {
        var check = true;
        
        for(var i = 0; i <adaFullList.length; i++){
            var find = false;
            
            for(var j = 0; j < data.feed.entry.length; j++ )
            {
                if( data.feed.entry[j]['gs$cell']['$t'] ==  adaFullList[i])
                {
                    find = true;
                    break;
                }
            }
            
            if(!find)
            {
                addRadio($listCol, 'adaRadios' ,i, adaFullList[i], check);
                check = false;
            }
        }
        $field.append($listCol);
        $form.append($field);
        $form.append('<input name="entry.986097915" type="hidden">');           
        $form.append('<div class="col-sm-10 text-center"><button type="submit" class="btn btn-primary">Wyślij</button></div>');
   
        adaList.append('<script type="text/javascript">var submitted=false;</script> \
                    <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" \
                    onload="if(submitted) {alert(\'Dziękuje za wybranie prezentu.\');}"></iframe>');
        adaList.append($form);
    
        $('input[name="entry.986097915"]').val( $('input:checked')[0].value);
        $('input[name="adaRadios"]').change(function () {
            $('input[name="entry.986097915"]').val(this.value);
        });  
    });
}

window.onload = function() {   
    
    createForm() ;

var audio = document.getElementById("player");
  audio.volume = 0.1;
  setTimeout(function() {

if (audio.duration > 0 && !audio.paused) 
{
        document.getElementById("audio-play").focus();
        document.getElementById("audio-play").focus();

} else {

    document.getElementById("audio-stop").focus();
    document.getElementById("audio-stop").focus(); 

}
      
  },100);

   for (var i = 0; i < 250; i++) {
  create(i);
  }          
}


 


function create(i) {
  var width = 0.1 + Math.random() * 8;
  var height = width * 0.4;
  var colourIdx = Math.ceil(Math.random() * 3);
  var colour = "red";
  switch(colourIdx) {
    case 1:
      colour = "yellow";
      break;
    case 2:
      colour = "blue";
      break;
    default:
      colour = "red";
  }
  $('<div class="confetti-'+i+' '+colour+'"></div>').css({
    "width" : width+"px",
    "height" : height+"px",
    "top" : -Math.random()*20+"%",
    "left" : Math.random()*100+"%",
    "opacity" : Math.random()+0.5,
    "transform" : "rotate("+Math.random()*360+"deg)"
  }).appendTo('.jumbotron');  
  
  drop(i);
}

function drop(x) {
  $('.confetti-'+x).animate({
    top: "60%",
    left: "+="+Math.random()*15+"%"
  }, Math.random()*3000 + 3000, function() {
    reset(x);
  });
}

function reset(x) {
  $('.confetti-'+x).animate({
    "top" : -Math.random()*20+"%",
    "left" : "-="+Math.random()*15+"%"
  }, 0, function() {
    drop(x);             
  });
}