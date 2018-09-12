import React from 'react';
import {ChromePicker} from 'react-color';

import generateI3ColorConfig from './helpers/generate-i3-color-config';
import {ColorValuesService} from './services';
import getI3StateValueKeys from './helpers/get-i3-state-value-keys';
import I3ExampleToolbar from './I3ExampleToolbar';
import getI3LocationValueKeys from './helpers/get-i3-location-value-keys';

import styles from './styles.css';

const colorValuesService = new ColorValuesService();

export default class I3Configurator extends React.Component {
  constructor(){
    super();
    let initialColorValues = colorValuesService.getValues();

    if (!initialColorValues) {
      initialColorValues = colorValuesService.getDefaultValues();
    }

    this.state = {
      colorValues: initialColorValues,
      shownColorPickers: {},
      generatedConfig: {
        i3: {
          color: generateI3ColorConfig(initialColorValues.i3)
        }
      }
    };
  }

  handleColorChange = (color, sectionValue, stateValue, locationValue) => {
    this.setState(state => {
      state.colorValues[sectionValue][stateValue][locationValue] = color;
      state.generatedConfig[sectionValue].color= generateI3ColorConfig(state.colorValues[sectionValue]);
      return state;
    })
  };

  constructColorPickerKey = (sectionValue, stateValue, locationValue) => {
    return `${sectionValue}_${stateValue}_${locationValue}`;
  };

  setColorPickerDisplayed = (colorPickerDisplayed, sectionValue, stateValue, locationValue) => {
    const key = this.constructColorPickerKey(sectionValue, stateValue, locationValue);

    this.setState(state => {
      state.shownColorPickers[key] = colorPickerDisplayed;
      return state;
    })

  };

  isColorPickerDisplayed = (sectionValue, stateValue, locationValue) => {
    return this.state.shownColorPickers[this.constructColorPickerKey(sectionValue, stateValue, locationValue)];
  };

  toggleColorPickerDisplayed = (sectionValue, stateValue, locationValue) => {
    let value = this.isColorPickerDisplayed(sectionValue, stateValue, locationValue);
    this.setColorPickerDisplayed(!value, sectionValue, stateValue, locationValue);
  };

  render = () => {
    const {colorValues} = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>i3 colors</h1>
        <div className={styles.exampleWindowColorsContainer}>
          {
            I3ExampleToolbar(this.state)
          }
        </div>
        <div className={styles.tableContainerCard}>
          <div className={styles.tableInnerContainer}>
            <table>
              <tbody>
                <tr>
                  <td>item</td>
                  <td title="line above and below title">Border</td>
                  <td title="background color">Background</td>
                  <td title="color of text">Text</td>
                  <td title="border color indicating where a new window will open">Indicator</td>
                  <td title="line around window content">Child border</td>
                </tr>
              </tbody>
              {
                getI3StateValueKeys().map((stateValue, i) => {
                  return (
                    <tbody key={`${stateValue}-${i}`}>
                      <tr>
                        <td>{stateValue}</td>
                        {
                          getI3LocationValueKeys().map((locationValue, i) => {
                            const key =`${locationValue}-${i}`;
                            if (!colorValues.i3[stateValue][locationValue]) {
                              return (
                                <td key={key}/>
                              );
                            }

                            return (
                              <td
                                key={key}
                              >
                                <input
                                  type="text"
                                  value={colorValues.i3[stateValue][locationValue]}
                                  onChange={e => {
                                    let value = '#' + e.target.value.toUpperCase().replace(/[^0-9A-F]/gi, '');
                                    if (value.length === 0){
                                      value = '#'
                                    }
                                    if (value === this.constructColorPickerKey('i3', stateValue, locationValue)){
                                      return;
                                    }
                                    this.handleColorChange(value, 'i3', stateValue, locationValue)
                                  }}
                                  onFocus={() => {
                                    this.setColorPickerDisplayed(true, 'i3', stateValue, locationValue);
                                  }}
                                  onBlur={() => {
                                    this.setColorPickerDisplayed(false, 'i3', stateValue, locationValue);
                                  }}
                                  style={{
                                    width: '100px',
                                    margin: '0 10px'
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key.toLowerCase() === 'escape') {
                                      this.setColorPickerDisplayed(false, 'i3', stateValue, locationValue);
                                    }
                                  }}
                                />
                                {
                                  this.isColorPickerDisplayed('i3', stateValue, locationValue) ?
                                    <div
                                      style={{
                                        position: 'absolute',
                                        transform: 'translate(30px, 0)'
                                      }}
                                    >
                                      <ChromePicker
                                        color={colorValues.i3[stateValue][locationValue]}
                                        onChangeComplete={value =>
                                          this.handleColorChange(value.hex.toUpperCase(), 'i3', stateValue, locationValue)
                                        }
                                      />
                                    </div>
                                    : null
                                }
                              </td>
                            );
                          })
                        }
                      </tr>
                    </tbody>
                  )
                })
              }
            </table>
          </div>
        </div>
        <h2 className={styles.colorsConfigFragmentContainerTitle}>Resulting config fragment</h2>
        <div className={styles.colorsConfigFragmentContainer}>
          <div className={styles.colorsConfigFragment}>
            <textarea
              rows="7"
              cols="65"
              value={this.state.generatedConfig.i3.color}
              readOnly
              className={styles.colorsConfigFragmentTextArea}
            >
            </textarea>
          </div>
        </div>
      </div>
    );
  }
}