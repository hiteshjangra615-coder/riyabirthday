
let bgm=null;
function setupMusic(){
  if(!bgm){ bgm=new Audio('assets/soft-romantic-instrumental.wav'); bgm.loop=true; bgm.volume=0.22; }
  if(bgm.paused){ bgm.play().then(()=>{ const b=document.getElementById('musicBtn'); if(b)b.textContent='🎵 Music ON'; }).catch(()=>{}); }
}
function toggleMusic(){
  if(!bgm){ setupMusic(); return; }
  if(bgm.paused){ setupMusic(); } else { bgm.pause(); const b=document.getElementById('musicBtn'); if(b)b.textContent='🎵 Music OFF'; }
}
function burst(chars=['♥','✦','✨'],n=24){if(!fx)return;for(let i=0;i<n;i++){let s=document.createElement('span');s.className='float';s.textContent=chars[Math.floor(Math.random()*chars.length)];s.style.left=Math.random()*100+'vw';s.style.bottom='-30px';s.style.fontSize=14+Math.random()*25+'px';s.style.animationDuration=3+Math.random()*3+'s';fx.appendChild(s);setTimeout(()=>s.remove(),6500)}}
function openBox(n){let e=document.getElementById('r'+n);if(e){e.classList.add('show');burst(['🎁','✨','💗'],14)}}
function reveal(){let e=document.getElementById('letter');if(e){e.classList.add('show');burst(['💌','♥','✦'],20)}}
function celebrate(){burst(['🎉','🎊','♥','✨','🥳'],90)}
function unlock(){let x=document.getElementById('code'),o=document.getElementById('result');if(!x||!o)return;if(x.value.trim().toLowerCase()==='rasmalai'){o.classList.add('show');o.innerHTML='<b>🔓 Secret Door #2 opened!</b><p>You found it, Riya. Some surprises are hidden because the sweetest ones are meant to be discovered. 💗</p><a class="btn" href="comfort.html">Enter the secret room →</a>';burst(['🔓','💗','✨'],30)}else{o.classList.add('show');o.innerHTML='<b>Almost 😄</b><p>Hint: it is the sweetest nickname.</p>'}}
function quiz(ans){let o=document.getElementById('quiz');o.classList.add('show');o.innerHTML=ans==='yes'?'<b>Correct! 😂❤️</b><p>Obviously. You deserve a tiny crown for that answer.</p>':'<b>Wrong answer! 😭😂</b><p>Try again. The correct answer is always “Riya is special.”</p>';burst(['👑','💗'],15)}
function openPhoto(src){let l=document.getElementById('lightbox');let i=document.getElementById('big');if(l&&i){i.src=src;l.classList.add('show')}}
function closePhoto(){let l=document.getElementById('lightbox');if(l)l.classList.remove('show')}
function startCountdown(){const t=new Date('2026-10-12T00:00:00+05:30').getTime();function f(){let d=Math.max(0,t-Date.now()),v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60];['days','hours','mins','secs'].forEach((id,i)=>{let e=document.getElementById(id);if(e)e.textContent=String(v[i]).padStart(2,'0')})}f();setInterval(f,1000)}
addEventListener('load',()=>{if(document.getElementById('days'))startCountdown();setTimeout(()=>burst(['✦','♥','✨'],14),500)})

