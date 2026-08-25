
const fx=document.getElementById('fx');
function burst(chars=['♥','✦','✧','❤','✨'],amount=22){
 if(!fx)return;
 for(let i=0;i<amount;i++){const s=document.createElement('span');s.className='float';s.textContent=chars[Math.floor(Math.random()*chars.length)];
 s.style.left=Math.random()*100+'vw';s.style.bottom=(-20-Math.random()*20)+'px';s.style.fontSize=(14+Math.random()*24)+'px';s.style.animationDuration=(3+Math.random()*3)+'s';s.style.animationDelay=(Math.random()*.5)+'s';fx.appendChild(s);setTimeout(()=>s.remove(),6500)}
}
function openGift(n){const e=document.getElementById('msg'+n);if(e){e.classList.add('show');burst(['🎁','✨','♥'],12)}}
function revealLetter(){const e=document.getElementById('letter');if(e){e.classList.add('show');burst(['💌','♥','✦'],20)}}
function celebrate(){burst(['🎉','🎊','♥','✨','🥳'],85);playChime()}
function unlock(){const input=document.getElementById('code');const out=document.getElementById('codeResult');if(!input||!out)return;
 if(input.value.trim().toLowerCase()==='rasmalai'){out.classList.add('show');out.innerHTML='<b>🔓 Secret unlocked!</b><p>You found the hidden door. There is always one more little reason to smile. ✨</p>';burst(['🔓','💗','✨'],25)}
 else {out.classList.add('show');out.innerHTML='<b>Not this one 😄</b><p>Hint: use the sweetest nickname from the gifts.</p>'}
}
let audioCtx;
function playChime(){try{audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();[523.25,659.25,783.99,1046.5].forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.frequency.value=f;o.type='sine';g.gain.setValueAtTime(.0001,audioCtx.currentTime+i*.13);g.gain.exponentialRampToValueAtTime(.08,audioCtx.currentTime+i*.13+.03);g.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+i*.13+.5);o.connect(g).connect(audioCtx.destination);o.start(audioCtx.currentTime+i*.13);o.stop(audioCtx.currentTime+i*.13+.55)})}catch(e){}}
function startCountdown(){
 const target=new Date('2026-10-12T00:00:00+05:30').getTime();
 const ids=['days','hours','mins','secs'];
 function tick(){let d=target-Date.now();if(d<0)d=0;let vals=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60];ids.forEach((id,i)=>{const e=document.getElementById(id);if(e)e.textContent=String(vals[i]).padStart(2,'0')})}
 tick();setInterval(tick,1000)
}
window.addEventListener('load',()=>{if(document.getElementById('days'))startCountdown();setTimeout(()=>burst(['✦','♥','✨'],14),450)})
