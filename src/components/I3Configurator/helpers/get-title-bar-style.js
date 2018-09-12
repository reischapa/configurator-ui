const getTitleBarStyle = (i3StateColorValues) => {
  return {
    backgroundColor: i3StateColorValues.background,
    color: i3StateColorValues.text,
    border: `3px solid ${i3StateColorValues.border}`,
  }
};

export default getTitleBarStyle;