import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { useAppSelector } from "../../redux/hooks";
import gameDetailStyles from "./GameDetailStyles";

const GameDetail = (): JSX.Element => {
  const {
    about,
    ageRating,
    backupImage,
    categories,
    developer,
    gameplayTime,
    name,
    platforms,
    releaseYear,
  } = useAppSelector((state) => state.games.selectedGame);
  const { id } = useAppSelector((state) => state.user);

  return (
    <ScrollView
      style={gameDetailStyles.safeArea}
      showsVerticalScrollIndicator={false}
    >
      <View style={gameDetailStyles.imageContainer}>
        <Image
          source={{
            uri: backupImage,
          }}
          style={gameDetailStyles.image}
        />
      </View>
      <View style={gameDetailStyles.container}>
        <Text style={gameDetailStyles.title}>{name}</Text>
        <View style={gameDetailStyles.infoContainer}>
          <View style={gameDetailStyles.aboutContainer}>
            <Text style={gameDetailStyles.infoTitle}>About</Text>
            <Text style={gameDetailStyles.info}>{about}</Text>
          </View>
          <View style={gameDetailStyles.rowContainer}>
            <View style={gameDetailStyles.subInfoContainer}>
              <Text style={gameDetailStyles.infoTitle}>Platforms</Text>
              {platforms.map((platform) => (
                <Text key={platform} style={gameDetailStyles.info}>
                  {platform}{" "}
                </Text>
              ))}
            </View>
            <View style={gameDetailStyles.subInfoContainer}>
              <Text style={gameDetailStyles.infoTitle}>Release year</Text>
              <Text style={gameDetailStyles.info}>{releaseYear}</Text>
            </View>
          </View>
          <View style={gameDetailStyles.rowContainer}>
            <View style={gameDetailStyles.subInfoContainer}>
              <Text style={gameDetailStyles.infoTitle}>Categories</Text>
              {categories.map((category) => (
                <Text key={category} style={gameDetailStyles.info}>
                  {category}{" "}
                </Text>
              ))}
            </View>
            <View style={gameDetailStyles.subInfoContainer}>
              <Text style={gameDetailStyles.infoTitle}>Gameplay time</Text>
              <Text style={gameDetailStyles.info}>{gameplayTime} hours</Text>
            </View>
          </View>
          <View style={gameDetailStyles.rowContainer}>
            <View style={gameDetailStyles.subInfoContainer}>
              <Text style={gameDetailStyles.infoTitle}>Developer</Text>
              <Text style={gameDetailStyles.info}>{developer}</Text>
            </View>
            <View style={gameDetailStyles.subInfoContainer}>
              <Text style={gameDetailStyles.infoTitle}>Age rating</Text>
              <Text style={gameDetailStyles.info}>{ageRating}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default GameDetail;
