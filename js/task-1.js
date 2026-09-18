const ulElem = document.querySelector('#categories');
const liElem = document.querySelectorAll('.item');

console.log(`Numbers of categories: ${liElem.length}`);

liElem.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elemetsLength = item.querySelectorAll('ul li').length;

  console.log(`Category: ${title} `);
  console.log(`Elements: ${elemetsLength}`);
});
