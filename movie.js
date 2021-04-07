
// nav bar
function onClickMenu(){	document.getElementById("menu").classList.toggle("change");	document.getElementById("nav").classList.toggle("change");		document.getElementById("menu-bg").classList.toggle("change-bg");
}


// Create <h1>Element
var h1 = document .createElement("h1");
h1.id = "title";
h1.className = "title";
h1.innerHTML = "<span>☆</span>   MoviesNet  <span>☆</span>";
document.getElementById("header").appendChild(h1);



// Create <p> Element
var p = document.createElement("p");
p.id = "describe";
p.className = "describe";
p.innerHTML = "Action - Thriller - Adventure";
document.getElementById("title").appendChild(p);


// Create <p> Element
var p = document.createElement("p");
p.id = "words";
p.className = "words";
p.innerHTML = "Catch it all <b>here.</b>";
document.getElementById("describe").appendChild(p);


// Create a div for image
var div = document.createElement("div");
div.id = "imageDiv";
div.className = "imageDiv";
// create a img.src and add it to the div
var img = document.createElement("img");
img.src = "pic/images7.jpeg";
div.appendChild(img);
document.getElementById("words").appendChild(div);


// Create <h2> Element 
var h2 = document.createElement("h2");
h2.id = "h2";
h2.className = "h2";
h2.innerHTML = "Home Of Entertainment";
document.getElementById("imageDiv").appendChild(h2);


//  image left

// Create a div for image
var div = document.createElement("div");
div.id = "firstImage";
// create a img.src and add it to the div
var img = document.createElement("img");
img.src = "pic/images1.jpeg";
div.appendChild(img);
document.getElementById("h2").appendChild(div);


// Create a div for image
var div = document.createElement("div");
div.id = "secondImage";
// create a <img.src> and add it to the <div>
var img = document.createElement("img");
img.src = "pic/images2.jpeg";
div.appendChild(img);
document.getElementById("firstImage").appendChild(div);


// Create a div for image
var div = document.createElement("div");
div.id = "thirdImage";
// create a img.src and add it to the div
var img = document.createElement("img");
img.src = "pic/images3.jpeg";
div.appendChild(img);
document.getElementById("secondImage").appendChild(div);


// Create a div for image
var div = document.createElement("div");
div.id = "thirdImage";
// create a img.src and add it to the div
var img = document.createElement("img");
img.src = "pic/images5.jpeg";
div.appendChild(img);
document.getElementById("thirdImage").appendChild(div);


// Create a div for image
var div = document.createElement("div");
div.id = "thirdImage";
// create a img.src and add it to the div
var img = document.createElement("img");
img.src = "pic/images8.jpeg";
div.appendChild(img);
document.getElementById("thirdImage").appendChild(div);


// Create a div for image
var div = document.createElement("div");
div.id = "thirdImage";
// create a img.src and add it to the div
var img = document.createElement("img");
img.src = "pic/images10.jpeg";
div.appendChild(img);
document.getElementById("thirdImage").appendChild(div);


// right side image

// Create a div for image
var div = document.createElement("div");
div.id = "lastImage";
// create a img.src and add it to the div
var img = document.createElement("img");
img.src = "pic/images4.jpeg";
div.appendChild(img);
document.getElementById("thirdImage").appendChild(div);


// Create a div for image
var div = document.createElement("div");
div.id = "fourImage";
// create a img.src and add it to the div
var img = document.createElement("img");
img.src = "pic/images6.jpeg";
div.appendChild(img);
document.getElementById("lastImage").appendChild(div);


// Create a div for image
var div = document.createElement("div");
div.id = "fiveImage";
// create a img.src and add it to the div
var img = document.createElement("img");
img.src = "pic/images9.jpeg";
div.appendChild(img);
document.getElementById("fourImage").appendChild(div);


// Create a div for image
var div = document.createElement("div");
div.id = "sixImage";
// create a img.src and add it to the div
var img = document.createElement("img");
img.src = "pic/images11.jpeg";
div.appendChild(img);
document.getElementById("fiveImage").appendChild(div);


// create ul order list
var ul = document.createElement("ul");
ul.id = "option";
ul.className = "option";
var li = document.createElement("li");
ul.appendChild(li);
var a = document.createElement("a");
a.href = "#";
a.innerHTML = "1";
li.appendChild(a);


var li = document.createElement("li");
ul.appendChild(li);
var a = document.createElement("a");
a.href = "#";
a.innerHTML = "2";
li.appendChild(a);

var li = document.createElement("li");
ul.appendChild(li);
var a = document.createElement("a");
a.href = "#";
a.innerHTML = "3";
li.appendChild(a);
  
var li = document.createElement("li");
ul.appendChild(li);
var a = document.createElement("a");
a.href = "#";
a.innerHTML = "4";
li.appendChild(a);

var li = document.createElement("li");
ul.appendChild(li);
var a = document.createElement("a");
a.href = "#";
a.innerHTML = "5";
li.appendChild(a);
document.getElementById("sixImage").appendChild(ul);

// Create <h3> element
var h3 = document .createElement("h3");
h3.id = "h3";
h3.className = "h3";
h3.innerHTML = '<a href="">About</a>';
document.getElementById("option").appendChild(h3);


// Create <h4> Element
var h4 = document .createElement("h4");
h4.id = "h4";
h4.className = "h4";
h4.innerHTML = "Follow";
document.getElementById("h3").appendChild(h4);

// Create ul order list
var ul = document.createElement("ul");
ul.id = "social";
ul.className = "social";
var li = document.createElement("li");
ul.appendChild(li);
var a = document.createElement("a");
a.href = "#";
a.innerHTML = "Facebook";
li.appendChild(a);
a.style.color = "#4863A0";

var li = document.createElement("li");
ul.appendChild(li);
var a = document.createElement("a");
a.href = "#";
a.innerHTML = "Twitter";
li.appendChild(a);
a.style.color = "#6698FF";

var li = document.createElement("li");
ul.appendChild(li);
var a = document.createElement("a");
a.href = "#";
a.innerHTML = "Instagram";
li.appendChild(a);
a.style.color = "#E41B17";
document.getElementById("h4").appendChild(ul);

// Create h4 element
var h4 = document.createElement("h4");
h4.id = "footer";
h4.className =  "footer";
h4.innerHTML = "MoviesNet Movies Show 2021";
document.getElementById("social").appendChild(h4);