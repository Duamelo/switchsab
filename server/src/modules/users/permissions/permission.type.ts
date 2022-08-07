import PostesPermission from "./postesPermission.enum";
import CategoriesPermission from './categoriesPermission.enum';
import GroupesPermission from "./groupesPermission.enum";
import AutresPermission from "./autresPermission.enum";
import SouscriptionsPermission from './souscriptionsPermission.enum';
import TarifsPermission from "./tarifsPermission.enum";

const Permission = {
  ...PostesPermission,
  ...CategoriesPermission,
  ...GroupesPermission,
  ...SouscriptionsPermission,
  ...TarifsPermission
  ...AutresPermission
}
 
type Permission = PostesPermission | 
                  CategoriesPermission | 
                  GroupesPermission | 
                  SouscriptionsPermission |
                  TarifsPermission |
                  AutresPermission;
 
export default Permission;