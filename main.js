//declare some variable
var c,plus,min,multi,divide,equal;
var num = new Array(10); //this array variable used for number key id
$(document).ready(function(){
    for(var i=0;i<10;i++){  
        num[i]=$("#num"+i).html();
    }
    c=$("#c").html();
    plus=$("#plus").html();
    min=$("#min").html();
    multi=$("#multi").html();
    divide=$("#divide").html();
    equal=$("#equal").html();
    // number key button's event
    for(var i=0;i<10;i++){
    //use .data() for storage i value
    $("#num"+i).data('i', i).click(function(){
       if($("#inputField").val()!=0){ $("#inputField").val($("#inputField").val()+num[$(this).data('i')]);
    }else{
        $("#inputField").val(num[$(this).data('i')]);
    }
    });}
    $("#c").click(function(){
        $("#inputField").val("0");
    });
    //function key button's event
    $("#plus").click(function(){
        var func=$("#inputField").val();
        if($("#inputField").val()!=0){
            if(func.slice(-1)== '+' || func.slice(-1)== '-' ||
              func.slice(-1)== '*' || func.slice(-1)== '/'){
              func=$("#inputField").val().slice(0, -1);
            }
             $("#inputField").val(func+plus);
    }else{
        $("#inputField").val("0");
    }
    });
    $("#min").click(function(){
        var func=$("#inputField").val();
        if($("#inputField").val()!=0){ 
            if(func.slice(-1)== '+' || func.slice(-1)== '-' ||
              func.slice(-1)== '*' || func.slice(-1)== '/'){
              func=$("#inputField").val().slice(0, -1);
            }
            $("#inputField").val(func+min);
    }else{
        $("#inputField").val("0");
    }
    });
    $("#multi").click(function(){
        var func=$("#inputField").val();
        if($("#inputField").val()!=0){ 
            if(func.slice(-1)== '+' || func.slice(-1)== '-' ||
              func.slice(-1)== '*' || func.slice(-1)== '/'){
              func=$("#inputField").val().slice(0, -1);
            }
            $("#inputField").val(func+multi);
    }else{
        $("#inputField").val("0");
    }
    });
    $("#divide").click(function(){
        var func=$("#inputField").val();
        if($("#inputField").val()!=0){ 
            if(func.slice(-1)== '+' || func.slice(-1)== '-' ||
              func.slice(-1)== '*' || func.slice(-1)== '/'){
              func=$("#inputField").val().slice(0, -1);
            }
            $("#inputField").val(func+divide);
    }else{
        $("#inputField").val("0");
    }
    });
    $("#equal").click(function(){
        var result=$("#inputField").val();
        $("#inputField").val(eval(result));
    });
});