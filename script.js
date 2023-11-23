function downloadVideo() {
    var videoUrl = document.getElementById('videoUrl').value;
    var videoId = getVideoId(videoUrl);

    if (videoId) {
        var downloadLink = 'https://www.youtubepp.com/watch?v=' + videoId;
        window.location.href = downloadLink;
    } else {
        alert('Invalid YouTube video link. Please check the link and try again.');
    }
}

function getVideoId(url) {
    // Extract video ID from various YouTube video URL formats
    var regex = /[?&]v=([^?&]+)/;
    var match = url.match(regex);

    return match && match[1] ? match[1] : null;
}
