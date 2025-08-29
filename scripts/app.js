const gamesEl = document.getElementById('game-grid');
}


function showIframe(game){
modalContent.innerHTML = `
<h2>${escapeHtml(game.title)}</h2>
<div style="margin:12px 0"><iframe src="${escapeHtml(game.url)}" style="width:100%;height:70vh;border:0;border-radius:8px"></iframe></div>
`;
}


function closeModal(){
modal.classList.add('hidden');
document.body.style.overflow = '';
modalContent.innerHTML = '';
}


modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });


function renderGrid(){
gamesEl.innerHTML = '';
const list = games.filter(matchesFilters);
if(!list.length){
gamesEl.innerHTML = '<div class="panel container">No games found.</div>';
return;
}
list.forEach(g => {
const card = document.createElement('article');
card.className = 'card';
card.innerHTML = `
<div class="cover" style="background-image:url('${(g.cover||'assets/covers/placeholder.jpg')}')"></div>
<div class="meta">
<h3>${escapeHtml(g.title)}</h3>
<p>${escapeHtml((g.description||'').slice(0,80))}</p>
<div class="tags">${(g.tags||[]).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
</div>
<div class="actions">
<button class="btn btn-primary" data-id="${g.id}">Play</button>
<button class="btn btn-ghost" onclick="window.open('${g.url}','_blank','noopener')">Open</button>
</div>
`;
card.querySelector('[data-id]')?.addEventListener('click', ()=> openModal(g));
gamesEl.appendChild(card);
});
}


function escapeHtml(s){
return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c]));
}


searchEl.addEventListener('input', ()=> renderGrid());
filterToggle.addEventListener('click', ()=>{
const open = filtersEl.classList.toggle('hidden') === false;
filterToggle.setAttribute('aria-expanded', String(open));
});


// init
loadGames();
renderTags();
renderGrid();
