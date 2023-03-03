import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, catchError, of } from 'rxjs';
import { Ticket } from 'src/models/ticket';
import { TicketPriority } from 'src/models/ticketPriority';
// import { EnvironmentConfigService } from './environment-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //TODO add config.json file . Add service to get value from config.json.
  protected _apiRoot: string = "http://localhost:4432/"
  constructor(
    private _http: HttpClient){
    // private _environmentConfig: EnvironmentConfigService)  {
      // this._apiRoot = `${this._environmentConfig.get(
      //   'apiBaseUrl'
      // )}${this._environmentConfig.get('api2Path')}`;
  }

  // Mock
  public GetProjectTicketsKanbangBoard(userId: number, projectId: number):Observable<any>{
    return this._http.get(`${this._apiRoot}getProjectTickets?userId=${userId}&projectId=${projectId}`);
  }

  public GetDataTicketInformation(userId: number, ticketId: number){
    return this._http.get(`${this._apiRoot}getTicketInformation`, {params: {userId: '2', ticketId: ticketId}});
  }

  public GetDataToCreateIssue():Subscription{
    return this._http.get(`${this._apiRoot}controller/GetData`)
    .subscribe((response: any) =>{
      // response = this.projectTicket
    } )
  }
  public  updateProjectColumns(columns: any[], projectId: number){
    return this._http.post(
      `${this._apiRoot}updateProjectColumns`,
      {
         columns: columns,
         projectId: projectId
      });
  }

  public GetIssueTypes():Observable<any>{
    return this._http.get(`${this._apiRoot}getIssueTypes`);
  }

  public GetProjects():Observable<any>{
    return this._http.get(`${this._apiRoot}getProjects`);
  }

  public GetTicketPriorities():Observable<any>{
    return this._http.get(`${this._apiRoot}GetTicketPriorities`);
  }

  //Catch error
  public addNewTicketToProject(newTicket: Ticket):Observable<Ticket>{
    return this._http.post<Ticket>(`${this._apiRoot}ticket/addNewTicket`,newTicket)
    .pipe(
      // catchError(() =)
    );
  }

}
