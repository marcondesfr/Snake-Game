window.onload = function () {
    let stage = document.querySelector("#stage");// Select the Id stage
    let ctx = stage.getContext("2d");// Select the context from the stage
    document.addEventListener("keydown", keyPush);
    setInterval(game, 80);// The time that the game will to by update
    const vel = 1;// the numbers houses that the snake will walk
    let vx = vy = 0;
    let px = py = 10;
    let tp = 30;// The size from the squard at in pixels
    let qp = 20;// the amount from the squards at in squard
    let ax = ay = 15;// Start position from the apple
    let trail = [];// The amount from the Snake's trail(Rastro da cobra)
    tail = 5;// The size from the snake's tail
    function game() {
        px += vx;// the Start position from de Snake
        py += vy;// the Start position from de Snake
        // The Movement logic
        if (px < 0) {
            px = qp -1;
        } else if (px > qp -1) {
            px = 0;
        } else if (py < 0) {
            py = qp -1;
        } else if (py > qp -1) {
            py = 0;
        }
        ctx.fillStyle = "black";// The color from the squard
        ctx.fillRect(0,0, stage.width, stage.height);// The filling from the squard
        ctx.fillStyle = "red";// The color from the apple
        ctx.fillRect(ax*tp, ay*tp, tp, tp);// The filling from the apple
        //Snake's logic to didn't dead
        ctx.fillStyle = "gray";// The color from the Snake
        for ( let i = 0; i < trail.length; i ++ ) { // Logic
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1, tp-1);
            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0;
                tail = 5;
            }
        }

        trail.push({x:px, y:py})//Obj with position from the snake
        while (trail.length > tail) {// Tail's amout logic
            trail.shift();// Take out the last
        }
        if (ax == px && ay == py) {// Snake's logic amout
            tail++;
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);
        }
    }
    function keyPush(event) {// Function from buttons
        switch ( event.keyCode) {
            case 37: // Left
                vx = -vel;
                vy = 0;
                break;
            case 38: // up
                vx = 0;
                vy = -vel;
                break;
            case 39: // right
                vx = vel;
                vy = 0;
                break;
            case 40: // down
                vx = 0;
                vy = vel;
                break;
            default:
                break;
        }
    }
}