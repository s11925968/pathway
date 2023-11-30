var show=document.getElementById('show');
var video=document.getElementById('video');

show.addEventListener('click',function(){
  if(video.style.opacity=='0'){
  video.style.opacity=1;
  video.style.display='inline';
  }
  else{
    video.style.opacity='0';
    video.style.display='none';
  }
})