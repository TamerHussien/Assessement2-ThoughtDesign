import { Injectable } from '@angular/core';

import { DEP } from '../shared/dep';

import { Quiz } from '../shared/quiz';

import { SciQuiz } from '../shared/sciquizes';

import { MathQuiz } from '../shared/mathquiz';

import { SciQuestions } from '../shared/sciquest';

import { MathQuestions } from '../shared/mathquest';

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

      getSciQuiz (): Observable<Quiz[]> {
        return Observable.of(SciQuiz);
      }

      getMathQuiz (): Observable<Quiz[]> {
        return Observable.of(MathQuiz);
      }
getSciQuest (): Observable<any> {
  return Observable.of(SciQuestions);
}
getMathQuest (): Observable<any> {
  return Observable.of(MathQuestions);
}

}
