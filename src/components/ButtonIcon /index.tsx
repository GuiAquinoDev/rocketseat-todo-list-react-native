import { TouchableOpacityProps } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { Container, MaterialIcon, IoniconIcon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap | keyof typeof Ionicons.glyphMap;
  iconType: "material" | "ionic";
};

export function ButtonIcon({ icon, iconType, ...rest }: Props) {
  return (
    <Container {...rest} type={iconType}>
      {iconType === "material" ? (
        <MaterialIcon name={icon} />
      ) : (
        <IoniconIcon name={icon} />
      )}
    </Container>
  );
}
