const newThreadHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById('title-box');
  const body = document.getElementById('post-content');
  const category_id = document.getElementById('select-category');

  if (title && body && category_id) {
    const response = await fetch('/api/threads', {
      method: 'POST',
      body: JSON.stringify({
        title: title.value,
        body: body.value,
        category_id: 4,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      title.value = '';
      body.value = '';
    } else {
      alert('Failed to create project');
    }
  }
};

document
  .querySelector('#create-button')
  .addEventListener('click', newThreadHandler);
