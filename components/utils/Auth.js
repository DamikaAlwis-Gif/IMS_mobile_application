
const checkToken = async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    const decoded = jwtDecode(token);
    setName(decoded.name);
    setRole(decoded.role);
  } else {
    navigation.navigate("Login");
  }
};
export default checkToken;
