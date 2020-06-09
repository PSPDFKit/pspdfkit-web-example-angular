import { List } from "../../../immutable/dist/immutable-nonambient";
import { Rect } from '../geometry';
import Annotation from './Annotation';
import Color from '../Color';
import { BlendModeType } from '../../enums/BlendMode';
declare class TextMarkupAnnotation extends Annotation {
    rects: List<Rect>;
    color: Color;
    blendMode: BlendModeType;
    static defaultValues: any;
}
export default TextMarkupAnnotation;
