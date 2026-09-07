(() => {
  const showcase=document.getElementById('instrument-showcase');
  if(!showcase)return;
  const load=showcase.querySelector('[data-load-model]'),close=showcase.querySelector('[data-close-model]');
  const preview=showcase.querySelector('.instrument-preview'),live=showcase.querySelector('.instrument-live');
  let frame;
  load.addEventListener('click',()=>{
    if(!frame){frame=document.createElement('iframe');frame.title='Proposed cage monitoring rig: interactive 3D model and simulated signal replay';frame.src='instrument/';frame.allow='fullscreen';live.append(frame);}
    preview.hidden=true;preview.style.display='none';live.hidden=false;close.focus();
  });
  close.addEventListener('click',()=>{
    // Releasing the iframe also releases its GPU resources and replay loop.
    frame?.remove();frame=null;live.hidden=true;preview.hidden=false;preview.style.display='';load.focus();
  });
})();
