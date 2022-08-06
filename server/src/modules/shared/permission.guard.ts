import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import JwtAuthGuard from '../auth/jwt-auth.guard';
import RequestWithUser from '../auth/requestWithUser.interface';
import Permission from '../users/permissions/permission.type';

const PermissionGuard = (permission: Permission): Type<CanActivate> => {
  class PermissionGuardMixin extends JwtAuthGuard {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);

      const request = context.switchToHttp().getRequest<RequestWithUser>();
      const user = request.user;

      return user?.permissions.includes(permission);
    }
  }

  return mixin(PermissionGuardMixin);
};

export default PermissionGuard;
