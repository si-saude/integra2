import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Helper } from './helper';
import { DialogService } from './../util/dialog/dialog.service';
import { SpinnerService } from './../util/spinner/spinner.service';
import { GenericFilter } from './generic-filter';

export abstract class GenericService<T, F extends GenericFilter> {

    readonly rootUrl = 'http://localhost:5080/IntegraApi2/rest/';

    protected helper: Helper;

    constructor(protected http: Http, protected path: string, protected router: Router,
            protected dialog: DialogService, protected spinner: SpinnerService) {
        this.helper = new Helper();
    }

    protected getHeaders(): Headers {
        const headers: Headers = new Headers( { 'Content-Type': 'application/json' } );
        const token = localStorage.getItem('token');
        if (token) {
            headers.append('Authorization', 'Bearer ' + token);
        }
        return headers;
    }

    abstract initializeObject(): T;
    abstract initializeFilter(): F;
    abstract toObject(obj: any): T;

    toList(objs: any): Array<T> {
        const array: Array<T> = new Array<T>();
        for (let x = 0; x < objs.length; x++) {
            array.push(this.toObject(objs[x]));
        }
        return array;
    }

    showSpinner() {
        this.spinner.show();
    }

    hideSpinner() {
        this.spinner.hide();
    }

    get(id: any, fThen: any, fCatch: any) {
        this.showSpinner();
        this.toPromise(this.http.get(this.rootUrl + this.path + '?id=' + id.toString(), { headers: this.getHeaders() }),
            fThen, fCatch, undefined);
    }

    list(filter: F, fThen: any, fCatch: any) {
        this.showSpinner();
        this.toPromise(this.http.post(this.rootUrl + this.path + '/list', filter, { headers: this.getHeaders() }  ),
            fThen, fCatch, undefined);
    }

    save(t: T, fThen: any, fCatch: any) {
        this.showSpinner();
        t = this.toObject(t);
        this.toPromise(this.http.post(this.rootUrl + this.path, t, { headers: this.getHeaders()}) ,
            fThen, fCatch, 'Salvo com sucesso.');
    }

    delete(id: any, fThen: any, fCatch: any) {
        this.showSpinner();
        this.toPromise(this.http.post(this.rootUrl + this.path + '/delete', id, { headers: this.getHeaders() }  ),
            fThen, fCatch, 'Registro removido com sucesso.');
    }

    toPromise(o: Observable<Response>, fThen: any, fCatch: any, message: any) {
        o.toPromise().then(res => {
            this.hideSpinner();
            if (message) {
                this.showMessage(message.toString());
            }
            if (fThen) {
                fThen(res);
            }
        })
        .catch(error => {
            if (fCatch) {
                fCatch(error);
            }
            this.catch(error);
        });
    }

    catch(error) {
        this.hideSpinner();
        if (error.status === 401) {
            this.showMessage('A sua sessão expirou.');
            localStorage.clear();
            this.router.navigate(['/login']);
        } else {
            this.showMessage(error._body);
        }
    }

    showMessage(message: string) {
        this.dialog.show(message);
    }

    getPath() {
        return this.path;
    }
}
