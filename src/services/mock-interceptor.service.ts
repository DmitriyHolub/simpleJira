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
import { Ticket } from 'src/models/ticket';
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
      console.log('req.params.get');
      console.log(req.params.get('projectId'));
      var projectData: any;

      if (req.params.get('projectId') == '1') {
        projectData = projectData1;
      } else if (req.params.get('projectId') == '2') {
        projectData = projectData2;
      } else if (req.params.get('projectId') == undefined) {
        projectData = projectData1;
      }

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
              icon: 'project1',
              parentName: 'The sofware project',
            },
            {
              id: 2,
              name: 'The second project',
              icon: 'project2',
              parentName: 'The sofware project',
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
    } else if (url.includes('/GetTicketsAssignedToUser') && method === 'GET') {
      return of(
        new HttpResponse({
          status: 200,
          body: ticketAssignedToMe,
        })
      ).pipe(delay(500));
    } else if (url.includes('/getTicketInformation') && method === 'GET') {
      var ticketId = req.params.get('ticketId');

      // var aa = projectData1.Columns.find((x) => {
      //   return x.tickets.find((y) => y.id.toString() == ticketId);
      // })?.tickets[0];
      return of(
        new HttpResponse({
          status: 200,
          body:
            projectData1.Columns.find((x) => {
              return x.tickets.find((y) => y.id.toString() == ticketId);
            })?.tickets[0] ??
            projectData2.Columns.find((x) => {
              return x.tickets.find((y) => y.id.toString() == ticketId);
            })?.tickets[0],
        })
      ).pipe(delay(500));
    } else if (url.includes('/addNewTicket') && method === 'POST') {
      console.log('catchaaa');
      return of(
        new HttpResponse({
          status: 200,
          body: req,
        })
      ).pipe(delay(500));
    } else if (url.includes('/updateProjectColumns') && method === 'POST') {
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
          body: ticketPriority,
        })
      ).pipe(delay(500));
    } else if (url.includes('/GetFullTicketInfo') && method === 'GET') {
      var ticketId = req.params.get('ticketId');
      return of(
        new HttpResponse({
          status: 200,
          body: fullTicketInformation.find(x => x.id = ticketId),
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
    id: 1,
    name: 'P1',
  },
  {
    id: 2,
    name: 'P2',
  },
];
const projectData1: Project = {
  id: 1,
  name: 'The best project',
  Columns: [
    {
      id: 1,
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
          description: ""
        },
      ],
    },
    {
      id: 2,
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
          description: ""
        },
        {
          id: 3,
          name: 'Adding save button to comletedRequest page not to confuse users',
          dateCreated: new Date('2021-10-05'),
          type: 'investigation',
          priority: 'P2',
          code: 'DCSS-233',
          assignee: 'Gleb Antonovich',
          description: ""
        },
      ],
    },
    {
      id: 3,
      name: 'READY FOR TEST RELEASE',
      tickets: [
        {
          id: 4,
          name: 'Phishing vulnerability - Open Redirect configuration in Shiboleth SP',
          dateCreated: new Date('2019-01-16'),
          type: 'investigation',
          priority: 'P2',
          code: 'DCSS-256',
          assignee: 'Gleb Antonovich',
          description: ""
        },
        {
          id: 5,
          name: 'Kortexst Reader stuck during loading in Crome',
          dateCreated: new Date('2022-07-11'),
          type: 'bug',
          priority: 'P2',
          code: 'DCSS-257',
          assignee: 'Bhavin Desai',
          description: ""
        },
      ],
    },
    {
      id: 4,
      name: 'in test',
      tickets: [],
    },
    {
      id: 5,
      name: 'ready for release',
      tickets: [
        {
          id: 6,
          name: 'Metadata Api request statuscode 403',
          dateCreated: new Date('2022-04-12'),
          type: 'bug',
          priority: 'P1',
          code: 'DCSS-251',
          assignee: 'Dzmitry Holub',
          description: ""
        },
      ],
    },
    {
      id: 6,
      name: 'DoNe',
      tickets: [],
    },
  ],
};
const projectData2: Project = {
  id: 2,
  name: 'The second project',
  Columns: [
    {
      id: 7,
      name: 'TO DO',
      tickets: [
        {
          id: 7,
          name: 'Creating new UI documentation',
          dateCreated: new Date('2020-03-01'),
          type: 'investigation',
          priority: 'P2',
          code: 'DCSS-710',
          assignee: 'Dzmitry Holub',
          description: ""
        },
      ],
    },
    {
      id: 8,
      name: 'in progress',
      tickets: [
        {
          id: 8,
          name: 'Course page refactoring',
          dateCreated: new Date('2023-01-03'),
          type: 'investigation',
          priority: 'P1',
          code: 'DCSS-278',
          assignee: 'Bhavin Desai',
          description: ""
        },
        {
          id: 9,
          name: 'Adding save button to comletedRequest page not to confuse users',
          dateCreated: new Date('2021-10-05'),
          type: 'investigation',
          priority: 'P2',
          code: 'DCSS-233',
          assignee: 'Gleb Antonovich',
          description: ""
        },
        {
          id: 10,
          name: 'Wrong data for user name',
          dateCreated: new Date('2017-01-16'),
          type: 'bug',
          priority: 'P1',
          code: 'DCSS-257',
          assignee: 'Gleb Antonovich',
          description: ""
        },
        {
          id: 11,
          name: 'Kortexst Reader not appear for Oxford university',
          dateCreated: new Date('2022-07-11'),
          type: 'bug',
          priority: 'P2',
          code: 'DCSS-245',
          assignee: 'Bhavin Desai',
          description: ""
        },
      ],
    },
    {
      id: 9,
      name: 'in test',
      tickets: [],
    },
    {
      id: 10,
      name: 'ready for release',
      tickets: [
        {
          id: 12,
          name: 'Cloning list issue',
          dateCreated: new Date('2022-04-12'),
          type: 'bug',
          priority: 'P1',
          code: 'DCSS-251',
          assignee: 'Dzmitry Holub',
          description: ""
        },
      ],
    },
    {
      id: 11,
      name: 'DoNe',
      tickets: [],
    },
  ],
};
const ticketAssignedToMe: any[] = [
  {
    id: 1,
    name: 'Refactoring CompletedList LIST',
    dateCreated: new Date('2020-01-01'),
    icon: 'bug',
    priority: 'P1',
    code: 'DCSS-700',
    // create user class to keep more info
    assignee: 'Dzmitry Holub',
    parentName: 'The best project',
  },
  {
    id: 6,
    name: 'Metadata Api request statuscode 403',
    dateCreated: new Date('2022-04-12'),
    icon: 'bug',
    priority: 'P1',
    code: 'DCSS-251',
    assignee: 'Dzmitry Holub',
    parentName: 'The best project',
  },
  {
    id: 7,
    name: 'Creating new UI documentation',
    dateCreated: new Date('2020-03-01'),
    icon: 'investigation',
    priority: 'P2',
    code: 'DCSS-710',
    assignee: 'Dzmitry Holub',
    parentName: 'The second project',
  },
  {
    id: 12,
    name: 'Cloning list issue',
    dateCreated: new Date('2022-04-12'),
    icon: 'bug',
    priority: 'P1',
    code: 'DCSS-251',
    assignee: 'Dzmitry Holub',
    parentName: 'The second project',
  },
];
const fullTicketInformation: any[] = [
  {
    id: 1,
    name: 'Refactoring CompletedList LIST',
    dateCreated: new Date('2020-01-01'),
    type: 'bug',
    priority: 'P1',
    code: 'DCSS-700',
    // create user class to keep more info
    assignee: 'Dzmitry Holub',
    parentName: 'The best project',
    description: "We have spotted since the release on the 13/03/2023 (approx. 17:35 UK time) that Shibboleth is importing student data and adding them to the DCS (Screenshot 1) which should not be doing at all as we should hold no student details (attached logs as a reference).  Furthermore it is also adding students as HEI users which means they would have access to the DCS as a HEI user which again should not happen (Screenshot 2).Can we please investigate why this has suddenly started urgently as this is a potential data breach and stop it and identify all the users created and look at a plan of how to remove them. Examples of HEI affected University of Manchester, Sheffield Hallam University, Staffordshire University"
  },
  {
    id: 2,
    name: 'Course page does not load properly',
    dateCreated: new Date('2023-01-03'),
    type: 'bug',
    priority: 'P1',
    code: 'DCSS-277',
    assignee: 'Bhavin Desai',
    description: "The University of Sussex have raised that they have generated a Born Digital Title for ISBN 9781138226203 however when they opened the request link in Firefox it is not displaying any of the titles details correctly (see attached screenshot). I have been able to replicate this in test with the following request 2410046 (https://test-dcs.cla.co.uk/ContentRequest/Details/2410046) and have also spotted that when you open the request in Chrome part of the title is not displayed correct (see attached screenshot). I have checked a couple of different Born Digital requests in Firefox and the text does appear correct so it seems like the issue is specific to this title.  Could we please have a look at why this Born Digital is not displaying correctly in the reader."
  },
  {
    id: 3,
    name: 'Adding save button to comletedRequest page not to confuse users',
    dateCreated: new Date('2021-10-05'),
    type: 'investigation',
    priority: 'P2',
    code: 'DCSS-233',
    assignee: 'Gleb Antonovich',
    description: "The University of Nottingham have raised that for request 2296374 (https://contentstore.cla.co.uk/ContentRequest/Details/2296374) when you click on the content request the PDF is not opening with the Kortext reader (Screenshot 1). I have replicated in test with the Kortext reader, the anonymous reader and with the standard reader with (https://test-dcs.cla.co.uk/ContentRequest/Details/2410047, Screenshot 2) and the document is not opening correctly in any reader.  This is only occurring with this document which suggests that there some issue with the PDF however when I downloaded the file I was unable to see any obvious issues. Could we please have a look at this file to see if we can spot any obvious issues which would prevent it from opening in the readers?"
  },
  {
    id: 4,
    name: 'Phishing vulnerability - Open Redirect configuration in Shiboleth SP',
    dateCreated: new Date('2019-01-16'),
    type: 'investigation',
    priority: 'P2',
    code: 'DCSS-256',
    assignee: 'Gleb Antonovich',
    description: "hi the following article has a page range of 0 and so when trying to create a request based on this article the invalid page range error is triggered and the request cannot be created."
  },
  {
    id: 5,
    name: 'Kortexst Reader stuck during loading in Crome',
    dateCreated: new Date('2022-07-11'),
    type: 'bug',
    priority: 'P2',
    code: 'DCSS-257',
    assignee: 'Bhavin Desai',
    description: "Hi A BD extract in production under request ID: 2432957 is appearing strangely in the Kortext reader despite appearing fine in preview. the following Video shows that once this extract is opened in the Kortext reader, the text is still selectable but unreadable.  So far testing indicates this is the only extract affected. however using the same extract under a different HEI results in the same issue. Could it be investigated to find why this extract is appearing this way."
  },
  {
    id: 6,
    name: 'Metadata Api request statuscode 403',
    dateCreated: new Date('2022-04-12'),
    type: 'bug',
    priority: 'P1',
    code: 'DCSS-251',
    assignee: 'Dzmitry Holub',
    parentName: 'The best project',
    description: "The Following Request is acting strangely, The generated link leads the user to the Kortext reader homepage rather than the extract itself unlike other titles."
  },
  {
    id: 7,
    name: 'Creating new UI documentation',
    dateCreated: new Date('2020-03-01'),
    type: 'investigation',
    priority: 'P2',
    code: 'DCSS-710',
    assignee: 'Dzmitry Holub',
    parentName: 'The second project',
    description: "hi  the following article has a page range of 0 and so when trying to create a request based on this article the invalid page range error is triggered and the request cannot be created."
  },
  {
    id: 9,
    name: 'Adding save button to comletedRequest page not to confuse users',
    dateCreated: new Date('2021-10-05'),
    type: 'investigation',
    priority: 'P2',
    code: 'DCSS-233',
    assignee: 'Gleb Antonovich',
    description: "Bug Description: Actual results Completed Requests Page content is not properly displayed. Data rows are displayed beyond the table area.Expected results Completed Requests Page content is properly displayed."
  },
  {
    id: 10,
    name: 'Wrong data for user name',
    dateCreated: new Date('2017-01-16'),
    type: 'bug',
    priority: 'P1',
    code: 'DCSS-257',
    assignee: 'Gleb Antonovich',
    description: "The HEI report know longer appears to be downloadable as a HEI user however it is downloadable as a CLA Admin (see attached video). This seems to only be affecting the production environment when testing in test the report appears to load correctly as a HEI user."
  },
  {
    id: 11,
    name: 'Kortexst Reader not appear for Oxford university',
    dateCreated: new Date('2022-07-11'),
    type: 'bug',
    priority: 'P2',
    code: 'DCSS-245',
    assignee: 'Bhavin Desai',
    description:"Actual results Completed Requests Page content is not properly displayed. Data rows are displayed beyond the table area.Expected results Completed Requests Page content is properly displayed."
  },
  {
    id: 12,
    name: 'Cloning list issue',
    dateCreated: new Date('2022-04-12'),
    type: 'bug',
    priority: 'P1',
    code: 'DCSS-251',
    assignee: 'Dzmitry Holub',
    parentName: 'The second project',
    description: "Actual results When you click on Request Change/Query CLA, the modal displayed is empty Note: Bug found while doing Exploratory Testing Expected results When you click on Request Change/Query CLA, the modal displays all relevant content. "
  }
];

const comments : any[] = [


]
