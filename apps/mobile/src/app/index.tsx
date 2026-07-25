import { useUsersQuery } from "@repo/api-client/v1/users/hooks";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const { data, isError } = useUsersQuery();

  if (isError || !data?.success) {
    return (
      <View style={styles.container}>
        <Text>Something went wrong!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data.data.map((user) => (
        <Text key={user.email}>
          {user.name} | {user.email}
        </Text>
      ))}
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
