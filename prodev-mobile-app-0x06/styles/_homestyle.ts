// styles/_mainstyle.ts
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  // Search Bar
  searchGroup: {
    marginBottom: 16,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchControlGroup: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchFormText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7E7B7B",
  },
  searchControl: {
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#34967C",
    justifyContent: "center",
    alignItems: "center",
  },

  // Filters
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  filterContainer: {
    width: 70,
    height: 70,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },

  // Listings
  listingContainer: {
    flex: 1,
    marginTop: 10,
  },
  paginationContainer: {
    marginVertical: 16,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
