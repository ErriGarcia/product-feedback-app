import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { cloneDeep } from 'lodash-es';
import * as moment from 'moment';
import { FuseMockApiUtils } from '../../../../@fuse/lib/mock-api/mock-api.utils';
import { eventList, events, members } from './data';

@Injectable({
    providedIn: 'root'
})
export class ProjectInvitationMockApi {
    private _events: any[] = events;
    private _eventsList: any[] = eventList;
    private _members: any[] = members;


    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------

        this._fuseMockApiService
            .onGet('api/apps/events/eventsList')
            .reply(({ request }) => {

                // Clone the boards
                let events = cloneDeep(this._eventsList);

                events = events.map(event => ({
                    ...event,
                    members: event.members.map(boardMember => this._members.find(member => boardMember === member.id))
                }));

                return [
                    200,
                    events
                ];
            });

        this._fuseMockApiService
            .onGet('api/apps/events/all')
            .reply(() => {

                // Clone the categories
                const events = cloneDeep(this._events);

                return [200, events];
            });


        this._fuseMockApiService
            .onGet('api/apps/events/id')
            .reply(({ request }) => {

                // Clone the categories
                const events = cloneDeep(this._events);

                // Get the chat id
                const id = request.params.get('id');


                const eventFiltered = events.filter(event => event.id === id)
                return [200, eventFiltered];
            });

        this._fuseMockApiService
            .onPost('api/apps/events/save')
            .reply(({ request }) => {


                const type = request.body['type'];
                const form = request.body['form'];

                if (type === 'create') {
                    const createId = FuseMockApiUtils.guid()
                    const newProject = {
                        id: createId,
                        title: form.infoEvent.title || 'Sin titulo',
                        description: 'Roadmap for the new project',
                        icon: 'heroicons_outline:template',
                        lastActivity: moment().startOf('day').subtract(1, 'day').toISOString(),
                        members: [
                            '9c510cf3-460d-4a8c-b3be-bcc3db578c08',
                            'baa88231-0ee6-4028-96d5-7f187e0f4cd5',
                            '18bb18f3-ea7d-4465-8913-e8c9adf6f568'
                        ]
                    }

                    const newProjectList = {
                        id: createId,
                        icon: 'heroicons_outline:template',
                        status: 1,
                        infoEvent: {
                            title: form.infoEvent.title || 'Sin titulo',
                            description: form.infoEvent.description,
                            eventType: form.infoEvent.eventType,
                            date: new Date(),
                            name1: form.infoEvent.name1,
                            name2: form.infoEvent.name2,
                            counter: form.infoEvent.counter,
                            notifications: form.infoEvent.notifications
                        },
                        panels: form.panels
                    }

                    this._eventsList.push(newProject)
                    this._events.push(newProjectList)
                    return [200, this._events[this._events.length - 1]];
                }


                const eventIdx = this._events.findIndex(e => e.id === form.id)
                this._events[eventIdx] = form

                //const eventFiltered = events.filter(event => event.id === id)
                return [200, this._events[eventIdx]];
            });

    }
}
