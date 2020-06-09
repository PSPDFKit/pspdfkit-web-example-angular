import Color from './Color';
import Rect from './geometry/Rect';
declare const _default: {};
export default _default;
declare type Rotation = 0 | 90 | 180 | 270;
declare type AddPageConfiguration = {
    backgroundColor: Color;
    pageWidth: number;
    pageHeight: number;
    rotateBy: Rotation;
    insets?: Rect;
};
declare type AddPageConfigurationJSON = {
    backgroundColor: string;
    pageWidth: number;
    pageHeight: number;
    rotateBy: Rotation;
    insets?: Array<number>;
};
declare type OperationAttachment = string | File | Blob;
declare type NonSerializableDocumentOperations = {
    type: 'removePages';
    pageIndexes: Array<number>;
} | {
    type: 'duplicatePages';
    pageIndexes: Array<number>;
} | {
    type: 'movePages';
    pageIndexes: Array<number>;
    afterPageIndex: number;
} | {
    type: 'movePages';
    pageIndexes: Array<number>;
    beforePageIndex: number;
} | {
    type: 'rotatePages';
    pageIndexes: Array<number>;
    rotateBy: Rotation;
} | {
    type: 'keepPages';
    pageIndexes: Array<number>;
} | {
    type: 'importDocument';
    afterPageIndex: number;
    treatImportedDocumentAsOnePage: boolean;
    document: OperationAttachment;
} | {
    type: 'importDocument';
    beforePageIndex: number;
    treatImportedDocumentAsOnePage: boolean;
    document: OperationAttachment;
} | {
    type: 'applyInstantJson';
    instantJson: Object;
    dataFilePath: OperationAttachment;
} | {
    type: 'applyXfdf';
    xfdf: string;
    dataFilePath: OperationAttachment;
};
export declare type DocumentOperation = (AddPageConfiguration & {
    type: 'addPage';
    afterPageIndex: number;
}) | (AddPageConfiguration & {
    type: 'addPage';
    beforePageIndex: number;
}) | NonSerializableDocumentOperations;
export declare type DocumentOperationJSON = (AddPageConfigurationJSON & {
    type: 'addPage';
    afterPageIndex: number;
}) | (AddPageConfigurationJSON & {
    type: 'addPage';
    beforePageIndex: number;
}) | NonSerializableDocumentOperations;
export declare function validateDocumentOperations(operations: Array<DocumentOperation>): Array<DocumentOperation> | null | undefined;
