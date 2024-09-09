"use client";

import { useRTCClient } from "agora-rtc-react";

import { ConferenceRoom } from "@/components/lazy";
import { AgoraRTCProvider } from "agora-rtc-react";

import AgoraRTC from "agora-rtc-react";

interface VideoScreen {
  searchParams: { uid: string };
}

export default function VideoScreen({
  searchParams,
}: VideoScreen): JSX.Element {
  const rtcEngine = useRTCClient(
    AgoraRTC.createClient({ mode: "rtc", codec: "vp8" })
  );

  return (
    <AgoraRTCProvider client={rtcEngine}>
      <ConferenceRoom searchParams={searchParams} />
    </AgoraRTCProvider>
  );
}
