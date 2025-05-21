document.getElementById('blogForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (title && content) {
    const postSection = document.getElementById('posts');

    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const p = document.createElement('p');
    p.textContent = content;

    article.appendChild(h2);
    article.appendChild(p);
    postSection.prepend(article);

    // Clear form
    document.getElementById('blogForm').reset();
  } else {
    alert('Please enter both title and content.');
  }
});