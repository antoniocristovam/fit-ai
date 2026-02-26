import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import { ExerciseMedia } from "../../types";
import { Colors } from "../../../../styles/colors";
import { BorderRadius } from "../../../../styles/spacing";

interface ExercisePreviewProps {
  media?: ExerciseMedia;
  fallbackImage?: ImageSourcePropType;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const PREVIEW_HEIGHT = SCREEN_WIDTH * 0.75;

/**
 * ExercisePreview Component (Fallback - Only Images)
 * Use this version if video playback causes issues
 *
 * To use: Replace the import in WorkoutExecutionScreen.tsx
 * from './ExercisePreview' to './ExercisePreview.fallback'
 */
export const ExercisePreview: React.FC<ExercisePreviewProps> = ({
  media,
  fallbackImage,
}) => {
  const renderContent = () => {
    if (!media && !fallbackImage) {
      return (
        <View style={styles.placeholderContainer}>
          <View style={styles.placeholder} />
        </View>
      );
    }

    if (!media && fallbackImage) {
      return (
        <Image source={fallbackImage} style={styles.media} resizeMode="cover" />
      );
    }

    // For all media types (video, gif, image), use Image component
    // Videos will show thumbnail if available, otherwise the URL
    const imageUri =
      media?.type === "video"
        ? media.thumbnail || media.url // Use thumbnail for videos
        : media?.url;

    return (
      <Image
        source={{ uri: imageUri }}
        style={styles.media}
        resizeMode="cover"
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mediaContainer}>
        {renderContent()}
        <View style={styles.glowOverlay} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: PREVIEW_HEIGHT,
    marginBottom: 24,
  },
  mediaContainer: {
    width: "100%",
    height: "100%",
    borderRadius: BorderRadius.xl,
    overflow: "hidden",
    backgroundColor: Colors.background.card,
    position: "relative",
  },
  media: {
    width: "100%",
    height: "100%",
  },
  placeholderContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.card,
  },
  placeholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.background.secondary,
  },
  glowOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.brand.primary,
    opacity: 0.15,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
});
