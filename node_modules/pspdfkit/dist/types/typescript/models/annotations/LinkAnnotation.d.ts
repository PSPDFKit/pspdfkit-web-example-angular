import { Action } from '../actions';
import Annotation from './Annotation';
declare class LinkAnnotation extends Annotation {
    action: Action;
    static readableName: string;
}
export default LinkAnnotation;
