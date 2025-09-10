import { HttpEvent, HttpHandlerFn, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const loggerInterceptor: (req: HttpRequest<unknown>, next: HttpHandlerFn) => Observable<HttpEvent<unknown>> = (req, next) => {
    return next(req);
}