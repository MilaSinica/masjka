		    	/*var name;
    			name = prompt("Welcome, enter your name here:"); 
    			alert(name);
			    document.write("<h1>" +"Hi," + " " + name + "!" +"</h1>" + "<br>");
  				document.write(document.baseURI+"<br>");
			    document.write(document.title+"<br>");
			    document.getElementById("test").innerHTML = "Hello World";
			    var divs = document.getElementsByTagName('div');
			    document.write(divs + "<br/>");
			    document.write(divs.length);
			   document.getElementById("replaced").innerHTML = "Dogs will enslave the world!";-->
			   var x="Hello";
			   welcomeMsg(x);
			   x="Goodbay";
			   welcomeMsg(x);
			   function welcomeMsg(msg) {
			   	alert(msg);
			   var name=prompt("Welcome, enter your name here:");
			   return name;
			   }
			   var firstName=welcomeMsg("Hi");*/

	function message(msg) {
  		document.getElementById('profile').innerHTML = msg;
	}
		
	function displayDate() {
  		document.getElementById('time-button').innerHTML = Date();
	}	

	function setDate() {
  		document.getElementById('date').innerHTML = Date();
  	}

  	function setUpDonate() {
  		var dog = document.getElementById('donate');
  		var neutralDog = true;
  		setInterval(function() {
  			if(neutralDog) {
  				dog.className = "donation donation-first";
  				neutralDog = false;
  			} else {
  				dog.className = "donation donation-second";
  				neutralDog = true;
  			}

  		}, 300);
	}

	function message2(msg) {
  		document.getElementById('scroll').innerHTML = msg;
	}

	function closeMe() {
   		x=document.getElementById("cens");
   		x.style.display="none";
	}

	function openMe() {
   		x=document.getElementById("cens");
		x.style.display="block";
	}

	function closeMe2() {
   		x=document.getElementById("cens2");
   		x.style.display="none";
	}

	function openMe2() {
   		x=document.getElementById("cens2");
		x.style.display="block";
	}

	function onAngryDogClick(className) {
		document.getElementById('angry').className = "angry-dog " + className;
	}

 	/*function onHoverAudio() {
 		var audio = document.getElementById("#mySoundClip");
		document.getElementsByClassName("spitz").mouseenter(function() {
			audio.play();
	});*/

	function initPage() {
		setDate();
		setUpDonate();
	}

	function hideBox() {
	document.getElementById('light').style.display='none';
	document.getElementById('fade').style.display='none';
	}

	function playSound(soundfile) {
 		 document.getElementById("dummy").innerHTML=
    "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
	}

	function showBox() {
		document.getElementById('light').style.display='block';
		document.getElementById('fade').style.display='block';
	}

/*var navTextOpacity;
var navImageOpacity;
	function navOpacity(navItem) {
		var navText = navItem.getElementsByClassName('nav-text')[0];
		var navImage = navItem.getElementsByClassName('nav-img')[0];
		navTextOpacity = navText.style.opacity;
		navImageOpacity = navImage.style.opacity;

		navText.style.opacity="0";
		navImage.style.opacity="1";
	}

	function navBack(navItem) {
		navItem.getElementsByClassName('nav-text')[0].style.opacity = navTextOpacity;
		navItem.getElementsByClassName('nav-img')[0].style.opacity = navImageOpacity;
	}*/

	/*function openMe(){
   		x=document.getElementById("cens2");
		x.style.display="block";
	}*/