import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class HomeService {

  constructor(private http: HttpService) { }

  getSearchData(data) {

    // tslint:disable-next-line:max-line-length
    const searchData = '' + data.projectId + '/' + (data.fieldName ? data.fieldName : ' ') + '/' + data.autoFlag + '/' + (data.fieldRuleSeq ? data.fieldRuleSeq : ' ') + '/' + (data.customXml ? data.customXml : ' ') + '/' + (data.dbRecord ? data.dbRecord : ' ') + '/';
    return this.http.get(environment.apiUrl + 'field_xml_g/' + searchData);
  }
  getDataById(projectId, id) {
    const databyId = '' + projectId + '/' + id + '';
    return this.http.get(environment.apiUrl + 'field_xml_g/' + databyId);
  }
  updateDetails(data) {
    return this.http.put(environment.apiUrl + 'field_xml_u', data);
  }
  addDetails(data) {
    return this.http.post(environment.apiUrl + 'field_xml_a', data);
  }
  deleteDetails(project_id, id) {
    const databyId = '' + project_id + '/' + id + '';
    return this.http.delete(environment.apiUrl + 'field_xml_d/', databyId);
  }
}
