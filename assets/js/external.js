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

	function setDate(){
  		document.getElementById('date').innerHTML = Date();
	}

	function message2(msg) {
  		document.getElementById('scroll').innerHTML = msg;
	}

	function closeMe(){
   		x=document.getElementById("cens");
   		x.style.display="none";
	}

	function openMe(){
   		x=document.getElementById("cens");
		x.style.display="block";
	}

	/*function openMe(){
   		x=document.getElementById("cens2");
		x.style.display="block";
	}*/