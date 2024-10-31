import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { MainStack } from './components/MainStack';
import { registerElement } from "react-nativescript";
import { SVGView } from '@nativescript-community/ui-svg';
import { ViewAttributes } from 'react-nativescript';
import { FontIconFactory, fonticon } from "nativescript-fonticon";
import { knownFolders } from "@nativescript/core/file-system";
import * as imageModule from '@nativescript-community/ui-image';

FontIconFactory.debug = true;
FontIconFactory.paths = {
  fa: knownFolders.currentApp().getFile("./assets/css/fa.css").readTextSync(),
};
FontIconFactory.loadCss();

// In NativeScript, the app.ts file is the entry point to your application. You
// can use this file to perform app-level initialization, but the primary
// purpose of the file is to pass control to the app’s first module.

// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', { value: false });

// define global function/property for fonticon
global.fonticon = fonticon;
imageModule.initialize({ isDownsampleEnabled: true });

registerElement("svgView", () => require('@nativescript-community/ui-svg').SVGView);
registerElement("ncImage", () => require('@nativescript-community/ui-image').Img);

type SVGViewAttributes = {
  src: string;
  stretch: string;
}&ViewAttributes;

type NCImageAttributes = typeof imageModule.Img & ViewAttributes;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      svgView: ReactNativeScript.NativeScriptProps<SVGViewAttributes, SVGView>;
      ncImage: ReactNativeScript.NativeScriptProps<NCImageAttributes>;
    }
  }
}

ReactNativeScript.start(React.createElement(MainStack, {}, null));

// Do not place any code after the application has been started as it will not
// be executed on iOS.
