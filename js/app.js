
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

const allcats = ['burly1','burly2','burly3','burly4','burly5'];

let cat_objs = [];

for (var c = 0; c < allcats.length; c++) {
cat_objs[c] = new catClicks();
}

var main_page_content = document.getElementById("main_page_content");


for (var i = 0; i < allcats.length; i++) {

    // This is the number we're on...
    var catname = allcats[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = catname;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(index) {
        return function() {
            //alert(index);
var katname = allcats[index];
var tmp_cat_image = katname + '.jpeg'
//cat_objs[index].addcatClicks();


// display the cat pic

var src = document.getElementById("cat_image");

var cat_msg = document.getElementById("cat_msg");
// clean up any previous click messages
while(src.childNodes.length >= 1) {
    src.removeChild(src.firstChild);
  }
while(cat_msg.childNodes.length >= 1) {
    cat_msg.removeChild(cat_msg.firstChild);
  }


var img = document.createElement("img");
img.src = 'images/' + tmp_cat_image ;
img.width = "500";
img.height = "333";
var p = document.createElement('p');
var txt = document.createTextNode(katname + '   Amount of image clicks: ' + cat_objs[index].getcatClicks() );
p.appendChild(txt);
cat_msg.appendChild(p);

img.addEventListener('click',function(event){
cat_objs[index].addcatClicks();
while(cat_msg.childNodes.length >= 1) {
    cat_msg.removeChild(cat_msg.firstChild);
  }

var p = document.createElement('p');
var txt = document.createTextNode(katname + '   Amount of image clicks: ' + cat_objs[index].getcatClicks() );
p.appendChild(txt);
cat_msg.appendChild(p);
});

src.appendChild(img);


        };
    })(i));

    main_page_content.appendChild(elem);
};



