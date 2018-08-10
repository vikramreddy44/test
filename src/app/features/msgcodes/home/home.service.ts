import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class HomeService {
    constructor(private http: HttpService) { }

    getSearchData(data) {

        // tslint:disable-next-line:max-line-length
        const searchData = '' + data.projectId + '/' + (data.msgCode ? data.msgCode : ' ') + '/' + (data.msgText ? data.msgText : ' ') + '/' + data.msgAction + '/' + (data.msgType ? data.msgType : ' ') + '/' + (data.msgCat ? data.msgCat : ' ') + '/' + (data.dbRecord ? data.dbRecord : ' ') + '/';
        return this.http.get(environment.apiUrl + 'msg_codes_g/' + searchData);
    }
    getDataById(projectId, id) {
        const databyId = '' + projectId + '/' + id + '';
        return this.http.get(environment.apiUrl + 'msg_codes_g/' + databyId);
    }
    updateDetails(data) {
        return this.http.put(environment.apiUrl + 'msg_codes_u', data);
    }
    addDetails(data) {
        return this.http.post(environment.apiUrl + 'msg_codes_a', data);
    }
    deleteDetails(project_id, id) {
        const databyId = '' + project_id + '/' + id + '';
        return this.http.delete(environment.apiUrl + 'msg_codes_d/', databyId);
    }
}
