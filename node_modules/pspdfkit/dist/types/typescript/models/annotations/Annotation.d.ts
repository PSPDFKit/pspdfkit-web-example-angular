import { InheritableImmutableRecord } from '../../lib/InheritableImmutableRecord';
import { Rect } from '../geometry';
import Action from '../actions/Action';
export declare type ID = string;
declare class Annotation extends InheritableImmutableRecord {
    id: ID;
    name: string | null | undefined;
    pdfObjectId: number | null | undefined;
    pageIndex: number;
    boundingBox: Rect;
    opacity: number;
    action: any;
    note: string | null | undefined;
    creatorName: string | null | undefined;
    createdAt: Date;
    updatedAt: Date;
    noView: boolean;
    noPrint: boolean;
    hidden: boolean;
    customData: {} | null | undefined;
    noZoom: boolean;
    noRotate: boolean;
    additionalActions: any | null | undefined;
    rotation: number;
    isCommentThreadRoot: boolean;
    static defaultValues: any;
    constructor(...args: Array<any>);
}
export default Annotation;
export declare type AnnotationAdditionalActionsType = {
    onPointerEnter?: Action;
    onPointerLeave?: Action;
    onPointerDown?: Action;
    onPointerUp?: Action;
    onPageOpen?: Action;
    onPageClose?: Action;
    onPageVisible?: Action;
    onPageHidden?: Action;
};
