import Action from './Action';
declare class GoToEmbeddedAction extends Action {
    newWindow: boolean;
    relativePath: string;
    targetType: 'parent' | 'child';
    static defaultValues: any;
}
export default GoToEmbeddedAction;
