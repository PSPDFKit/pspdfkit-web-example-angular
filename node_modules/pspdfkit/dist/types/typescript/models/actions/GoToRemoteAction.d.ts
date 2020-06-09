import Action from './Action';
declare class GoToRemoteAction extends Action {
    relativePath: string;
    namedDestination: string;
    static defaultValues: any;
}
export default GoToRemoteAction;
