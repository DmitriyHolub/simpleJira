// import { Observable } from 'rxjs';
// import { AuthQuery } from 'src/components/shared/state/auth/auth.query';
// import { EnvironmentConfig } from 'src/libs/environment/environment-config.interface';
// import { EnvironmentConfigService } from 'src/libs/environment/environment-config.service';
// import { AUTH_CONFIG_TOKEN, IAuthConfig } from 'src/services/auth/auth.interceptor';



// export default [
//   {
//     provide: AUTH_CONFIG_TOKEN,
//     deps: [AuthQuery, EnvironmentConfigService],
//     useFactory: (
//       authRepo: AuthQuery,
//       environmentConfig: EnvironmentConfig
//     ): IAuthConfig => ({
//       getToken: (): Observable<string> => authRepo.token$,
//       redirectUrl: (): string => window.location.href,
//       shouldAppendToken(req): boolean {
//         const apiRoot = environmentConfig.get('apiRoot');
//         const siteApiRoot = `${environmentConfig.get('siteRoot')}/api`;
//         return (
//           req.url.indexOf(apiRoot) > -1 || req.url.indexOf(siteApiRoot) > -1
//         );
//       },
//       shouldRedirectToLogin(req): boolean {
//         const apiRoot = environmentConfig.get('apiRoot');
//         const authUrl = environmentConfig.get('authTokenApiUrl');
//         const siteApiRoot = `${environmentConfig.get('siteRoot')}/api`;
//         return (
//           (req.url && req.url.indexOf(authUrl) > -1) ||
//           req.url.indexOf(apiRoot) > -1 ||
//           req.url.indexOf(siteApiRoot) > -1
//         );
//       }
//     })
//   }
// ];
