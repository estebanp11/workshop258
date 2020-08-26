fetch('/api/autores?user=admin')
  .then(res => res.json())
  .then(res => console.warn(res));