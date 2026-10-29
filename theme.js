(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})();
document.addEventListener('DOMContentLoaded',function(){
  var b=document.getElementById('theme');if(!b)return;
  b.addEventListener('click',function(){
    var r=document.documentElement,cur=r.getAttribute('data-theme');
    var dark=cur?cur==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
    r.setAttribute('data-theme',dark?'light':'dark');
    try{localStorage.setItem('theme',dark?'light':'dark')}catch(e){}
  });
});
