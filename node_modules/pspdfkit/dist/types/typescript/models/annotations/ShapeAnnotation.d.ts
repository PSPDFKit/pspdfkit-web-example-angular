import Annotation from './Annotation';
import Color from '../Color';
declare class ShapeAnnotation extends Annotation {
    strokeDashArray: [number, number] | null | undefined;
    strokeWidth: number;
    strokeColor: Color | null | undefined;
    fillColor: Color | null | undefined;
    static defaultValues: any;
}
export default ShapeAnnotation;
