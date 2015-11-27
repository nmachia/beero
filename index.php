<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Place favicon.ico in the root directory -->
        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/normalize.css">
        <link href='https://fonts.googleapis.com/css?family=Alfa+Slab+One' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
   
   		<div id="topBar"><div id="scoreBox"></div></div>
 
   		<div id="questionBox"></div>
        <div id="askBox"><h1>a beer or a superhero?</h1></div>
        <div id="resultWrapper">
             <div id="resultImage"></div>
	        <div id="resultBox"></div>
	        <div id="resultDescription"></div>
            <div id="nextBox"><a href="#">NEXT</a></div>
            <div class="clearfix"></div>
    	</div>
        <div id="finalResult"><h2>Your Score:</h2><div id="finalScore"></div> <div id="playAgain"><a href="#">PLAY AGAIN</a></div></div>
        <div id="guessBox">
        <a href="#" id="beer" class="guess"><img src="images/beer.png" alt="beer"/></a>
        <a href="#" id="hero" class="guess"><img src="images/hero.png" alt="hero"/></a>
    	</div>
    	
    	

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
        <script src="js/main.js"></script>
         <script type="text/javascript">
        	$( document ).ready(function() {
        		playGame();
        	});
        </script>
    </body>
</html>
