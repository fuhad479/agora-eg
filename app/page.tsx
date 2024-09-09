"use client";

import { useRTCClient } from "agora-rtc-react";

import { AgoraRTCProvider } from "agora-rtc-react";

import AgoraRTC from "agora-rtc-react";

import dynamic from "next/dynamic";

const ConferenceRoom = dynamic(() => import("@/components/conference-room"), {
  ssr: false,
});

interface Page {
  searchParams: { uid: string };
}

export default function Page({ searchParams }: Page): JSX.Element {
  const rtcEngine = useRTCClient(
    AgoraRTC.createClient({ mode: "rtc", codec: "vp8" })
  );
  return (
    <AgoraRTCProvider client={rtcEngine}>
      <ConferenceRoom searchParams={searchParams} />
    </AgoraRTCProvider>
  );
}
