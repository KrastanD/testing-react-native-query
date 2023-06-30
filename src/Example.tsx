import * as React from "react";
import { useRepoData } from "./hooks";
import { View, Text } from "react-native";

export function Example() {
  const { isLoading, error, data, isFetching } = useRepoData();

  if (isLoading) return <View>Loading...</View>;

  if (error instanceof Error)
    return (
      <View>
        <Text>An error has occurred: {error.message}</Text>
      </View>
    );

  return (
    <View>
      <Text>name: {data?.name}</Text>
      <View>{isFetching ? "Updating..." : ""}</View>
    </View>
  );
}
