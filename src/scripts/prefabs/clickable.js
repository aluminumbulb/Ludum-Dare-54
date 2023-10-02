class Clickable{

    constructor(x, y, id = "Clickable Object", resp){
        this.x = x;
        this.y = y;
        this.id = id;
        this.resp = resp;
    }

    recieveClickAt(x, y){
        if(this.checkClicked(x, y)){
            return true;
        }
    }


    exitTo = function(relativePath){
        if(typeof relativePath == 'string')
            document.location.href = relativePath;
        //send user to desired page
    }
}

class ClickableArea extends Clickable{
    constructor(x, y, w, h, id, resp){
        super(x, y, id, resp);
        this.w = w;
        this.h = h;
        this.r = 0;
    }

    debugDraw = function(){
        push();
            fill(255,0,0,50);
            ellipse(this.x, this.y, this.r);
            noFill();
            stroke(0)
            textSize(12);
            text(this.id, this.x-this.r/2, this.y)
        pop();
    }

    //mx,my = mouse x and y coord resp.
    checkClicked(mx, my){
        if(mx>this.x&&mx<this.x+this.w){
            if(my>this.y&&my<this.y+this.h){
                console.log(this.id+" clicked");
                return true;
            }
        }c  
    }
}

class ClickableCircumference extends Clickable{
    constructor(x, y, r, id, resp){
        super(x, y, id, resp);
        this.r = r;
    }

    debugDraw = function(){
        push();
            fill(255,0,0,50);
            ellipse(this.x, this.y, this.r);
            noFill();
            stroke(0)
            textSize(12);
            text(this.id, this.x-this.r/2, this.y)
        pop();
    }

    checkClicked(mx, my){
        if(dist(mx,my, this.x, this.y) < this.r){
            console.log(this.id+" clicked");
            return true;
        }
    }
}