import { Container, Icon, Title, SubTitle } from "./style"
import { MaterialCommunityIcons } from '@expo/vector-icons'


type Props = {
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    title: string;
    subtitle: string;
}

export function TaskEmpty({icon, title, subtitle}: Props) {
    return (
        <Container>
            <Icon name={icon} />
            <Title>{title}</Title> 
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    )
}