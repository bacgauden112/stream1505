import $ from "jquery";
import Peer from "peerjs";
import { uid } from "uid";
import openStream from "./openStream";
import playVideo from "./playVideo";

function createMyId() {
  const id = uid(10);
  $("#myId").append(id);
  return id;
}
const config = {
  host: "anhdq-call.seeplus.app",
  path: "peer-server",
  secure: true,
  config: {
    iceServers: [
      {
        url: "turn:numb.viagenie.ca",
        username: "queanhit1102@gmail.com",
        credential: "qSyTBQ7w@56zE5Q",
      },
    ],
  } /* Sample servers, please use appropriate ones */,
};
const peer = new Peer(createMyId(), config);
console.log(peer);

$("#btnCall").on("click", () => {
  const friendId = $("#txtFriendId").val();
  openStream((localStream) => {
    playVideo("localStream", localStream);
    const call = peer.call(friendId, localStream);
    call.on("stream", (remoteStream) =>
      playVideo("remoteStream", remoteStream)
    );
  });
});

peer.on("call", (call) => {
  openStream((localStream) => {
    playVideo("localStream", localStream);
    call.answer(localStream);
    call.on("stream", (remoteStream) => {
      playVideo("remoteStream", remoteStream);
    });
  });
});
