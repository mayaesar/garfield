class Sound {
    constructor(root){
        this.domElement1 = document.createElement('audio');
        this.domElement2 = document.createElement('audio');
        root.appendChild(this.domElement1);
        root.appendChild(this.domElement2);
        this.source = document.createElement('source');
        this.volumeOff = document.getElementById('volumeOff');
        this.volumeOn = document.getElementById('volumeOn');
    }
    lostPoint = () => {
        this.source.setAttribute('src','./sounds/lostAPoint.mp3');
        this.domElement1.appendChild(this.source);
        this.domElement1.play();
    }
    gotPoint = () => {
        this.source.setAttribute('src','./sounds/gotAPoint.mp3');
        this.domElement2.appendChild(this.source);
        this.domElement2.play();
    }
    turnOff = () => {
        this.volumeOn.style.display="block";
        this.volumeOff.style.display="none";
        this.domElement1.muted = true;
        this.domElement2.muted = true;
    }
    turnOn = () => {
        this.volumeOn.style.display='none';
        this.volumeOff.style.display='block';
        this.domElement1.muted = false; 
        this.domElement2.muted = false;
    }
    
}