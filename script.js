(function(){
  var date = new Date();
  var day = date.getDate();
  var currentDay = localStorage.getItem("storedCurrentDay");
  //setInterval(function(){ localStorage.clear(); }, 1);
  var currentImage = localStorage.getItem("storedCurrentImage");
  var currentQuote = localStorage.getItem("storedCurrentQuote");
  var quotes = [
 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose _ Dr. Seuss _',
 'The only place where success comes before work is in the dictionary _ Donald Kendall _ ',
 'We must believe that we are guifted for something, and that this thing, at whatever cost, must be attained. _Marie Curie_',
 'Learning never exhausts the mind. _ Leonardo da Vinci _',
 'The only journey is the one within. _ Rainer Maria Rilke _',
 'Good judgment comes from experience, and a lot of that comes from bad judgment. _ Will Rogers _',
'Think in the morning. Act in the noon. Eat in the evening. Sleep in the night. _ William Blake _',
'No act of kindness, no matter how small, is ever wasted. _ Aesop _',
'If you cannot do great things, do small things in a great way. _ Napoleon Hill _',
'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak. _ Thomas Carlyle _',
'Keep your face always toward the sunshine - and shadows will fall behind you. _ Walt Whitman _',
'Happiness can exist only in acceptance. _ George Orwell _',
'The journey of a thousand miles begins with one step. _ Lao Tzu _',
'There is only one corner of the universe you can be certain of improving, and that\'s your own self. _ Aldous Huxley _',
'The best preparation for tomorrow is doing your best today. _ H. Jackson Brown, Jr _',
'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. _ Samuel Beckett _',
'Change your life today. Don\'t gamble on the future, act now, without delay. _ Simone de Beauvoir _',
'Not all those who wander are lost. _ J. R. R. Tolkien _',
'Tell me and I forget. Teach me and I remember. Involve me and I learn. _ Benjamin Franklin _',
'Very little is needed to make a happy life; it is all within yourself, in your way of thinking. _ Marcus Aurelius _',
'If opportunity doesn\'t knock, build a door. _ Milton Berle _',
'The secret of getting ahead is getting started. _ Mark Twain _',
'A leader is one who knows the way, goes the way, and shows the way. John C. Maxwell',
'Always remember that you are absolutely unique. Just like everyone else. _ Margaret Mead _',
'When we are no longer able to change a situation - we are challenged to change ourselves. _ Viktor E. Frankl _',
'What we achieve inwardly will change outer reality. _ Plutarch _',
'All our dreams can come true, if we have the courage to pursue them. _ Walt Disney _',
'We know what we are, but know not what we may be. _ William Shakespeare _'
    ];

  var images = [
'1.jpg',
'2.jpg',
'3.jpg',
'4.jpg',
'5.jpg',
'6.jpg',
'7.jpg',
'8.jpg',
'9.jpg',
'10.jpg',
'11.jpg',
'12.jpg',
'13.jpg',
'14.jpg',
'15.jpg',
'16.jpg',
'17.jpg',
'18.jpg',
'19.jpg',
'20.jpg',
'21.jpg',
'22.jpg',
'23.jpg',
'24.jpg',
'25.jpg',
'26.jpg',
'27.jpg',
'28.jpg',
'29.jpg',
'30.jpg',
'31.jpg',
'32.jpg',
'33.jpg',
'34.jpg',
'35.jpg',
'36.jpg',
'37.jpg',
'38.jpg',
'39.jpg',
'40.jpg',
'41.jpg',
'42.jpg',
'43.jpg',
'44.jpg',
'45.jpg',
'46.jpg',
'47.jpg',
'48.jpg',
'49.jpg',
'50.jpg',
'51.jpg',
'52.jpg',
'53.jpg',
'54.jpg',
'55.jpg',
'56.jpg',
'57.jpg',
'58.jpg',
'59.jpg',
'60.jpg',
'61.jpg',
'62.jpg',
'63.jpg',
'64.jpg',
'65.jpg',
'66.jpg',
'67.jpg',
'68.jpg',
'69.jpg',
'70.jpg',
'71.jpg',
'72.jpg',
'73.jpg',
'74.jpg',
'75.jpg',
'76.jpg',
'77.jpg',
'78.jpg',
'79.jpg',
'80.jpg',
'81.jpg',
'82.jpg',
'83.jpg',
'84.jpg'
  ];

  function chooseOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
//alert("stored day "+localStorage.getItem("storedCurrentDay"));
  window.onload = function() {
    if ( day != localStorage.getItem("storedCurrentDay") ){
      //alert('first if (date)');
        currentImage =null;
        currentQuote=null;
      //  alert("current Image "+ currentImage);
        localStorage.setItem("storedCurrentDay",  day );
    }

    var randomImage;
    if (currentImage == null){
        randomImage = chooseOne(images);
        currentImage = randomImage;
        localStorage.setItem("storedCurrentImage",   currentImage );
    }

    else {
        randomImage = currentImage;
        randomQuote = currentQuote;
    }

    var randomQuote;
    if (currentQuote == null){
        randomQuote = chooseOne(quotes);
        currentQuote = randomQuote;
        localStorage.setItem("storedCurrentQuote",   currentQuote );
    }

    else {
        randomImage = currentImage;
        randomQuote = currentQuote;
    }



    document.getElementById('background-image').style.backgroundImage = 'url("img/'+ randomImage +'")';
    document.getElementById('quote').innerHTML = randomQuote;


    document.getElementById('quote').className = 'move';
	
	document.getElementById('sqr1').addEventListener('click', square1); // I have no clue as to why on earth this works. But it works.
	document.getElementById('sqr2').addEventListener('click', square2);
	document.getElementById('sqr3').addEventListener('click', square3);
	document.getElementById('sqr4').addEventListener('click', square4);
	document.getElementById('sqr5').addEventListener('click', square5);
	document.getElementById('sqr6').addEventListener('click', square6);
	document.getElementById('sqr7').addEventListener('click', square7);
	document.getElementById('sqr8').addEventListener('click', square8);
	document.getElementById('sqr9').addEventListener('click', square9);
	
	// document.getElementById('amazing').addEventListener('click', doAmazingThings); // Just a test thing
	
  };

})();
