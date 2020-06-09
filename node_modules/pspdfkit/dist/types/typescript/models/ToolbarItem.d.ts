import { ToolItemType, ToolItem } from './ToolItem';
import { AnnotationPresetID } from './AnnotationPreset';
declare type BuiltInToolbarItemType = 'pager' | 'layout-config' | 'pan' | 'zoom-out' | 'zoom-in' | 'zoom-mode' | 'marquee-zoom' | 'spacer' | 'text' | 'annotate' | 'responsive-group' | 'ink' | 'image' | 'line' | 'arrow' | 'rectangle' | 'ellipse' | 'polygon' | 'polyline' | 'note' | 'print' | 'search' | 'debug' | 'sidebar-thumbnails' | 'ink-signature' | 'comment';
declare type ToolbarItemType = ToolItemType | BuiltInToolbarItemType;
export declare type ToolbarItem = ToolItem & {
    type: ToolbarItemType;
    mediaQueries?: string[];
    responsiveGroup?: string;
    dropdownGroup?: string;
    preset: AnnotationPresetID;
};
export declare const validate: (item: ToolbarItem) => void;
export {};
