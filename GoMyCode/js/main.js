function FBold() {
    var txtbold = document.getElementById("Textchange").style.fontWeight;
    if(txtbold=='normal')
    {
        var txtbold = document.getElementById("Textchange").style.fontWeight='bold';

    }
    else {
        var txtbold = document.getElementById("Textchange").style.fontWeight='normal';
    }

}
function FItalic() {
    var txtitalic = document.getElementById("Textchange").style.fontStyle;
    if(txtitalic=='normal')
    {
        var txtitalic = document.getElementById("Textchange").style.fontStyle='italic';
    }
    else {
        var txtitalic = document.getElementById("Textchange").style.fontStyle='normal';
    }
}
function FUnderline() {
    var textunderline = document.getElementById("Textchange").style.textDecoration;
    if(textunderline=='none')
    {
    var textunderline = document.getElementById("Textchange").style.textDecoration='underline';
}
else{
    var textunderline = document.getElementById("Textchange").style.textDecoration='none';

}


}
function Fsize() {
    var S=document.getElementById("Size").value;
    var x=document.getElementById("Textchange");
    x.style.fontSize=S;
}
function FFont() {
    var F=document.getElementById("Fontchange").value;
    var x=document.getElementById("Textchange");
    x.style.fontFamily=F;
}
$(".Image1").hover(function(){
    $(".b1").toggleClass('b1Hover');
  
  });
  $(".Image2").hover(function(){
    $(".b2").toggleClass('b2Hover');
  
  });
  $(".Image3").hover(function(){
    $(".b3").toggleClass('b3Hover');
  
  });
  


  $(".open").on("click", function(){
    $(".popup, .popup-content").addClass("active");
    });
  
    $(".close, .popup").on("click", function(){
        $(".popup, .popup-content").removeClass("active");
        });
  
       $(".Image1").click(function(){
        $("#fade").modal({
            fadeDuration: 100
          });
        })
        $(".open").on("click", function(){
          $(".popup, .popup-content").addClass("active");
          });
        
          $(".close, .popup").on("click", function(){
              $(".popup, .popup-content").removeClass("active");
              });


              $(".open").on("click", function(){
                $(".popup, .popup-content").addClass("active");
                });
              
                $(".close, .popup").on("click", function(){
                    $(".popup, .popup-content").removeClass("active");
                    });
              
                   $(".Image2").click(function(){
                    $("#fade").modal({
                        fadeDuration: 100
                      });
                    })
                    $(".open").on("click", function(){
                      $(".popup, .popup-content").addClass("active");
                      });
                    
                      $(".close, .popup").on("click", function(){
                          $(".popup, .popup-content").removeClass("active");
                          });


                          $(".open").on("click", function(){
                            $(".popup, .popup-content").addClass("active");
                            });
                          
                            $(".close, .popup").on("click", function(){
                                $(".popup, .popup-content").removeClass("active");
                                });
                          
                               $(".Image3").click(function(){
                                $("#fade").modal({
                                    fadeDuration: 100
                                  });
                                })
                                $(".open").on("click", function(){
                                  $(".popup, .popup-content").addClass("active");
                                  });
                                
                                  $(".close, .popup").on("click", function(){
                                      $(".popup, .popup-content").removeClass("active");
                                      });