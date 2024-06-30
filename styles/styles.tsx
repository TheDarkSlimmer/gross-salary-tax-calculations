import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  safeAreaMain: {
    backgroundColor: "white",
    height: "100%",
  },
  statusColor: {
    backgroundColor: "#48CAE4",
  },

  buttonStyles: {
    backgroundColor: "#0077B6",
    borderWidth: 0,
    width: 140,
    // marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    borderRadius: 5,
  },

  buttonText: { color: "white", fontWeight: "600" },
});

export const mainStyles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: "20%",
    borderBlockColor: "red",
  },

  welcomeText: {
    fontSize: 50,
    fontWeight: "600",
  },

  imageContainer: {
    marginTop: 30,
  },

  formContainer: { marginTop: 20, width: "85%" },

  formHeader: { fontSize: 25, fontWeight: "600", width: "100%" },

  formDescription: { fontSize: 18, fontWeight: "400", marginTop: 5 },

  nameInput: {
    borderColor: "#787878",
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: "#F1F1F1",
    marginTop: 15,
    marginBottom: 10,
  },
});

export const homeStyles = StyleSheet.create({
  helloText: {
    fontSize: 35,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 30,
  },

  homeImageContainer: {
    marginTop: 25,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  homeInputsContainer: {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: 30,
    gap: 13,
  },
  homeInput: {
    borderColor: "#787878",
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: "#F1F1F1",
  },
});