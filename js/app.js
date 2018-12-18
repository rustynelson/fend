
class catClicks {

 constructor() {
	this.cclicks = 0;
 }

 // add 1 to gpoints counter
 addcatClicks() {
	this.cclicks += 1;
 }

 // get the gem points
 getcatClicks() {
	return(this.cclicks);
 }

}

// MODEL
const allcats = ['burly1','burly2','burly3','burly4','burly5'];

let cat_objs = [];


// OCTOPUS
function oct_init() {

for (var c = 0; c < allcats.length; c++) {
cat_objs[c] = new catClicks();
}

catlist_init();
cat_image(0);
}

function oct_get_allcats () {
return(allcats);
}

function oct_get_allcatsLength() {
return(allcats.length);
}

function oct_getFirstCat() {
return(allcats[0]);
}

function oct_getCatName(index) {
return(allcats[index]);
}

function oct_addClicks(index) {
cat_objs[index].addcatClicks();
}

function oct_getClicks(index) {
return(cat_objs[index].getcatClicks());
}

// VIEW

function catlist_init() {

var main_page_content = document.getElementById("main_page_content");

for (var i = 0; i < oct_get_allcatsLength(); i++) {

    var elem = document.createElement('div');
    elem.textContent = oct_getCatName(i);
    main_page_content.appendChild(elem);


// add eventListener to each item in the cat name list

elem.addEventListener('click', (function(index) {
        return function() {
cat_image(index);

     };
    })(i));
}

}

function cat_msg_render(index) {
var cat_msg = document.getElementById("cat_msg");
cat_msg.innerHTML = '';
var p = document.createElement('p');
var txt = document.createTextNode(oct_getCatName(index) + '   Amount of image clicks: ' + oct_getClicks(index) );
p.appendChild(txt);
cat_msg.appendChild(p);
}

function cat_image(index) {
var cat_img = document.getElementById("cat_image");
cat_img.innerHTML = '';

var img = document.createElement("img");
img.src = 'images/' + oct_getCatName(index) + '.jpeg' ;
img.width = "500";
img.height = "333";
cat_img.appendChild(img);

img.addEventListener('click',function(event){
oct_addClicks(index);
cat_msg_render(index);
});

cat_msg_render(index);


}

oct_init();

