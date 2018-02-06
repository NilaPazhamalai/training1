import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
 
import { Trainer } from './Trainer';
import { Training } from './Training';
import { ScheduleTraining } from './ScheduleTraining';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TrainingService {

  private trainingUrl = 'api/training';  // URL to web api
 
  constructor(
    private http: HttpClient) { }
 
  /** GET training list from the server */
  searchTraining (date: Date): Observable<Training[]> {
    const url = this.trainingUrl+"/"+date  ;
    if (!date){
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Training[]>(url)
      .pipe(
        tap(trainingList => this.log("list"+ trainingList.toString)),
        catchError(this.handleError('getTraining', []))
      );
  }

   /** GET training list from the server */
   addTraining (scheduleTraining: ScheduleTraining): Observable<boolean> {
    const url = this.trainingUrl+"/schedule";
    return this.http.post<boolean>(url,scheduleTraining).pipe(
      tap(_ => this.log("training scheduled")),
      catchError(this.handleError('addTraining',false))
    );
   }
 

  //////// Save methods //////////
 
  /** POST: add a new training to the server */
   /**
  addTraining (training: Training[], trainer: Trainer): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  */
 
 
 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('TrainingService: ' + message);
  }


}
