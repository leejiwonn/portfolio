import { Color } from '~/utils/color';
import { Font, Align, FontType } from '~/utils/font';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

interface Props {
  tag?: TypographyTag;
  children: React.ReactNode;
  font?: FontType;
  color?: Color;
  align?: Align;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  lineHeight?: number;
}

const Typography = ({
  tag = 'p',
  children,
  font = FontType.MEDIUM_BODY_03,
  color = Color.DEPTH_D,
  align = Align.LEFT,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  lineHeight = 1.5,
}: Props) => {
  const TagComponent = tag as TypographyTag;
  const style = Font.getStyle(font);

  return (
    <TagComponent
      style={{
        fontSize: style.size + 'em',
        fontWeight: style.weight,
        color: color,
        textAlign: align,
        marginTop: marginTop / 100 + 'em',
        marginBottom: marginBottom / 100 + 'em',
        marginLeft: marginLeft / 100 + 'em',
        marginRight: marginRight / 100 + 'em',
        lineHeight: lineHeight,
      }}
    >
      {children}
    </TagComponent>
  );
};

export default Typography;
