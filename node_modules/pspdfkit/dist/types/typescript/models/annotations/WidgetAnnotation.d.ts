import Annotation from './Annotation';
import Color from '../Color';
import { ActionTriggerEventType } from '../actions/Action';
import { BorderStyleType } from '../../enums/BorderStyle';
import JavaScriptAction from '../actions/JavaScriptAction';
declare type FontSize = 'auto' | number;
export declare type WidgetActionTriggerEventType = ActionTriggerEventType | 'onFocus' | 'onBlur';
export declare type WidgetAnnotationAdditionalActionsType = {
    onFocus?: JavaScriptAction;
    onBlur?: JavaScriptAction;
};
declare class WidgetAnnotation extends Annotation {
    formFieldName: string;
    borderColor: Color | null | undefined;
    borderStyle: BorderStyleType | null | undefined;
    borderWidth: number | null | undefined;
    backgroundColor: Color | null | undefined;
    fontSize: FontSize | null | undefined;
    isBold: boolean;
    isItalic: boolean;
    horizontalAlign: 'left' | 'center' | 'right' | null;
    verticalAlign: 'top' | 'center' | 'bottom' | null;
    additionalActions: WidgetAnnotationAdditionalActionsType | null | undefined;
    rotation: number;
    static defaultValues: any;
}
export default WidgetAnnotation;
