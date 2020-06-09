import ShapeAnnotation from '../ShapeAnnotation';
import { Inset } from '../../geometry';
declare class RectangleAnnotation extends ShapeAnnotation {
    cloudyBorderIntensity: number;
    cloudyBorderInset: Inset | null | undefined;
    static defaultValues: any;
    static readableName: string;
    constructor(...args: Array<any>);
}
export default RectangleAnnotation;
