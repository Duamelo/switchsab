import PostesPermission from "./postesPermission.enum";
import CategoriesPermission from './categoriesPermission.enum';
import GroupesPermission from "./groupesPermission.enum";
import AutresPermission from "./autresPermission.enum";
import SouscriptionsPermission from './souscriptionsPermission.enum';

const Permission = {
  ...PostesPermission,
  ...CategoriesPermission,
  ...GroupesPermission,
  ...SouscriptionsPermission,
  ...AutresPermission
}
 
type Permission = PostesPermission | 
                  CategoriesPermission | 
                  GroupesPermission | 
                  SouscriptionsPermission | 
                  AutresPermission;
 
export default Permission;