import { CustomSpan } from './text.styles';
import { IText } from './text.types';

export const Text = ({
    size,
    weight,
    color,
    children,
}: IText) => {
  return (
    <CustomSpan
      weight={weight}
      color={color}
      size={size}
    >
      {children}
    </CustomSpan>
  );
};
