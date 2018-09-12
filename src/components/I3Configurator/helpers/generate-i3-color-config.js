const generateI3ColorConfig = (i3ColorValues) => {
  return (
    `client.focused           ${i3ColorValues.focused.border} ${i3ColorValues.focused.background} ${i3ColorValues.focused.text} ${i3ColorValues.focused.indicator} ${i3ColorValues.focused.child} 
client.focused_inactive  ${i3ColorValues.inactive.border} ${i3ColorValues.inactive.background} ${i3ColorValues.inactive.text} ${i3ColorValues.inactive.indicator} ${i3ColorValues.inactive.child} 
client.urgent            ${i3ColorValues.urgent.border} ${i3ColorValues.urgent.background} ${i3ColorValues.urgent.text} ${i3ColorValues.urgent.indicator} ${i3ColorValues.urgent.child} 
client.unfocused         ${i3ColorValues.unfocused.border} ${i3ColorValues.unfocused.background} ${i3ColorValues.unfocused.text} ${i3ColorValues.unfocused.indicator} ${i3ColorValues.unfocused.child} 
client.placeholder       ${i3ColorValues.placeholder.border} ${i3ColorValues.placeholder.background} ${i3ColorValues.placeholder.text} ${i3ColorValues.placeholder.indicator} ${i3ColorValues.placeholder.child} 
client.background        ${i3ColorValues.window.background}`
  );
};

export default generateI3ColorConfig;
