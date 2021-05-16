module.exports = (videoId, stream) => {
  var video = document.getElementById(videoId);
  video.srcObject = stream;
  video.onloadedmetadata = function (e) {
    video.play();
  };
};
