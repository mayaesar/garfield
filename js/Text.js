// This class is not used in the project yet.
class Text {
  constructor(root){
    this.domElement = document.createElement('div');
    root.appendChild(this.domElement);
    this.btn1 = document.createElement('button');
    this.domElement.appendChild(this.btn1);
    this.btn2 = document.createElement('button');
    this.domElement.appendChild(this.btn2);
    this.volumeOff = document.createElement('ion-icon');
    this.volumeOn = document.createElement('ion-icon');
  }
  updateText = (content) =>{
    this.domElement.innerText=content;
  }
  updateStyle = (x,y) =>{
    this.domElement.style.position = 'absolute';
    this.domElement.style.left = x;
    this.domElement.style.top = y;
    this.domElement.style.color = 'white';
    this.domElement.style.font = 'bold 30px Impact';
    this.domElement.style.zIndex = 2000;
  }
  addButton = (x,y) => { 
    this.volumeOff.setAttribute('name','volume-mute');
    this.volumeOn.setAttribute('name','volume-high');
    this.btn1.setAttribute('id', 'volumeOff');
    this.btn2.setAttribute('id', 'volumeOn');
    this.btn1.appendChild(this.volumeOff);
    this.btn2.appendChild(this.volumeOn);
    this.btn2.style.display='none';
    this.btn1.style.position = 'absolute';
    this.btn2.style.position = 'absolute';
    this.btn1.style.left = x;
    this.btn1.style.top = y;
    this.btn2.style.left = x;
    this.btn2.style.top = y;
    this.btn1.style.background = 'none';
    this.btn2.style.background = 'none';
    this.volumeOff.style.color= 'white';
    this.volumeOn.style.color= 'white';
    this.volumeOff.style.fontSize = '30px';
    this.volumeOn.style.fontSize = '30px';
    this.volumeOff.style.zIndex=2000;
    this.btn2.style.zIndex=2000;
  } 
}

