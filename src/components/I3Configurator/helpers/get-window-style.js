const getWindowStyle = (i3StateColorValues) => {
  return {
    borderRight: `3px solid ${i3StateColorValues.child}`,
    borderLeft: `3px solid ${i3StateColorValues.child}`,
    borderBottom: `3px solid black`,
  }
};

export default getWindowStyle;
