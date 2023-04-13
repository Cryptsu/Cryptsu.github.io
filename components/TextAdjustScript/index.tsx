import { minify } from "uglify-js";
import { clientScript } from "./script";

const TextAdjustScript = () => {
  const functionString = String(clientScript);
  const unminifiedCode = `(${functionString})()`;

  // minify the final code, a bit hacky but this is ONLY done at build-time, so uglify-js is never bundled or sent to
  // the browser to execute. (this comment is originally from jarv.is :>)
  const minified = minify(unminifiedCode, {
    toplevel: true,
    compress: {
      negate_iife: false,
    },
    parse: {
      bare_returns: true,
    },
  });

  // fail somewhat silenty by returning the unminified version
  if (!minified || minified.error) {
    console.warn("Failed to minify text-adjust script:", minified.error);
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){${unminifiedCode}})()`
        }}
      />
    )
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){${minified.code}})()`
      }}
    />
  )
}

export default TextAdjustScript;