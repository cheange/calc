$(document).ready(function() {

  var result = "",
      a = "",
      b = "",
      oper = "",
      dot = false;

  $('.num').click(function() {

    if (a.length!=0) {
      if (b.length==0){
        dot=false;
      
      b=b+$(this).text();
      $('.screen').html(b);
        }
        else if(b.length<8)
        {
           b=b+$(this).text();
      $('.screen').html(b);
        }
    } else {
      if (result=="0") {

        if ($(this).text()!="0") {
          result=$(this).text();
           $('.screen').html(result); 
        }
      } else if (result.length<8){
          result = result + $(this).text();
          $('.screen').html(result);
          $('.screen').addClass('open');
          }
    }

  });

  $('.clear_all').click(function() {
    clearAll();
  });

  $('.clear').click(function() {
    result = result.substring(0, result.length - 1);
    $('.screen').html(result);

    if (result.length == 0) {
      $('.screen').removeClass('open');
    }
  });

  $('.oper').click(function() {

    if (result.length > 0 && b.length==0) {
      if ($(this).text()=='2^'){
          result=Number(result);
          result=result*result;
          ShowResult();
        }
        else if ($(this).text()=='sqr'){
          result=Number(result);
          result=Math.sqrt(result);
          result=result.toFixed(2); 
          ShowResult();
        }
        else  if (oper.length==0) {

          a = result;
        oper = $(this).text();
        result = result + $(this).text();
        $('.screen').html(result);

      } else {
        
        result = result.substring(0, result.length - 1) + $(this).text();
        $('.screen').html(result);
        }
    }
  });

  $('.dot').click(function() {
     if (!dot && result.length > 0 && b.length==0) {

      dot = true;
       result = result + $(this).text();
          $('.screen').html(result);
      
     } else if (!dot&&b.length!=0) {

      dot=true;
      b=b+$(this).text();
      $('.screen').html(b);
     }


  });

  $('.even').click(function(){
    if (a!=0 && b!=0) {
       if (b==0 && oper=='/'){
        console.log(123);
        result="!infinity!";
      $('.infinity').html(result);
        $('.infinity-container').addClass('open');

        clearAll();

        setTimeout(function(){
          $('.infinity-container').removeClass('open');
        }, 3000);

        a=Number(a);
        b=Number(b);

       
    } else {a=Number(a);
        b=Number(b);  switch (oper){

          case '/':
            result= a/b;
            break;
          case 'X':
            result= a*b;
            break;
          case '+':
            result= a+b;
            break;
          case '-':
            result= a-b;
            break;
       
        }

       ShowResult();

      }
    }

  });

  function clearAll() {
        result="";
        a="";
        b="";
        oper="";
        dot=false;
        $('.screen').html("").removeClass('open');

  }

  function ShowResult() {

     $('.bubble').html(result);
        $('.bubble-container').addClass('open');

        clearAll();

        setTimeout(function(){
          $('.bubble-container').removeClass('open');
        }, 2000);
  }


});