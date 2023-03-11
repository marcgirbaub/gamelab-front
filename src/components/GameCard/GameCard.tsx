import React from "react";
import { Image, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlaystation,
  faWindows,
  faApple,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";
import gameCardStyles from "./GameCardStyles";

interface GameCardProps {
  name: string;
  categories: string[];
  platforms: string[];
  image: string;
}

const GameCard = ({ categories, image, name, platforms }: GameCardProps) => {
  const getIcon = (text: string) => {
    let icon;

    switch (text) {
      case "Playstation":
        icon = faPlaystation;
        break;
      case "Windows":
        icon = faWindows;
        break;
      case "Apple":
        icon = faApple;
        break;
      case "Xbox":
        icon = faXbox;
        break;
      case "Nintendo":
        icon = faN;
        break;
      default:
        icon = faPlaystation;
    }

    return icon;
  };

  return (
    <View style={gameCardStyles.container}>
      <View style={gameCardStyles.imageContainer}>
        <Image
          source={{ uri: image }}
          accessibilityLabel={name}
          style={gameCardStyles.image}
          resizeMode="stretch"
        />
      </View>
      <View style={gameCardStyles.infoContainer}>
        <View
          style={gameCardStyles.platforms}
          accessibilityLabel="platform icon"
        >
          {platforms.map((platform) => (
            <FontAwesomeIcon
              icon={getIcon(platform)}
              key={platform}
              size={22}
              style={gameCardStyles.platform}
            ></FontAwesomeIcon>
          ))}
        </View>
        <Text style={gameCardStyles.name}>{name}</Text>
        <View style={gameCardStyles.categories}>
          {categories.map((category) => (
            <Text key={category} style={gameCardStyles.category}>
              {category}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default GameCard;
