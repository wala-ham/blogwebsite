// import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router} from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';

// // export const authGuard: CanActivateFn = (route, state) => {
  
// // };

// export class AuthGuard  implements CanActivate{
//   constructor(private auth :AuthService,private router:Router){}
//   canActivate(){
//     if (this.auth.isLoggedIn()){return true}
//     else {
//       this.router.navigate(['/login']);
//       return false ; 
//     }
//   }

// };

import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service'; // Update the path

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

