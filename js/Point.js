class Point{
    constructor(theRoot, enemySpot) {
        this.root = theRoot;
        this.spot = enemySpot;
        this.x = enemySpot * POINT_WIDTH;
        this.y = -POINT_HEIGHT;
        this.addPoint = false;
        this.domElement = document.createElement('img');
        this.domElement.src = './images/lasagna.png';
        this.domElement.style.position = 'absolute';
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = `${this.y}px`;
        this.domElement.style.zIndex = 5;
        this.domElement.style.width = POINT_WIDTH;
        theRoot.appendChild(this.domElement);
        this.speed = Math.random() / 2 + 0.25;
    }
    update(timeDiff){
        this.y = this.y + timeDiff * this.speed;
        this.domElement.style.top = `${this.y}px`;
        if (this.y > GAME_HEIGHT) {
            this.root.removeChild(this.domElement);
            this.addPoint = true; 
        }
    }
}