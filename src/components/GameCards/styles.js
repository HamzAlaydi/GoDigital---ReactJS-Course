const generateStyles = (parameters) => ({
  container: {
    backgroundColor: parameters.bgColor, //background-color -> backgroundColor (padding-left -> paddingLeft)
    border: "2px solid",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px"
  },
});

export default generateStyles;