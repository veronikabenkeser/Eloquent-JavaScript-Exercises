function Vector(x, y){
    this.x = x;
    this.y = y;
}

Vector.prototype.plus =  function (vector){
    var newV = new Vector();
    newV.x = this.x + vector.x;
    newV.y = this.y+ vector.y;
    return newV;
};

Vector.prototype.minus = function(vector){
    var newV = new Vector();
    newV.x = this.x - vector.x;
    newV.y = this.y - vector.y;
    return newV;
};

Object.defineProperty(Vector.prototype, "length", {
    get: function(){
        var distanceX= this.x-0;
        var distanceY = this.y-0;
        return Math.sqrt(Math.pow(distanceX, 2 ) + Math.pow(distanceY, 2));
    }
});
