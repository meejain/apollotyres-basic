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

var flexelementnode1p=document.createElement('p');
flexelementnode1p.setAttribute('class', 'vehicle-category-label1');
var flextextnode1p=document.createTextNode('Car1, SUV1 & Van1');
flexelementnode1p.appendChild(flextextnode1p);
flexelementnode1a.appendChild(flexelementnode1p);





var flexelementnode2=document.createElement('div');
var flexattributenode2=document.createAttribute('class');
flexattributenode2.value="item";
flexelementnode2.setAttributeNode(flexattributenode2);
elementnode3.appendChild(flexelementnode2);

var flexelementnode2a=document.createElement('a');
flexelementnode2a.setAttribute('class', 'vehicle-category');
flexelementnode2a.setAttribute('href', 'https://www.apollotyres.com/en-in/car-suv-tyres/');
flexelementnode1.appendChild(flexelementnode2a);

var flexelementnode2p=document.createElement('p');
flexelementnode2p.setAttribute('class', 'vehicle-category-label2');
var flextextnode2p=document.createTextNode('Car2, SUV2 & Van2');
flexelementnode2p.appendChild(flextextnode2p);
flexelementnode2a.appendChild(flexelementnode2p);





