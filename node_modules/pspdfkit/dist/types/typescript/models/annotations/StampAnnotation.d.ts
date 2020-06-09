import { $Keys } from "../../../utility-types/dist/index";
import Annotation from './Annotation';
import Color from '../Color';
declare type StampKind = 'Approved' | 'NotApproved' | 'Draft' | 'Final' | 'Completed' | 'Confidential' | 'ForPublicRelease' | 'NotForPublicRelease' | 'ForComment' | 'Void' | 'PreliminaryResults' | 'InformationOnly' | 'Rejected' | 'Accepted' | 'InitialHere' | 'SignHere' | 'Witness' | 'AsIs' | 'Departmental' | 'Experimental' | 'Expired' | 'Sold' | 'TopSecret' | 'Revised' | 'RejectedWithText' | 'Custom';
export declare type StampKindProperties = {
    includeDate?: boolean;
    includeTime?: boolean;
    color?: Color;
};
export declare const allowedTypes: {
    [key in StampKind]?: StampKindProperties;
};
export declare const predefinedToStandardMap: {
    [key in $Keys<typeof allowedTypes>]?: string;
};
export declare const getMappedStampType: (stampType: StampKind) => string;
declare class StampAnnotation extends Annotation {
    stampType: StampKind;
    title: string | null | undefined;
    subtitle: string | null | undefined;
    color: Color | null | undefined;
    rotation: number;
    static defaultValues: any;
    static readableName: string;
}
export default StampAnnotation;
