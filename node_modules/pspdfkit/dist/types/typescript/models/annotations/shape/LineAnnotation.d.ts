import ShapeAnnotation from '../ShapeAnnotation';
import { Point } from '../../geometry/index';
import { LineCapsType as LineCaps } from '../../../enums/LineCap';
declare class LineAnnotation extends ShapeAnnotation {
    startPoint: Point;
    endPoint: Point;
    lineCaps: LineCaps | null | undefined;
    static defaultValues: any;
    static readableName: string;
}
export default LineAnnotation;
