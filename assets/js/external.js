		    	var name;
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
			   var firstName=welcomeMsg("Hi");
		
		