import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Pong = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Pong.loader.js",
    dataUrl: "Build/Pong.data.unityweb",
    frameworkUrl: "Build/Pong.framework.js.unityweb",
    codeUrl: "Build/Pong.wasm.unityweb",
  });

  return (
    <>
      <h1>Pong</h1>
      <div 
      style={{
        display: "flex",
        justifyContent: "center"
      }}
      >
        <Unity
          unityProvider={unityProvider}
          style={{
            height: 700,
            width: 1000,
          }}
        />
      </div>
    </>
  );
};

export default Pong;
