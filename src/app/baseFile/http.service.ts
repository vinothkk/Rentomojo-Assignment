import { Injectable } from '@angular/core';

import { AppConstants } from './appconstants';

import { Observable, throwError, ErrorObserver } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const optionsAuth = {
  headers: httpOptions.headers
};

const httpOptionsAccept = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'accept': 'application/json'
  })
};
const optionsAccept = {
  headers: httpOptionsAccept.headers
};
@Injectable({
  providedIn: 'root'
})
export class HttpService extends AppConstants {

  constructor(private httpclient: HttpClient, private router: Router) {
    super();
  }

  private HOST;
  private roleUrl = 'http://www.omdbapi.com/?s=run&apikey=a4b16c5e';

  httpGetAPI(path: string, baseUrl: string, reqOptions?: any): Observable<any> {
    this.HOST = baseUrl;
    const uri = path;
    if (!reqOptions) {
      reqOptions = optionsAuth;
    }
    return this.httpclient.get(uri)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        // catchError(this.handleError) // then handle the error
      );
  }


  httpPostAPI(path: string, reqBody: any, baseUrl: string, reqOptions?: any): Observable<any> {
    this.HOST = baseUrl;
    const uri = path;
    if (!reqOptions) {
      reqOptions = optionsAccept;
    }
    return this.httpclient.post(uri, reqBody, reqOptions);
      // .pipe(
      //   catchError(this.handleError)
      // );
  }



  httpPutAPI(path: string, reqBody: any, baseUrl: string, reqOptions?: any): Observable<any> {
    this.HOST = baseUrl;
    const uri = path;
    if (!reqOptions) {
      reqOptions = optionsAccept;
    }
    return this.httpclient.put(uri, reqBody, reqOptions);
      // .pipe(
      //   catchError(catchError(this.handleError))
      // );
  }

  httpDeleteAPI(path: string, baseUrl: string, reqOptions?: any): Observable<any> {
    this.HOST = baseUrl;
    const uri = path;
    if (!reqOptions) {
      reqOptions = optionsAccept;
    }
    return this.httpclient.delete(uri, reqOptions);
      // .pipe(
      //   catchError(this.handleError)
      // );
  }

  extractResponse(res: Response): any {
    const assign = res.json();

    return assign;
  }

  handleErrorForPromise(err: Response | any): any {

    if (err instanceof Response) {
      return Promise.reject(err);
    } else {
      return Promise.reject(err);
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Client Side Error', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,

      // this.router.navigateByUrl('/access-denied');
      console.error(
        `Server side Error, ${error},` +
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message

  }

}
