let defaultValues = {
      i3: {
        window: {
          background: "#FFFFFF"
        },
        focused: {
          border: "#FF003F",
          background: "#FF003F",
          text: "#FFFFFF",
          indicator: "#2E9EF4",
          child: "#285577"
        },
        inactive: {
          border: "#5F676A",
          background: "#5F676A",
          text: "#FFFFFF",
          indicator: "#484E50",
          child: "#5F676A"
        },
        unfocused: {
          border: "#333333",
          background: "#333333",
          text: "#888888",
          indicator: "#292D2E",
          child: "#222222"
        },
        urgent: {
          border: "#FF003F",
          background: "#FF003F",
          text: "#FFFFFF",
          indicator: "#FF003F",
          child: "#FF003F"
        },
        placeholder: {
          border: "#0C0C0C",
          background: "#0C0C0C",
          text: "#FFFFFF",
          indicator: "#000000",
          child: "#0C0C0C"
        },
      },
    };

const localStorageKey = 'i3ConfiguratorColorValues';

class ColorValuesService {

  getDefaultValues() {
    return defaultValues;
  }

  getValues() {
    try {
      let values = JSON.parse(localStorage.getItem(localStorageKey));

      if (!values) {
        return null;
      }

      return values;
    } catch (e) {
      return null;
    }
  }

  saveValues(values) {
    if (!values) {
      localStorage.removeItem(localStorageKey)
      return;
    };

    try {
      localStorage.setItem(localStorageKey, JSON.stringify(values));
    } catch (e) {}
  }
}

export {ColorValuesService};

