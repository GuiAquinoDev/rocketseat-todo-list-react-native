import { ButtonTypeStyleProps, Text } from "./styles";

type Props = {
    title: string;
    type?: ButtonTypeStyleProps;

}

export function TaskText({title, type='SELECTED'}: Props ){
    return (
        <Text type={type}>
            {title}
        </Text>
    )
}