
let totalAmount = parseFloat(localStorage.getItem('updatedBalance'));
document.getElementById('accountAmountt').innerText = totalAmount || 'No amount provided';

localStorage.setItem('accountAmountt');
let totalAmountt = localStorage.getItem('accountAmountt');
document.getElementById('accountAmount').innerText = totalAmountt || 'No amount provided';
