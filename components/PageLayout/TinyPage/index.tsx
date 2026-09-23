import { useState } from "react";
import useOnce from "@/hooks/useOnce";
import { config } from "@/lib/styles/stiches.config";
import type { PropsWithChildren } from "react";

type TinyPageProps = PropsWithChildren<{

}>

const toShows: string[] = [
  ">.<",
  "UwU",
  "🫥",
  "🥳",
  "🤯",
  "🥺",
  "😤",
]

const TinyPage = ({children, ...otherProps}: TinyPageProps) => {
  const [ showIndex, setShowIndex ] = useState<number>(0);

  const onMediaChange = (pepperMediaQueryEvent: MediaQueryListEvent) => {
    if (pepperMediaQueryEvent.matches) {
      setShowIndex(Math.floor(Math.random() * toShows.length))
    }
  }

  useOnce(() => {
    var pepperMediaQuery = window.matchMedia(config.media.pepper);
    pepperMediaQuery.addEventListener('change', onMediaChange);
    return (
      () => pepperMediaQuery.removeEventListener('change', onMediaChange)
    )
  }, []);

  return (
    <>
      {toShows[showIndex]}
    </>
  )
}

export default TinyPage;
