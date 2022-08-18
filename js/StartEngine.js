class StartEngine {
    constructor (root){
        this.root = root;
    }
    start = () =>{
        const div = document.createElement('div');
        this.root.appendChild(div);
        div.style.zIndex = 2000;
        div.style.width = 700;
        div.style.fontSize='20px';
        div.style.position = "absolute";
        div.style.left=((GAME_WIDTH/2)-(700/2));
        div.style.top = 100;
        div.style.border='5px black solid'
        div.style.borderRadius = '25px';
        div.style.color = 'RGB(176, 35, 26)';
        div.style.backgroundColor='rgba(255, 255, 255, 0.9)';
        div.setAttribute('id','start');
        const header = document.createElement('h1');
        header.innerText = 'INSTRUCTIONS';
        div.appendChild(header);
        header.style.paddingTop=40;
        header.style.fontSize='40px';
        header.style.fontWeight=700;
        header.style.textAlign = 'center';
        const p1 = document.createElement('p');
        p1.innerText=INSTRUCTION1; 
        div.appendChild(p1);
        p1.style.paddingLeft=120;
        const p2 = document.createElement('p');
        p2.innerText=INSTRUCTION2;
        div.appendChild(p2);
        p2.style.paddingLeft=120;
        const p3 = document.createElement('p');
        p3.innerText=INSTRUCTION3;
        div.appendChild(p3);
        p3.style.paddingLeft=120;
        const p4 = document.createElement('p');
        p4.innerText=INSTRUCTION4;
        div.appendChild(p4);
        p4.style.paddingLeft=120;
        const divA = document.createElement('div');
        p4.appendChild(divA);
        const leftArrow = document.createElement('ion-icon');
        leftArrow.setAttribute('name','caret-back');
        divA.appendChild(leftArrow);
        const rightArrow = document.createElement('ion-icon');
        rightArrow.setAttribute('name','caret-forward');
        divA.appendChild(rightArrow);
        divA.style.textAlign = 'center';
        divA.style.paddingRight=120;
        divA.style.marginTop=10;
        divA.style.fontSize= 25;
        divA.style.fontWeight=500;
        const p5 = document.createElement('p');
        p5.innerText=INSTRUCTION5;
        div.appendChild(p5);
        p5.style.paddingLeft=120;
        const play = document.createElement('button');
        play.innerText = "Play now";
        div.appendChild(play);
        play.setAttribute('id','playNow');
        play.style.width = 150;
        play.style.marginLeft=((700/2)-(150/2));
        play.style.color = 'RGB(176, 35, 26)';
        play.style.backgroundColor = 'RGB(255, 245, 153)';
        play.style.fontSize='25px';
        play.style.fontWeight=500;
        play.style.marginTop=20;
        play.style.marginBottom=40;
    }
    clear = () => {
        const div = document.getElementById('start');
        div.style.display='none';
    } 
}