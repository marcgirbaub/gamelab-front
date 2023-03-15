import React from "react";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import useGames from "../../hooks/useGames/useGames";
import { type GameStrucutre } from "../../redux/features/games/types";
import createFormStyles from "./CreateFormStyles";
import colorStyles from "../../theme/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

interface CreateFormProps {
  selectedGame?: GameStrucutre;
  title: string;
}

const CreateForm = ({ title }: CreateFormProps): JSX.Element => {
  const { addGame } = useGames();

  const ageRatingOptions = [
    { label: "Everyone", value: "Everyone" },
    { label: "10 +", value: "10 +" },
    { label: "17 +", value: "17 +" },
    { label: "18 +", value: "18 +" },
    { label: "Pending", value: "Pending" },
  ];

  const initialFormData = {
    name: "",
    image: {
      uri: "",
      name: "",
      type: "",
    },
    developer: "",
    about: "",
    platforms: [],
    categories: [],
    gameplayTime: "",
    releaseYear: "",
    ageRating: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [openAgeRating, setOpenAgeRating] = useState(false);
  const [valueAgeRating, setValueAgeRating] = useState("");

  const [playstation, setPlaystation] = useState("");
  const [xbox, setXbox] = useState("");
  const [apple, setApple] = useState("");
  const [windows, setWindows] = useState("");
  const [nintendo, setNintendo] = useState("");

  const [arcade, setArcade] = useState("");
  const [action, setAction] = useState("");
  const [adventure, setAdventure] = useState("");
  const [rpg, setRpg] = useState("");
  const [strategy, setStrategy] = useState("");
  const [shooter, setShooter] = useState("");
  const [platformer, setPlatformer] = useState("");
  const [boardgames, setBoardgames] = useState("");

  const [image, setImage] = useState("");
  const [imageType, setImageType] = useState("");
  const [imageName, setImageName] = useState("");

  const handleFieldChange = (introducedValue: string, field: string) => {
    setFormData({ ...formData, [field]: introducedValue });
  };

  const chooseFile = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUrl = result.assets[0].uri;
      setImage(imageUrl);

      const imageName = imageUrl.split("/").pop();
      setImageName(imageName!);

      const match = /\.(\w+)$/.exec(imageName!);
      const imageType = match ? `image/${match[1]}` : `image`;
      setImageType(imageType);
    }
  };

  const onSubmitHandler = async () => {
    const newGame = new FormData();
    newGame.append("name", formData.name);
    newGame.append("about", formData.about);
    newGame.append("ageRating", valueAgeRating);
    newGame.append("developer", formData.developer);
    newGame.append("releaseYear", formData.releaseYear);
    newGame.append("gameplayTime", formData.gameplayTime);
    newGame.append("image", { type: imageType, uri: image, name: imageName });

    const platforms = [playstation, xbox, apple, windows, nintendo];
    const categories = [
      arcade,
      action,
      adventure,
      rpg,
      strategy,
      shooter,
      platformer,
      boardgames,
    ];

    platforms.forEach((platform) => {
      if (platform) {
        newGame.append("platforms", platform);
      }
    });

    categories.forEach((category) => {
      if (category) {
        newGame.append("categories", category);
      }
    });

    await addGame(newGame);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={createFormStyles.container}>
        <Text style={createFormStyles.title} testID={title}>
          {title}
        </Text>
        <View style={createFormStyles.formContainer}>
          <View>
            <Text style={createFormStyles.label}>Name</Text>
            <TextInput
              autoCapitalize="none"
              accessibilityLabel="enter game's name"
              autoCorrect={false}
              style={createFormStyles.input}
              maxLength={30}
              value={formData.name}
              onChangeText={(inputValue) => {
                handleFieldChange(inputValue, "name");
              }}
            />
          </View>
          <View>
            <Text style={createFormStyles.label}>Developer</Text>
            <TextInput
              autoCapitalize="none"
              accessibilityLabel="enter developer's name"
              autoCorrect={false}
              style={createFormStyles.input}
              maxLength={30}
              value={formData.developer}
              onChangeText={(inputValue) => {
                handleFieldChange(inputValue, "developer");
              }}
            />
          </View>
          <View style={{ gap: 20 }}>
            <Text style={createFormStyles.label}>Platforms</Text>
            <BouncyCheckbox
              text="Playstation"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (playstation) {
                  setPlaystation("");
                } else {
                  setPlaystation("Playstation");
                }
              }}
            />
            <BouncyCheckbox
              text="Xbox"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (xbox) {
                  setXbox("");
                } else {
                  setXbox("Xbox");
                }
              }}
            />
            <BouncyCheckbox
              text="Windows"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (windows) {
                  setWindows("");
                } else {
                  setWindows("Windows");
                }
              }}
            />
            <BouncyCheckbox
              text="Apple"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (apple) {
                  setApple("");
                } else {
                  setApple("Apple");
                }
              }}
            />
            <BouncyCheckbox
              text="Nintendo"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (nintendo) {
                  setNintendo("");
                } else {
                  setNintendo("Nintendo");
                }
              }}
            />
          </View>
          <View style={{ gap: 20 }}>
            <Text style={createFormStyles.label}>Categories</Text>
            <BouncyCheckbox
              text="Arcade"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (arcade) {
                  setArcade("");
                } else {
                  setArcade("Arcade");
                }
              }}
            />
            <BouncyCheckbox
              text="Action"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (action) {
                  setAction("");
                } else {
                  setAction("Action");
                }
              }}
            />
            <BouncyCheckbox
              text="Adventure"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (adventure) {
                  setAdventure("");
                } else {
                  setAdventure("Adventure");
                }
              }}
            />
            <BouncyCheckbox
              text="RPG"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (rpg) {
                  setRpg("");
                } else {
                  setRpg("RPG");
                }
              }}
            />
            <BouncyCheckbox
              text="Strategy"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (strategy) {
                  setStrategy("");
                } else {
                  setStrategy("Strategy");
                }
              }}
            />
            <BouncyCheckbox
              text="Shooter"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (shooter) {
                  setShooter("");
                } else {
                  setShooter("Shooter");
                }
              }}
            />
            <BouncyCheckbox
              text="Platformer"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (platformer) {
                  setPlatformer("");
                } else {
                  setPlatformer("Platformer");
                }
              }}
            />
            <BouncyCheckbox
              text="Board games"
              fillColor={colorStyles.accent}
              textStyle={createFormStyles.checkboxText}
              style={{ marginLeft: 4 }}
              size={35}
              innerIconStyle={createFormStyles.checkboxInnerIconStyle}
              iconStyle={createFormStyles.checkboxIconStyle}
              onPress={() => {
                if (boardgames) {
                  setBoardgames("");
                } else {
                  setBoardgames("Board games");
                }
              }}
            />
          </View>
          <View>
            <Text style={createFormStyles.label}>
              Gameplay time{" "}
              <Text style={createFormStyles.hoursText}>(hours)</Text>
            </Text>
            <TextInput
              autoCapitalize="none"
              accessibilityLabel="enter gameplay time"
              autoCorrect={false}
              style={createFormStyles.input}
              maxLength={4}
              value={formData.gameplayTime}
              keyboardType="numeric"
              onChangeText={(inputValue) => {
                handleFieldChange(inputValue, "gameplayTime");
              }}
            />
          </View>
          <View>
            <Text style={createFormStyles.label}>Release year</Text>
            <TextInput
              autoCapitalize="none"
              accessibilityLabel="select release year"
              keyboardType="numeric"
              autoCorrect={false}
              style={createFormStyles.input}
              value={formData.releaseYear}
              onChangeText={(inputValue) => {
                handleFieldChange(inputValue, "releaseYear");
              }}
            />
          </View>
          <View>
            <Text style={createFormStyles.label}>Age rating</Text>
            <DropDownPicker
              open={openAgeRating}
              setOpen={setOpenAgeRating}
              value={valueAgeRating}
              setValue={setValueAgeRating}
              style={createFormStyles.dropdown}
              textStyle={createFormStyles.dropdownText}
              arrowIconStyle={createFormStyles.dropdownArrow}
              placeholder="Select age rating"
              dropDownDirection="TOP"
              theme="DARK"
              items={ageRatingOptions}
            />
          </View>
          <View style={{ gap: 30 }}>
            <TouchableOpacity
              onPress={chooseFile}
              style={createFormStyles.imagePicker}
            >
              <Text style={createFormStyles.imagePickerText}>
                Choose from gallery
              </Text>
              <FontAwesomeIcon
                icon={faCameraRetro}
                size={35}
                style={createFormStyles.imagePickerIcon}
              />
            </TouchableOpacity>
            {image && (
              <Image
                source={{ uri: image }}
                style={createFormStyles.imagePickerImage}
              />
            )}
          </View>
          <View>
            <Text style={createFormStyles.label}>About</Text>
            <ScrollView scrollEnabled={true}>
              <TextInput
                autoCapitalize="none"
                accessibilityLabel="about the game"
                placeholder="max characters 500"
                placeholderTextColor={colorStyles.secondary}
                scrollEnabled={true}
                multiline={true}
                maxLength={499}
                autoCorrect={false}
                style={createFormStyles.aboutInput}
                value={formData.about}
                onChangeText={(inputValue) => {
                  handleFieldChange(inputValue, "about");
                }}
              />
            </ScrollView>
          </View>
          <TouchableOpacity
            activeOpacity={0.4}
            style={createFormStyles.button}
            onPress={onSubmitHandler}
            accessibilityLabel="press to submit the form"
            accessibilityRole="button"
          >
            <Text style={createFormStyles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateForm;
