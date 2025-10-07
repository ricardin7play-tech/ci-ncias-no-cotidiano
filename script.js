// Navegação
const navBtns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
navBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    navBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    pages.forEach(p=>p.classList.toggle('active', p.id===btn.dataset.target));
  });
});

// Accordion curiosidades
document.querySelectorAll('.acc-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display==='block' ? 'none' : 'block';
  });
});

// Tabs corpo humano
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(tc=>tc.classList.add('hidden'));
    document.getElementById(btn.dataset.tab).classList.remove('hidden');
  });
});

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Quiz
const quizData = [
  {q:'Qual gás é liberado na reação do vinagre com bicarbonato?', choices:['Oxigênio','Dióxido de carbono','Hidrogênio'], a:1},
  {q:'Por que o céu é azul?', choices:['Reflexo do mar','Espalhamento da luz','O Sol emite azul'], a:1},
  {q:'Qual órgão absorve a maior parte dos nutrientes?', choices:['Estômago','Fígado','Intestino delgado'], a:2}
];
let quizIdx=0, score=0;
const qEl=document.getElementById('quiz-question');
const cEl=document.getElementById('quiz-choices');
const rEl=document.getElementById('quiz-result');

function renderQuiz(){
  const item=quizData[quizIdx];
  qEl.textContent=`(${quizIdx+1}/${quizData.length}) `+item.q;
  cEl.innerHTML='';
  item.choices.forEach((c,i)=>{
    const btn=document.createElement('button');
    btn.className='btn';btn.style.margin='4px';
    btn.textContent=c;
    btn.addEventListener('click',()=>{
      if(i===item.a){score++;rEl.textContent='Correto!';}
      else rEl.textContent='Errado. Resposta certa: '+item.choices[item.a];
      cEl.querySelectorAll('button').forEach(b=>b.disabled=true);
    });
    cEl.appendChild(btn);
  });
}
document.getElementById('next-question').addEventListener('click',()=>{
  quizIdx++;
  rEl.textContent='';
  if(quizIdx>=quizData.length){
    qEl.textContent='Quiz finalizado!';
    cEl.innerHTML=`<p>Você acertou ${score} de ${quizData.length}.</p>`;
    quizIdx=0;score=0;
  } else renderQuiz();
});
renderQuiz();

// Galeria
const upload=document.getElementById('gallery-upload');
const grid=document.getElementById('gallery-grid');
upload.addEventListener('change',e=>{
  const files=Array.from(e.target.files).slice(0,8);
  files.forEach(file=>{
    const reader=new FileReader();
    reader.onload=ev=>{
      const div=document.createElement('div');div.className='card';
      const img=document.createElement('img');img.src=ev.target.result;img.className='gallery-thumb';
      div.appendChild(img);grid.prepend(div);
    };
    reader.readAsDataURL(file);
  });
});
