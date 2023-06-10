const calculator={
    add : function(a,b){
        alert(a+b);
    },
    minus: function(a,b){
        alert(a-b);
    },
    multi: function(a,b){
        alert(a*b)
    },
    div: function(a,b){
        alert(a/b);
    },
    poweroff: function(a,b){
        alert(a**b);
    }
};

calculator.add(4,5);
calculator.minus(5,6);
calculator.multi(9,9);
calculator.div(6,7);
calculator.poweroff(3,3);
