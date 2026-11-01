(function(){
 const toggle=document.querySelector('.nav-toggle');
 const nav=document.querySelector('.nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
 const back=document.querySelector('.back-top');
 if(back){const update=()=>back.classList.toggle('show',window.scrollY>500);window.addEventListener('scroll',update,{passive:true});update();back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
 document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
   const filter=btn.dataset.filter;
   document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===btn));
   document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter;});
 }));
 const form=document.querySelector('#project-form');
 if(form){form.addEventListener('submit',e=>{
   e.preventDefault();
   const data=new FormData(form);
   const get=k=>(data.get(k)||'').toString().trim();
   if(!get('name')||!get('location')||!get('service')){alert('Please complete the required fields.');return;}
   const lines=[
    'Hello Louis, I would like to discuss a cabinetry project.',
    'Name: '+get('name'),'Project location: '+get('location'),
    'Service: '+get('service'),'Project stage: '+get('stage'),
    'Preferred completion: '+get('month'),'Budget: '+get('budget'),
    'Property type: '+get('property'),'Details: '+get('details')
   ].filter(Boolean);
   const url='https://wa.me/60168328653?text='+encodeURIComponent(lines.join('\n'));
   window.open(url,'_blank','noopener');
 });}
})();
