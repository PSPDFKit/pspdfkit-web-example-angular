import Annotation from './Annotation';
import Color from '../Color';
import { ColorPreset } from '../Colors';
import { NoteIconType } from '../../enums/NoteIcon';
export declare const defaultColorPresets: Array<ColorPreset>;
declare class NoteAnnotation extends Annotation {
    text: string;
    icon: NoteIconType;
    color: Color;
    static isEditable: boolean;
    static readableName: string;
    static defaultValues: any;
}
export default NoteAnnotation;
