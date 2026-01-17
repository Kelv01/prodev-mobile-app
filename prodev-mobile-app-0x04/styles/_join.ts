import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  /* Top navigation */
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
  },

  /* Headings */
  largeText: {
    fontWeight: "700",
    fontSize: 39,
    marginTop: 10,
  },

  smallText: {
    fontWeight: "400",
    fontSize: 12,
    color: "#7E7B7B",
    marginTop: 5,
  },

  /* Form */
  formGroup: {
    marginTop: 44,
  },

  placeholderText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#7B7B7B",
    marginBottom: 7,
  },

  inputField: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
  },

  passwordGroup: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  forgotPasswordText: {
    textAlign: "right",
    color: "#34967C",
    marginTop: 9,
  },

  /* Primary button */
  button: {
    backgroundColor: "#34967C",
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "300",
  },

  /* Divider */
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginBottom: 25,
    marginTop: 29,
  },

  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: "#e6e6e6",
  },

  dividerText: {
    fontSize: 17,
    fontWeight: "500",
    fontVariant: ["small-caps"],
    color: "#C2C2C2",
  },

  /* Social auth */
  socialMediaButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },

  socialMediaButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    borderWidth: 1,
  },

  socialMediaButtonText: {
    fontSize: 18,
    fontWeight: "400",
  },

  /* Bottom signup text */
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    left: 77,
    right: 76,
    bottom: 33,
    gap: 5,
  },

  subText: {
    fontSize: 18,
    fontWeight: "400",
  },

  subTextJoin: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFA800",
  },
});

export { styles };
