//querySelector('#project-name') - blog-name
//const description #project-desc - - const post = document.querySelector('#blog-post'
//const response = await fetch(`/api/projects - api/blogs
//.querySelector('.new-project-form' - new-blog-form
//.querySelector('.project-list') - blog list


const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-name').value.trim();
    //const needed_funding = document.querySelector('#project-funding').value.trim();
    const post = document.querySelector('#blog-post').value.trim();
  
    if (title && post) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ title, post }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog post');
      }
    }
  };
  
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
  