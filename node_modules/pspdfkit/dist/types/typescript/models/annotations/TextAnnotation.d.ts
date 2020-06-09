import Annotation from './Annotation';
import Color from '../Color';
import { BorderStyleType } from '../../enums/BorderStyle';
import Callout from '../Callout';
declare class TextAnnotation extends Annotation {
    text: string;
    fontColor: Color | null | undefined;
    backgroundColor: Color | null | undefined;
    font: string;
    rotation: number;
    fontSize: number;
    isBold: boolean;
    isItalic: boolean;
    horizontalAlign: 'left' | 'center' | 'right';
    verticalAlign: 'top' | 'center' | 'bottom';
    isFitting: boolean;
    callout: Callout | null | undefined;
    borderStyle: BorderStyleType | null | undefined;
    borderWidth: number | null | undefined;
    static defaultValues: any;
    static isEditable: boolean;
    static readableName: string;
    static fontSizePresets: readonly number[];
}
export default TextAnnotation;
