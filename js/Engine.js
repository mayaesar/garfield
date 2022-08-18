// The engine class will only be instantiated once. It contains all the logic
// of the game relating to the interactions between the player and the
// enemy and also relating to how our enemies are created and evolve over time
class Engine {
  // The constructor has one parameter. It will refer to the DOM node that we will be adding everything to.
  // You need to provide the DOM node when you create an instance of the class
  constructor(theRoot) {
    // We need the DOM element every time we create a new enemy so we
    // store a reference to it in a property of the instance.
    this.root = theRoot;
    // We create our hamburger.
    // Please refer to Player.js for more information about what happens when you create a player
    //this.isReady = new Start(this.root); 
    this.player = new Player(this.root);
    this.topText = new Text(this.root);
    this.volumeBtn = new Text(this.root);
    this.volumeBtn.addButton(50,50);
    this.soundFX = new Sound(this.root);
    this.volumeOff = document.getElementById('volumeOff');
    this.volumeOn = document.getElementById('volumeOn');
    this.volumeOff.addEventListener('click', this.soundFX.turnOff);
    this.volumeOn.addEventListener('click', this.soundFX.turnOn);
    
    // this.scoreTime, (GAME_WIDTH - 200), 50,
    
    // Initially, we have no enemies in the game. The enemies property refers to an array
    // that contains instances of the Enemy class
    this.enemies = [];
    this.points=[];
    this.score = 0;
    this.time = 0;
    this.ready = false;
    // We add the background image to the game
    addBackground(this.root);
  }
  // The gameLoop will run every few milliseconds. It does several things
  //  - Updates the enemy positions
  //  - Detects a collision between the player and any enemy
  //  - Removes enemies that are too low from the enemies array
  gameLoop = () => {
    this.scoreTime = addScoreTime(this.time, this.score);
    this.topText.updateText(this.scoreTime);
    this.topText.updateStyle((GAME_WIDTH - 300), 50);
    //this.soundFX.starting();
    // This code is to see how much time, in milliseconds, has elapsed since the last
    // time this method was called.
    // (new Date).getTime() evaluates to the number of milliseconds since January 1st, 1970 at midnight.
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }

    let timeDiff = new Date().getTime() - this.lastFrame;
    

    this.lastFrame = new Date().getTime();
    // We use the number of milliseconds since the last call to gameLoop to update the enemy positions.
    // Furthermore, if any enemy is below the bottom of our game, its destroyed property will be set. (See Enemy.js)
    this.enemies.forEach((enemy) => {
      enemy.update(timeDiff);
    });
    this.points.forEach((point) =>{
      point.update(timeDiff);
    })

    // We remove all the destroyed enemies from the array referred to by \`this.enemies\`.
    // We use filter to accomplish this.
    // Remember: this.enemies only contains instances of the Enemy class.
    this.enemies = this.enemies.filter((enemy) => {
      return !enemy.destroyed;
    });
    this.points = this.points.filter((point) => {
      return !point.addPoint;
    });

    // We need to perform the addition of enemies until we have enough enemies.
    while (this.enemies.length < MAX_ENEMIES) {
      // We find the next available spot and, using this spot, we create an enemy.
      // We add this enemy to the enemies array
      const spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }

    while (this.points.length < MAX_POINTS){
      const spot = nextEnemySpot(this.points);
      this.points.push(new Point(this.root, spot));
    }

    // We check if the player is dead. If he is, we alert the user
    // and return from the method (Why is the return statement important?)
    // console.log(checkIsDead);
    // if (this.isPlayerDead()) {
    //   window.alert('Game over');
    //   return;
    // }
    if (this.isPlayerDead()) {
      this.score--;
    }

    if (this.isPoint()){
      this.score++;
    }
    this.time = this.time + 0.02;

    // If the player is not dead, then we put a setTimeout to run the gameLoop in 20 milliseconds
    const loop = setTimeout(this.gameLoop, 20);

    if (this.time>=30){
      clearTimeout(loop);
      this.end();
    }
    
  };
  // This method is not implemented correctly, which is why
  // the burger never dies. In your exercises you will fix this method.
  isPlayerDead = () => {
    let check = false;
    this.enemies.forEach(element => {
      const playerTop = this.player.x;
      const playerBottom = (this.player.x + PLAYER_HEIGHT);
      const playerLeft = this.player.y;
      const playerRight = (this.player.y + PLAYER_WIDTH);
      const enemyTop = element.x;
      const enemyBottom = (element.x + ENEMY_HEIGHT);
      const enemyLeft = element.y;
      const enemyRight = (element.y + ENEMY_WIDTH);
      if (!((playerTop >= enemyBottom) || (playerBottom <= enemyTop))&& !((playerLeft >= enemyRight) || (playerRight <= enemyLeft))){
        check = true;
        this.soundFX.lostPoint();
      }
    });
    return check;
  };
  isPoint = () => {
    let check = false;
    this.points.forEach(element => {
      const playerTop = this.player.x;
      const playerBottom = (this.player.x + PLAYER_HEIGHT);
      const playerLeft = this.player.y;
      const playerRight = (this.player.y + PLAYER_WIDTH);
      const pointTop = element.x;
      const pointBottom = (element.x + POINT_HEIGHT);
      const pointLeft = element.y;
      const pointRight = (element.y + POINT_WIDTH);
      if (!((playerTop >= pointBottom) || (playerBottom <= pointTop))&& !((playerLeft >= pointRight) || (playerRight <= pointLeft))){
        check = true;
        this.soundFX.gotPoint();
      }
    });
    return check;
  };
  
  end = () => {
    const div = document.createElement('div');
    this.root.appendChild(div);
    div.style.zIndex = 2000;
    div.style.width = 700;
    div.style.fontSize='20px';
    div.style.position = "absolute";
    div.style.textAlign = 'center';
    div.style.left=((GAME_WIDTH/2)-(700/2));
    div.style.top = 200;
    div.style.border='5px black solid'
    div.style.borderRadius = '25px';
    div.style.color = 'RGB(176, 35, 26)';
    div.style.backgroundColor='rgba(255, 255, 255, 0.9)';
    div.setAttribute('id','end');
    const header = document.createElement('h1');
    header.innerText = 'Times up';
    div.appendChild(header);
    header.style.paddingTop=40;
    header.style.fontSize='40px';
    header.style.fontWeight=700;
    const text = document.createElement('h2');
    text.innerText="Congragulations your score is: " + this.score;
    div.appendChild(text);
  }
}

