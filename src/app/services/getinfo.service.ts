import { Injectable } from '@angular/core';

import { DEP } from '../shared/dep';

import { School } from '../shared/school';

import { SCHOOLS } from '../shared/schools';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class GetinfoService {

  constructor() { }

  getSchools(): Observable<School[]> {
    return Observable.of(SCHOOLS);
  }
  getSchool (id: number): Observable<School> {
        return Observable.of(SCHOOLS.filter((school) => (school.id === id))[0]);
      }
      getSchoolIds(): Observable<number[]> {
        return Observable.of(SCHOOLS.map(school => school.id ));
      }


}
