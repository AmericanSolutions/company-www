// google analytics code for production

/*  if (document.location.hostname === "americandevshop.com") { */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-105525048-1', 'auto');
ga('send', 'pageview');

} 

/* ga analytics code to test event trackers from local file

ga('create', 'UA-105525048-1', 'auto');
ga('set', 'checkProtocolTask', null); // Disable file protocol checking. 
ga('set', 'checkStorageTask', null); // Disable cookie storage checking. 
ga('set', 'historyImportTask', null); // Disable history checking (requires reading from cookies). 
ga('send', 'pageview'); */

document.querySelector('.phone');
  
  el.addEventListener('click', () => {		
   	  ga('send', 'event', el.innerHTML, 'clicked', 'phone');
   	  console.log(el.innerHTML);
  })

document.querySelectorAll('.email');
  
  el.addEventListener('click', () => {		
   	  ga('send', 'event', el.innerHTML, 'clicked', 'email');
   	  console.log(el.innerHTML);
  })

document.querySelectorAll('.nav-item').forEach(el => {
  
  el.addEventListener('click', () => {		
   	  ga('send', 'event', el.innerHTML, 'clicked', 'navigation');
   	  console.log(el.innerHTML);
  })
});


