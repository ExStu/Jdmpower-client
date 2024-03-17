import colors from "./colors";

const components = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        bodyB1: "b",
        bodyB2: "b",
        bodyS1: "p",
        bodyS2: "p",
        bodyS3: "p",
        body1: "p",
        body2: "p",
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  Modal: {
    desktop: {
      borderRadius: "16px",
      padding: "40px",
      background: colors.uncategorized.white,
      width: "832px", // 800 + padding
    },
    mobile: {
      borderRadius: "12px",
      padding: "16px",
      background: colors.uncategorized.white,
      width: "100%",
    },
  },
  MuiPopover: {
    styleOverrides: {
      paper: {
        borderRadius: "0 0 4px 4px",
      },
    },
  },
  MuiBadge: {
    styleOverrides: {
      badge: {
        backgroundColor: colors.uncategorized.white,
      },
    },
  },
  MuiInput: {
    defaultProps: {
      disableUnderline: true,
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      inputRoot: {
        height: "48px",
        border: `1px solid ${colors.uncategorized.white}`,
        backgroundColor: colors.uncategorized.white,
        color: colors.uncategorized.darkBorder,
        borderRadius: "4px 0 0 4px",
        padding: 0,
        "& fieldset": {
          border: "none",
        },
      },
      input: {
        "& .MuiOutlinedInput-root": {
          padding: 0,
        },
      },
      inputFocused: {
        borderColor: colors.primary.main,
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      positionEnd: {
        height: "auto",
      },
    },
  },
};

export default components;
