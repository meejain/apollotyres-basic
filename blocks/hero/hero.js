var parent=document.querySelector(".hero");
var elementnode=document.createElement('div');
var attributenode=document.createAttribute('class');
attributenode.value="container";
elementnode.setAttributeNode(attributenode);
parent.appendChild(elementnode);

var elementnode1=document.createElement('h1');
var textnode11=document.createTextNode('APOLLO');
var textnode12=document.createTextNode('TYRES');
var textnode13=document.createTextNode('Finder');
var linebreak1 = document.createElement("br");
var linebreak2 = document.createElement("br");
elementnode1.appendChild(textnode11);
elementnode1.appendChild(linebreak1);
elementnode1.appendChild(textnode12);
elementnode1.appendChild(linebreak2);
elementnode1.appendChild(textnode13);
elementnode.appendChild(elementnode1);


var elementnode2=document.createElement('p');
elementnode2.setAttribute('class', 'para1');
var textnode2=document.createTextNode('Choose a category to find the perfect tyre for your vehicle');
elementnode2.appendChild(textnode2);
elementnode.appendChild(elementnode2);






var elementnode3=document.createElement('div');
var attributenode3=document.createAttribute('class');
attributenode3.value="container-myflex";
elementnode3.setAttributeNode(attributenode3);
elementnode.appendChild(elementnode3);

var flexelementnode1=document.createElement('div');
var flexattributenode1=document.createAttribute('class');
flexattributenode1.value="item";
flexelementnode1.setAttributeNode(flexattributenode1);
elementnode3.appendChild(flexelementnode1);

var flexelementnode1a=document.createElement('a');
flexelementnode1a.setAttribute('class', 'vehicle-category');
flexelementnode1a.setAttribute('href', 'https://www.apollotyres.com/en-in/car-suv-tyres/');
flexelementnode1.appendChild(flexelementnode1a);

var flexelementnode1img=document.createElement('img');
flexelementnode1img.setAttribute('class', 'svg-img');
flexelementnode1img.setAttribute('src', '../icons/icons8-car-50.png');
flexelementnode1a.appendChild(flexelementnode1img);

var flexelementnode1p=document.createElement('p');
flexelementnode1p.setAttribute('class', 'vehicle-category-label');
var flextextnode1p=document.createTextNode('CAR, SUV & VAN');
flexelementnode1p.appendChild(flextextnode1p);
flexelementnode1a.appendChild(flexelementnode1p);









var flexelementnode2=document.createElement('div');
var flexattributenode2=document.createAttribute('class');
flexattributenode2.value="item";
flexelementnode2.setAttributeNode(flexattributenode2);
elementnode3.appendChild(flexelementnode2);

var flexelementnode2a=document.createElement('a');
flexelementnode2a.setAttribute('class', 'vehicle-category');
flexelementnode2a.setAttribute('href', 'https://www.apollotyres.com/en-in/bike-scooter-tyres/');
flexelementnode2.appendChild(flexelementnode2a);

var flexelementnode2p=document.createElement('p');
flexelementnode2p.setAttribute('class', 'vehicle-category-label');
var flextextnode2p=document.createTextNode('BIKE & SCOOTER');
flexelementnode2p.appendChild(flextextnode2p);
flexelementnode2a.appendChild(flexelementnode2p);







var flexelementnode3=document.createElement('div');
var flexattributenode3=document.createAttribute('class');
flexattributenode3.value="item";
flexelementnode3.setAttributeNode(flexattributenode3);
elementnode3.appendChild(flexelementnode3);

var flexelementnode3a=document.createElement('a');
flexelementnode3a.setAttribute('class', 'vehicle-category');
flexelementnode3a.setAttribute('href', 'https://www.apollotyres.com/en-in/agricultural-tyres/');
flexelementnode3.appendChild(flexelementnode3a);

var flexelementnode3p=document.createElement('p');
flexelementnode3p.setAttribute('class', 'vehicle-category-label');
var flextextnode3p=document.createTextNode('AGRICULTURAL');
flexelementnode3p.appendChild(flextextnode3p);
flexelementnode3a.appendChild(flexelementnode3p);





var flexelementnode4=document.createElement('div');
var flexattributenode4=document.createAttribute('class');
flexattributenode4.value="item";
flexelementnode4.setAttributeNode(flexattributenode4);
elementnode3.appendChild(flexelementnode4);

var flexelementnode4a=document.createElement('a');
flexelementnode4a.setAttribute('class', 'vehicle-category');
flexelementnode4a.setAttribute('href', 'https://www.apollotyres.com/en-in/bike-scooter-tyres/');
flexelementnode4.appendChild(flexelementnode4a);

var flexelementnode4p=document.createElement('p');
flexelementnode4p.setAttribute('class', 'vehicle-category-label');
var flextextnode4p=document.createTextNode('TRUCK & BUS');
flexelementnode4p.appendChild(flextextnode4p);
flexelementnode4a.appendChild(flexelementnode4p);




var flexelementnode5=document.createElement('div');
var flexattributenode5=document.createAttribute('class');
flexattributenode5.value="item";
flexelementnode5.setAttributeNode(flexattributenode5);
elementnode3.appendChild(flexelementnode5);

var flexelementnode5a=document.createElement('a');
flexelementnode5a.setAttribute('class', 'vehicle-category');
flexelementnode5a.setAttribute('href', 'https://www.apollotyres.com/en-in/industrial-tyres/');
flexelementnode5.appendChild(flexelementnode5a);

var flexelementnode5p=document.createElement('p');
flexelementnode5p.setAttribute('class', 'vehicle-category-label');
var flextextnode5p=document.createTextNode('INDUSTRIAL');
flexelementnode5p.appendChild(flextextnode5p);
flexelementnode5a.appendChild(flexelementnode5p);







var flexelementnode6=document.createElement('div');
var flexattributenode6=document.createAttribute('class');
flexattributenode6.value="item";
flexelementnode6.setAttributeNode(flexattributenode6);
elementnode3.appendChild(flexelementnode6);

var flexelementnode6a=document.createElement('a');
flexelementnode6a.setAttribute('class', 'vehicle-category');
flexelementnode6a.setAttribute('href', 'https://www.apollotyres.com/en-in/earthmover-tyres/');
flexelementnode6.appendChild(flexelementnode6a);

var flexelementnode6p=document.createElement('p');
flexelementnode6p.setAttribute('class', 'vehicle-category-label');
var flextextnode6p=document.createTextNode('EARTHMOVER');
flexelementnode6p.appendChild(flextextnode6p);
flexelementnode6a.appendChild(flexelementnode6p);