(function(){
  var date = new Date();
  var day = date.getDate();
  //var currentDay = localStorage.getItem("storedCurrentDay");
  //setInterval(function(){ localStorage.clear(); }, 5000);
  var currentImage = localStorage.getItem("storedCurrentImage");
  var quotes = [
 'You have brains in your head. You have feet in your shoes. You can steer yourself anay direction you choose _ DR. SEUSS _',
 'The only place where success comes before work is in the dictionary _ DONALD KENDALL _ ',
 'We must believe that we are guifted for something, and that this thing, at whatever cost, must be attained. _MARIE CURIE_'
    ];

  var images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg'

  ];

  function chooseOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
//alert("stored day "+localStorage.getItem("storedCurrentDay"));
  window.onload = function() {
    if ( day != localStorage.getItem("storedCurrentDay") ){
      //alert('first if (date)');
        currentImage =null;
      //  alert("current Image "+ currentImage);
        localStorage.setItem("storedCurrentDay",  day );
    }

    var randomImage;
    if (currentImage == null){
        //alert("if");
        randomImage = chooseOne(images);
        currentImage = randomImage;
        localStorage.setItem("storedCurrentImage",   currentImage );
    }

    else {
        alert("else");
        randomImage = currentImage;
    }

    var randomQuote = chooseOne(quotes);

    document.getElementById('background-image').style.backgroundImage = 'url("img/'+ randomImage +'")';
    document.getElementById('quote').innerHTML = randomQuote;


    document.getElementById('quote').className = 'move';

  };

})();
