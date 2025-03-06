function searchVideos() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let videos = document.querySelectorAll('.video');
    
    videos.forEach(video => {
        let title = video.querySelector('p').innerText.toLowerCase();
        if (title.includes(input)) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}

function navigate(section) {
    alert('Navigating to ' + section);
}