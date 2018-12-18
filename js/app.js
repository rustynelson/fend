
class CurrentCat {
constructor() {
        this.currentcat = 0;
 }

 // set the index of the current cat image
 setCurrentCat(index) {
        this.currentcat = index;
 }

 // get the index of the current cat image
 getCurrentCat() {
        return(this.currentcat);
 }


}

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

setcatClicks(index) {
this.cclicks = index;
}

}

// MODEL
const allcats = ['burly1','burly2','burly3','burly4','burly5'];
let image_files = ['images/burly1.jpeg','images/burly2.jpeg','images/burly3.jpeg','images/burly4.jpeg','images/burly5.jpeg'];

let cat_objs = [];


// OCTOPUS
function oct_init() {

for (var c = 0; c < allcats.length; c++) {
cat_objs[c] = new catClicks();
}

CurrentCat = new CurrentCat();

catlist_init();
cat_image(0);
admin_init();

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

function oct_setCurrentCat(index) {
CurrentCat.setCurrentCat(index);
}

function oct_getCurrentCat() {
return(CurrentCat.getCurrentCat());
}

function oct_updateCatName(index,new_name) {
allcats[index] = new_name;
}

function oct_updateCatClickCount(index,new_click_count) {
cat_objs[index].setcatClicks(new_click_count);
}

function oct_updateImageFile(index,newImageFile) {
image_files[index] = newImageFile;
}

function oct_catlist_init() {
catlist_init();
}

function oct_cat_image(index) {
cat_image(index);
}

// VIEW

function catlist_init() {

var main_page_content = document.getElementById("main_page_content");
main_page_content.innerHTML = '';

for (var i = 0; i < oct_get_allcatsLength(); i++) {

    var elem = document.createElement('div');
    elem.textContent = oct_getCatName(i);
    main_page_content.appendChild(elem);


// add eventListener to each item in the cat name list

elem.addEventListener('click', (function(index) {
        return function() {
oct_cat_image(index);

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
img.src = image_files[index];
img.width = "500";
img.height = "333";
cat_img.appendChild(img);

img.addEventListener('click',function(event){
oct_addClicks(index);
cat_msg_render(index);
});

cat_msg_render(index);
oct_setCurrentCat(index);


}

function admin_draw_form() {
var admin_area = document.getElementById("admin_area");

var cat_index = oct_getCurrentCat();

admin_area.innerHTML = '';

// create form
var form = document.createElement("form");
    var element1 = document.createElement("input"); 
    var element2 = document.createElement("input");  
    var element3 = document.createElement("input");  

var element1label = document.createElement('label'); 
element1label.innerHTML = "New Cat Name ";
form.appendChild(element1label);

    element1.name="un";
    form.appendChild(element1);  
var linebreak = document.createElement('br');
form.appendChild(linebreak);


var element2label = document.createElement('label'); 
element2label.innerHTML = "New Image File";
form.appendChild(element2label);
    element2.name="pw";
    form.appendChild(element2);
var linebreak = document.createElement('br');
form.appendChild(linebreak);

var element3label = document.createElement('label'); 
element3label.innerHTML = "Change click number";
form.appendChild(element3label);
    element3.name="newClickNum";
    form.appendChild(element3);
var linebreak = document.createElement('br');
form.appendChild(linebreak);

var sbutton = document. createElement("button");
var sbutton_text = document.createTextNode("Submit");
sbutton.appendChild(sbutton_text);

var cbutton = document. createElement("button");
var cbutton_text = document.createTextNode("Cancel");
cbutton.appendChild(cbutton_text);

    admin_area.appendChild(form);
admin_area.appendChild(cbutton);
admin_area.appendChild(sbutton);

cbutton.addEventListener ("click", function() {
oct_cat_image(oct_getCurrentCat());
admin_area.innerHTML = '';
admin_init();
}
);


sbutton.addEventListener ("click", function() {


if(element1.value.length > 1) {
oct_updateCatName(cat_index,element1.value);
}

if(element2.value.length > 1) {
oct_updateImageFile(cat_index,element2.value);
}

if(element3.value.length > 1) {
oct_updateCatClickCount(cat_index,element3.value);
}

admin_area.innerHTML = '';
admin_init();
oct_catlist_init();
oct_cat_image(cat_index);
}
);

}

function admin_init() {

var admin_area = document.getElementById("admin_area");
var button = document. createElement("button");
var button_text = document.createTextNode("Admin");
button.appendChild(button_text);
admin_area.appendChild(button);

button.addEventListener ("click", admin_draw_form,false);

}

oct_init();

