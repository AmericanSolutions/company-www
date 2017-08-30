// google analytics code for production

if (document.location.hostname === "americandevshop.com") { 

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-105170975-1', 'auto');
ga('send', 'pageview');

} 
/*
ga('create', 'UA-105170975-1', 'auto');
ga('set', 'checkProtocolTask', null); // Disable file protocol checking. 
ga('set', 'checkStorageTask', null); // Disable cookie storage checking. 
ga('set', 'historyImportTask', null); // Disable history checking (requires reading from cookies). 
ga('send', 'pageview'); */

const phoneClick = document.querySelector('.phone');
  
  phoneClick.addEventListener('click', () => {		
   	  ga('send', 'event', 'phone number', 'clicked', 'phone');
   	  console.log('phone number');
  })

const scheduleCall = document.querySelector('.schedule-call');
  
  scheduleCall.addEventListener('click', () => {    
      ga('send', 'event', 'call scheduled', 'clicked', 'schedule call');
      console.log('schedule call');
  })

const email = document.querySelector('.email');
  
  email.addEventListener('click', () => {		
   	  ga('send', 'event', 'email address', 'clicked', 'email');
   	  console.log('email clicked');
  })

  const home = document.querySelector('.nav-home');
  
  home.addEventListener('click', () => {   
      ga('send', 'event', 'home', 'clicked', 'home nav');
      console.log('home clicked');
  })

document.querySelectorAll('.nav-item').forEach(el => {
  
  el.addEventListener('click', () => {		
   	  ga('send', 'event', el.innerHTML, 'clicked', 'navigation');
   	  console.log(el.innerHTML);
  })
});


