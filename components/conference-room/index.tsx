"use client";

import {
  useJoin,
  usePublish,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  useRemoteUsers,
} from "agora-rtc-react";

import { LocalUser, RemoteUser } from "agora-rtc-react";

interface ConferenceRoom {
  searchParams: { uid: string };
}

export default function ConferenceRoom({
  searchParams,
}: ConferenceRoom): JSX.Element {
  const remoteUsers = useRemoteUsers();

  const { localCameraTrack } = useLocalCameraTrack();
  const { localMicrophoneTrack } = useLocalMicrophoneTrack();

  usePublish([localCameraTrack, localMicrophoneTrack]);

  useJoin(
    {
      appid: "f0215e6e86a34ff685b83d8419061013",
      token:
        "007eJxTYJDefm+HzMu5Mf8/pmXJZKyUinC52fHhl/ABr3877jcw3p2hwJBmYGRommqWamGWaGySlmZmYZpkYZxiYWJoaWBmaGBoLH3kXlpDICPD0SADJkYGCATxuRjSSjMSU+KL8vNzGRgAwtMjhA==",
      channel: "fuhad_room",
      uid: searchParams.uid,
    },
    true
  );

  return (
    <section className="h-screen grid grid-rows-2">
      <div className="border w-full h-full">
        <LocalUser
          micOn
          cameraOn
          videoTrack={localCameraTrack}
          audioTrack={localMicrophoneTrack}
        />
      </div>
      <div className="border w-full h-full">
        <RemoteUser playAudio playVideo user={remoteUsers[0]} />
      </div>
    </section>
  );
}
