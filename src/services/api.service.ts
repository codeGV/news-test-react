import { Observable, Observer } from "rxjs";
import axios from "axios";

export class ApiService {
  constructor() {}

  public static get(url: string):Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      axios
        .get(url)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
