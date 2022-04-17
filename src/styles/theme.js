const theme = {
  breakpoints: ["768px", "1040px"],
  fontSizes: ["12px", "14px", "16px", "20px", "24px", "32px", "48px", "64px"],
  colors: {
    background: "#F8F8F8",
    primary: "#222",
    secondary: "#fff",
    text: "#767676",
    neutral: "#EEE",
  },
  space: [
    "0px",
    "4px",
    "8px",
    "16px",
    "24px",
    "32px",
    "40px",
    "48px",
    "64px",
    "80px",
  ],
  fonts: {
    body: "'Mulish', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  text: {
    heading: {
      fontSize: ["30px", "40px", "48px"],
      fontWeight: 800,
      fontFamily: "heading",
      textTransform: "uppercase",
    },
    subheading: {
      fontSize: "24px",
      textTransform: "uppercase",
      fontWeight: 800,
      letterSpacing: "2px",
      fontFamily: "heading",
    },
    body: {
      fontSize: "16px",
    },
    italic: {
      variant: "text.body",
      fontStyle: "italic",
      lineHeight: 2,
    },
  },
};

export default theme;
