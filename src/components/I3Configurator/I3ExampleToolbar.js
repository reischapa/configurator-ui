import React from 'react';
import getI3StateValueKeys from "./helpers/get-i3-state-value-keys";
import getWindowStyle from "./helpers/get-window-style";
import getTitleBarStyle from "./helpers/get-title-bar-style";

const I3ExampleToolbar = (props) => {
  const {colorValues} = props;
  const {i3: i3ColorValues} = colorValues;

  return (
    <div>
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tbody>
        <tr>
          {
            getI3StateValueKeys(i3ColorValues)
              .filter(colorValue => colorValue !== 'window')
              .map((colorvalue,i) => {
                return (
                  <td
                    key={`${colorvalue}-${i}`}
                    style={getTitleBarStyle(i3ColorValues[colorvalue])}
                  >
                    {`${colorvalue} window`}
                  </td>
                )
              })
          }
        </tr>
        <tr>
          {
            getI3StateValueKeys(i3ColorValues)
              .filter(colorValue => colorValue !== 'window')
              .map((colorValue, i) => {
                return (
                  <td
                    key={`${colorValue}-${i}`}
                    style={{
                      ...getWindowStyle(i3ColorValues[colorValue]),
                      backgroundColor: i3ColorValues.window.background
                    }}
                  >
                    &nbsp;
                  </td>
                )
              })
          }
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default I3ExampleToolbar;