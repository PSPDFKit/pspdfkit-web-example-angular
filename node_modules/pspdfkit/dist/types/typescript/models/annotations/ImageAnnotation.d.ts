import Annotation from './Annotation';
declare class ImageAnnotation extends Annotation {
    description: string | null | undefined;
    fileName: string | null | undefined;
    contentType: string;
    imageAttachmentId: string;
    rotation: number;
    static defaultValues: any;
    static readableName: string;
}
export default ImageAnnotation;
