		//multiple selectors

		var list = document.querySelectorAll("li.list-item, li#li2.list-item.style, p");

		// list.style.fontSize = "20px"
				list.forEach(function(value, index){
					list[index].style.backgroundColor = 'magenta';
						
				})


	// printing the value in js
	
	console.log("Hello Ramu")			
	alert("Hello Ramu")			
