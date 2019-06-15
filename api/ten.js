$(document).ready(function () {
    $("#btn-square-above-look").click(function (e) {
        $.post("http://api.openweathermap.org/data/2.5/weather?id=" + $("option[id='cityRadio']:checked").val() + "&appid=8da0f323881b8fa551ee9246ea30d594&lang=ja&units=metric",
            function (json) {
                $("#weather").html(json.weather[0].description);
                $("#humidity").html(json.main.humidity);
                $("#temp").html(Math.round(json.main.temp));
                
                
                getvalue();
                switch (json.weather[0].main) {
                    case 'Clouds':
                        $("#weatherMark").html("<img src='http://openweathermap.org/img/w/04d.png' >");
                        break;
                    case 'Snow':
                        $("#weatherMark").html("<img src='http://openweathermap.org/img/w/13d.png' >");
                        break;
                    case 'Rain':
                        $("#weatherMark").html("<img src='http://openweathermap.org/img/w/09d.png' >");
                        break;
                    case 'Clear':
                        $("#weatherMark").html("<img src='http://openweathermap.org/img/w/01d.png' >");
                        break;
                    case 'Fog':
                        $("#weatherMark").html("<img src='http://openweathermap.org/img/w/50d.png' >");
                        break;
                    case 'Mist':
                        $("#weatherMark").html("<img src='http://openweathermap.org/img/w/50n.png' >");
                        break;
                    case 'Haze':
                        $("#weatherMark").html("<img src='http://openweathermap.org/img/w/50d.png' >");
                        break;
                    default:
                        $("#weatherMark").html("<img src='http://openweathermap.org/img/w/01n.png' >");


                }
            }
        );
    });
});




$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
          template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
    template += '</div></div>';
    
    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  });



function getvalue() {
    var t = document.getElementById("temp");
    var t1 = t.innerHTML;
    //alert(t1);
    
    if (t1 != null) {
        if (10<= t1 && t1 < 20) {
            var a = document.getElementById("outer");
            a.innerHTML = "<img src ='./fukusou/cardigan.png'>";
        } else if (t1 > 20) {  
            var a = document.getElementById("outer");
            a.innerHTML = "<img src ='./fukusou/shirt.png'>";
        } else if (0<=t1 && t1 < 10){
            var a = document.getElementById("outer");
            a.innerHTML = "<img src ='./fukusou/coat.png'>"
        }
        
    
    if (t1 != null) {
        if (10<= t1 && t1 < 20) {
            var a = document.getElementById("tops");
            a.innerHTML = "<img src ='./fukusou/shirt.png'>";
        } else if (t1 > 20) {
            var a = document.getElementById("tops");
            a.innerHTML = "<img src ='./fukusou/tshirt.png'>";
        } else if (0<=t1 && t1 < 10){
            var a = document.getElementById("tops");
            a.innerHTML = "<img src ='./fukusou/sweater.png'>"
        }
    }
    if (t1 != null) {
        if (10<= t1 && t1 < 20) {
            var a = document.getElementById("bottom");
            a.innerHTML = "<img src ='./fukusou/wide.png'>";
        } else if (t1 > 20) {
            var a = document.getElementById("bottom");
            a.innerHTML = "<img src ='./fukusou/ankle.png'>"
        } else if (0<=t1 && t1 < 10){
            var a = document.getElementById("bottom");
            a.innerHTML = "<img src ='./fukusou/skinny.png'>"
        }
    }
    
    }
    if (t1 != null) {
        if (10<= t1 && t1 < 20) {
            var a = document.getElementById("st");
            a.innerHTML = "<img src ='./fukusou/sweat.png'>";
        } else if (t1 > 20) {
            var a = document.getElementById("st");
            a.innerHTML = "<img src ='./fukusou/tshirt.png'>";
        } else if (0<=t1 && t1 < 10){
            var a = document.getElementById("st");
            a.innerHTML = "<img src ='./fukusou/sweat.png'>"
        }
    }
    if (t1 != null) {
        if (10<= t1 && t1 < 20) {
            var a = document.getElementById("sb");
            a.innerHTML = "<img src ='./fukusou/wide.png'>";
        } else if (t1 > 20) {
            var a = document.getElementById("sb");
            a.innerHTML = "<img src ='./fukusou/line.png'>";
        } else if (0<=t1 && t1 < 10){
            var a = document.getElementById("sb");
            a.innerHTML = "<img src ='./fukusou/skinny.png'>"
        }
    }

    if (t1 != null) {
        if (10<= t1 && t1 < 20) {
            var a = document.getElementById("so");
            a.innerHTML = "<img src ='./fukusou/denim.png'>";
        } else if (t1 > 20) {
            var a = document.getElementById("so");
            a.innerHTML = "<img src ='./fukusou/check.png'>";
        } else if (0<=t1 && t1 < 10){
            var a = document.getElementById("so");
            a.innerHTML = "<img src ='./fukusou/down.png'>"
        }
    }
    
}




        function test() {
            navigator.geolocation.getCurrentPosition(test2);
        }
        
        function test2(position) {
        
            var geo_text = "緯度:" + position.coords.latitude + "\n";
            geo_text += "経度:" + position.coords.longitude + "\n";
            geo_text += "高度:" + position.coords.altitude + "\n";
            geo_text += "位置精度:" + position.coords.accuracy + "\n";
            geo_text += "高度精度:" + position.coords.altitudeAccuracy  + "\n";
            geo_text += "移動方向:" + position.coords.heading + "\n";
            geo_text += "速度:" + position.coords.speed + "\n";
            
        
            var date = new Date(position.timestamp);
        
            geo_text += "取得時刻:" + date.toLocaleString() + "\n";
        
            alert(geo_text);
   
        }




  








