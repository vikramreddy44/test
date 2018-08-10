import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { environment } from '../../../../environments/environment';


@Injectable()
export class HomeService {
  //  apiUrl = 'http://swmscdrcdatawh1:5000/api';
  constructor(private http: HttpService) { }

  getSearchData(data) {

    // tslint:disable-next-line:max-line-length
    const searchData = '' + data.projectId + '/' + (data.errorNumber ? data.errorNumber : ' ') + '/' + (data.actionName ? data.actionName : ' ') + '/' + (data.fieldName ? data.fieldName : ' ') + '/' + (data.dbRecord ? data.dbRecord : ' ') + '/' + data.autoFlag + '/' + data.activeFlag + ' ';
    return this.http.get(environment.apiUrl + 'field_rule_g/' + searchData);
  }
  getDataById(projectId, id) {
    const databyId = '' + projectId + '/' + id + '';
    return this.http.get(environment.apiUrl + 'field_rule_g/' + databyId);
  }
  updateDetails(data) {
    return this.http.put(environment.apiUrl + 'field_rule_u', data);
  }
  addDetails(data) {
    return this.http.post(environment.apiUrl + 'field_rule_a', data);
  }
  deleteDetails(project_id, id) {
    const databyId = '' + project_id + '/' + id + '';
    return this.http.delete(environment.apiUrl + 'field_rule_d/', databyId);
  }
}
