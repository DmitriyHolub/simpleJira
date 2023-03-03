import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { Project } from 'src/models/project';
import { TicketPriority } from 'src/models/ticketPriority';

@Injectable({
  providedIn: 'root',
})
export class MockInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.handleRequests(req, next);
  }
  handleRequests(req: HttpRequest<any>, next: HttpHandler): any {
    const { url, method } = req;
    if (url.includes('/getProjectTickets') && method === 'GET') {
      return of(
        new HttpResponse({
          status: 200,
          body: projectData,
        })
      ).pipe(delay(500));
    } else if (url.includes('/getProjects') && method === 'GET') {
      return of(
        new HttpResponse({
          status: 200,
          body: [
            {
              id: 1,
              name: 'The best project',
            },
            {
              id: 2,
              name: 'Keylinks',
            },
            {
              id: 3,
              name: 'DCS',
            },
          ],
        })
      ).pipe(delay(500));
    } else if (url.includes('/getIssueTypes') && method === 'GET') {
      return of(
        new HttpResponse({
          status: 200,
          body: [
            {
              id: 1,
              name: 'bug',
            },
            {
              id: 2,
              name: 'investigation',
            },
          ],
        })
      ).pipe(delay(500));
    } else if (url.includes('/getTicketInformation') && method === 'GET') {
      var ticketId = req.params.get('ticketId');
      return of(
        new HttpResponse({
          status: 200,
          body: projectData.Columns.find((x) => {
            return x.tickets.find((y) => y.id.toString() == ticketId);
          })?.tickets[0],
        })
      ).pipe(delay(500));
    } else if (url.includes('/addNewTicket') && method === 'POST') {
      console.log('catchaaa');
      console.log(req);
      return of(
        new HttpResponse({
          status: 200,
          body: req,
        })
      ).pipe(delay(500));
    } else if (url.includes('/updateProjectColumns') && method === 'POST') {
      console.log('catchaaa');
      console.log(req);
      return of(
        new HttpResponse({
          status: 200,
          body: req,
        })
      ).pipe(delay(500));
    } else if (url.includes('/GetTicketPriorities') && method === 'GET') {
      return of(
        new HttpResponse({
          status: 200,
          body: ticketPriority
        })
      ).pipe(delay(500));
    }

    // if there is not any matches return default request.
    return next.handle(req);
  }
}
//TicketPriority
const ticketPriority: TicketPriority[] = [
  {
    id:1,
    name: "P1"
  },
  {
    id:2,
    name: "P2"
  }
]
const projectData: Project = {
  id: 25,
  name: 'The best project',
  Columns: [
    {
      id:1,
      name: 'TO DO',
      tickets: [
        {
          id: 1,
          name: 'Refactoring CompletedList LIST',
          dateCreated: new Date('2020-01-01'),
          type: 'bug',
          priority: 'P1',
          code: 'DCSS-700',
          // create user class to keep more info
          assignee: 'Dzmitry Holub',
        },
      ],
    },
    {
      id:2,
      name: 'in progress ',
      tickets: [
        {
          id: 2,
          name: 'Course page does not load properly',
          dateCreated: new Date('2023-01-03'),
          type: 'bug',
          priority: 'P1',
          code: 'DCSS-277',
          assignee: 'Bhavin Desai',
        },
        {
          id: 20,
          name: 'Adding save button to comletedRequest page not to confuse users',
          dateCreated: new Date('2021-10-05'),
          type: 'investigation',
          priority: 'P2',
          code: 'DCSS-233',
          assignee: 'Gleb Antonovich',
        },
      ],
    },
    {
      id:3,
      name: 'READY FOR TEST RELEASE',
      tickets: [
        {
          id: 11,
          name: 'Phishing vulnerability - Open Redirect configuration in Shiboleth SP',
          dateCreated: new Date('2019-01-16'),
          type: 'investigation',
          priority: 'P2',
          code: 'DCSS-256',
          assignee: 'Gleb Antonovich',
        },
        {
          id: 7,
          name: 'Kortexst Reader stuck during loading in Crome',
          dateCreated: new Date('2022-07-11'),
          type: 'bug',
          priority: 'P2',
          code: 'DCSS-257',
          assignee: 'Bhavin Desai',
        },
      ],
    },
    {
      id:4,
      name: 'in test',
      tickets: [],
    },
    {
      id:5,
      name: 'ready for release',
      tickets: [
        {
          id: 4,
          name: 'Metadata Api request statuscode 403',
          dateCreated: new Date('2022-04-12'),
          type: 'bug',
          priority: 'P1',
          code: 'DCSS-251',
          assignee: 'Dzmitry Holub',
        },
      ],
    },
    {
      id:6,
      name: 'DoNe',
      tickets: [],
    },
  ],
};
