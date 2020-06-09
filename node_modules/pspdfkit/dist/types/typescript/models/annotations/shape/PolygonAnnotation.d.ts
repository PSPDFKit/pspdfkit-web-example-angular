import ShapeAnnotation from '../ShapeAnnotation';
import { Point } from '../../geometry/index';
import { List } from "../../../../immutable/dist/immutable-nonambient";
declare class PolygonAnnotation extends ShapeAnnotation {
    points: List<Point>;
    cloudyBorderIntensity: number;
    static defaultValues: any;
    static readableName: string;
}
export default PolygonAnnotation;
