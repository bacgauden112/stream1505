module.exports = (cb) => {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then((stream) => cb(stream))
    .catch((err) => console.log(err));
};
