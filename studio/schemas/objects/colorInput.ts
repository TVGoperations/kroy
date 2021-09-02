interface Props {
  title?: string;
  description?: string;
  name?: string;
}

const colorInput = (title = "Background Color", description = "", name = "backgroundColor"): Props => ({
  title: title,
  name: name,
  description: description,
  // @ts-ignore
  type: "colorlist", // required
  options: {
    borderradius: {
      outer: "100%",
      inner: "100%",
    },
    list: [
      { title: "Cream", value: "#f0e9e4" },
      { title: "Light Blue", value: "#d9e5e5" },
      { title: "Green", value: "#bdc2ac" },
      { title: "Light Green", value: "#edefe7" },
      { title: "Light Pink", value: "#ede2da" },
      { title: "Light Teal", value: "#dee7e2" },
    ],
  },
});

export default colorInput;
