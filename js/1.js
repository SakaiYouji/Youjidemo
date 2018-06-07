var tool = document.getElementById('arrow'); 
    window.onscroll = function () {
      var top = document.documentElement.scrollTop || document.body.scrollTop; 
      if(top>=700) {
        tool.style.display = 'block';
      }else {
        tool.style.display = 'none';
      }
      if (top>=900) {
        var a=document.getElementById('level');
        a.style.position="fixed";
        a.style.top=0;
        }
        if (top<900) {
        var a=document.getElementById('level');
        a.style.position="inherit";
        }
    }
function fun1 () {
  var x= document.documentElement.scrollTop || document.body.scrollTop;
  x-=30;
  window.scrollTo(0,x);
  if (x>0) {setTimeout("fun1()",1);};
}