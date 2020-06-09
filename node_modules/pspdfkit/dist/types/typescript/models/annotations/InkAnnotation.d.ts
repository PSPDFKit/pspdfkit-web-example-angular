import { List } from "../../../immutable/dist/immutable-nonambient";
import Annotation from './Annotation';
import Color from '../Color';
import { DrawingPoint } from '../geometry';
import { BlendModeType } from '../../enums/BlendMode';
declare class InkAnnotation extends Annotation {
    lines: List<List<DrawingPoint>>;
    lineWidth: number;
    strokeColor: Color | null | undefined;
    backgroundColor: Color | null | undefined;
    isDrawnNaturally: boolean;
    isSignature: boolean;
    blendMode: BlendModeType;
    static defaultValues: any;
    static readableName: string;
}
export default InkAnnotation;
