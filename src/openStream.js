module.exports = (cb) => {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then((stream) => cb(stream))
    .catch((err) => console.log(err));
};
