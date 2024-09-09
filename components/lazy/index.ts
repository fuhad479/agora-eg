"use client";

import dynamic from "next/dynamic";

export const ConferenceRoom = dynamic(() => import("@/components/conference-room"), {
  ssr: false,
});

export const VideoScreen = dynamic(() => import("@/components/video-screen"), {
  ssr: false,
});
