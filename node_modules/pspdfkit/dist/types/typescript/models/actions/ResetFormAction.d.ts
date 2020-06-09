import { List } from "../../../immutable/dist/immutable-nonambient";
import Action from './Action';
declare class ResetFormAction extends Action {
    fields: List<string> | null | undefined;
    includeExclude: boolean;
    static defaultValues: any;
}
export default ResetFormAction;
