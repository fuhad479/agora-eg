import { VideoScreen } from "@/components/lazy";

interface Page {
  searchParams: { uid: string };
}

export default function Page({ searchParams }: Page): JSX.Element {
  return <VideoScreen searchParams={searchParams} />;
}
