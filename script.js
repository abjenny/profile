const mainContent = document.getElementById('mainContent');

document.getElementById('aboutBtn').addEventListener('click', () => {
  mainContent.innerHTML = `
    <div class="about-text">
      <h2>About Me</h2>
      <p>Passionate Lady 💕
Friendly Always....
In naughty mood sometimes

chat lover lady looking for friendly conversation.
Let's have some beautiful talks and have some fun moments together</p>
    </div>
  `;
});

document.getElementById('galleryBtn').addEventListener('click', () => {
  mainContent.innerHTML = `
    <h2>Gallery</h2>
    <div class="gallery" id="galleryContainer"></div>
  `;
  // Add sample images
  const galleryContainer = document.getElementById('galleryContainer');
  const images = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg', 'https://images.unsplash.com/photo-1532009324734-20a7a5813719?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80',
  ];
  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    // Enlarge on click
    img.addEventListener('click', () => {
      document.getElementById('modalImage').src = src;
      document.getElementById('imageModal').style.display = 'flex';
    });
    document.getElementById('galleryContainer').appendChild(img);
  });
});

document.getElementById('friendsBtn').addEventListener('click', () => {
  mainContent.innerHTML = `
    <h2>Friends</h2>
    <ul class="friends-list">
      <li>To Be Updated</li>
      <li>1.</li>
      <li>2.</li>
      <li>3.</li>
      <li>4.</li>
    </ul>
  `;
});

// Pulse and scale animation for profile picture
const profilePicContainer = document.getElementById('profileContainer');
const profilePic = document.getElementById('profilePic');

profilePicContainer.classList.add('pulse');

profilePic.addEventListener('click', () => {
  profilePic.classList.remove('scale-up');
  void profilePic.offsetWidth; // trigger reflow
  profilePic.classList.add('scale-up');
});

// Modal close
document.getElementById('imageModal').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = 'none';
});