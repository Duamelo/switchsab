import PostesPermission from "./postesPermission.enum";
import CategoriesPermission from './categoriesPermission.enum';
import GroupesPermission from "./groupesPermission.enum";
import AutresPermission from "./autresPermission.enum";

const Permission = {
  ...PostesPermission,
  ...CategoriesPermission,
  ...GroupesPermission,
  ...AutresPermission
}
 
type Permission = PostesPermission | CategoriesPermission | GroupesPermission | AutresPermission;
 
export default Permission;