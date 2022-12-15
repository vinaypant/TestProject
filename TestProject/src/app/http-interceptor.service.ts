import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
@Injectable({
    providedIn: 'root'
})

export class HttpInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
        let errorMsg = '';
        return handler.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.error instanceof ErrorEvent) {
                    errorMsg = `error: ${err.message} ,status ${err.status}`;
                }
                else {

                }
                return throwError(errorMsg);

            })


        )
    }

}