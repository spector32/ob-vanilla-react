import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useSound from "use-sound";

import { PageModel } from "./types";
// import testSound from "../assets/audio/test-sound.mp3";
import testSound from "../assets/audio/payout-award-test.wav";
// console.log("testSound: ", testSound);

function WelcomePage({ setTitle, ...restProps }: { setTitle: any }) {
  const { t } = useTranslation();

  console.log("mounted?");

  // console.log("restProps: ", restProps);

  const [isPlaying, setIsPlaying] = useState(false);
  // const testingAudio = require("../assets/audio/payout-award-test.wav"); // usage: testingAudio.default;
  // console.log('testingAudio: ', testingAudio);
  const [togglePlay, { sound, duration }] = useSound(testSound, {
    id: "test",
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
    interrupt: true,
  });

  // if (isPlaying) {
  //   setTimeout(() => {
  //     // pause("bling");
  //     console.log("WHAT IS TRHIS?");
  //     setTimeout(() => {
  //       console.log("beep");
  //       play({ id: "bling" });
  //     }, 500);
  //   }, 1000);
  // }

  useEffect(() => {
    // setTitle("This is my welcome page!");
    return function stopSoundFromPlaying() {
      // This not working for whatever reason!
      // stop("bling"); (this gets extracted from "useSound" hook)
      // setTitle("");
      console.warn('unmounting');
      togglePlay({ id: "test" });
      setIsPlaying(false);
    };
  }, [setTitle, togglePlay, setIsPlaying]);

  return (
    <div>
      Welcome!!! {t("welcome")} <br />
      {isPlaying ? <h1>Playing</h1> : ""}
      <button type="button" onClick={() => togglePlay()} disabled={isPlaying}>
        {isPlaying ? "Playing" : "Test sound"}
        <small>
          {sound?._src} | {duration}
        </small>
      </button>
    </div>
  );
}

const welcome: PageModel = {
  title: (title: string) => {
    return title;
  },
  componentProps: {
    testProp: "this is my testProp",
  },
  // Possibly could refactor this to use "regions"
  // e.g. regions: { main_content: MainContentComponent, side_bar: SideBarComponent }
  component: WelcomePage,
  path: "/",
  routeProps: {
    exact: true,
  },
  public: true,
  layout: "test",
};

export default welcome;
