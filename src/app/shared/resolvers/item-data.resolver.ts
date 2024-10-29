import {inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {CrudService} from "../services/crud.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemDataResolver implements Resolve<any> {
  constructor(private crudService: CrudService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.crudService.get(route['data']['routePath'], route.params['id'],  route['data']['params']);
  }
}
