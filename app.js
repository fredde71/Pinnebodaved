// Minimal interaktivitet
function animateStats(){
  const nums = document.querySelectorAll('.stat__num');
  nums.forEach(el=>{
    const target = parseFloat(el.dataset.target || '0');
    const isFloat = String(target).includes('.');
    const dur = 900;
    const start = performance.now();
    function tick(now){
      const p = Math.min(1, (now - start)/dur);
      const val = target * p;
      el.textContent = isFloat ? val.toFixed(1) : Math.round(val);
      if(p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}
function openOrder(product){
  const subject = encodeURIComponent('Beställning: ' + product);
  const body = encodeURIComponent('Hej!\n\nJag vill beställa: ' + product + '\nAntal: \nAdress: \nÖnskad leverans: \n\nVänligen,\n');
  window.location.href = 'mailto:viktorkristiansson@icloud.com?subject=' + subject + '&body=' + body;
}
function sendContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const subject = encodeURIComponent('Kontakt från ' + name);
  const body = encodeURIComponent(message + '\n\nSvar till: ' + email);
  window.location.href = 'mailto:viktorkristiansson@icloud.com?subject=' + subject + '&body=' + body;
  return false;
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  animateStats();
});
