import { iconDocument, iconLaunch, iconSetting, iconSmile } from "@/assets/icon";
import { addLoop, cusLoop, launchLoop, tuneLoop } from "@/assets/vector";

export const stepList = [
    {
      key: '0',
      value: 'Add Data',
      icon: iconDocument,
      loop: addLoop
    },
    {
      key: '1',
      value: 'Tune Chatbot',
      icon: iconSmile,
      loop: tuneLoop
    },
    {
      key: '2',
      value: 'Customize Appearance',
      icon: iconSetting,
      loop: cusLoop
    },
    {
      key: '3',
      value: 'Launch Chatbot',
      icon: iconLaunch,
      loop: launchLoop
    },
  ]