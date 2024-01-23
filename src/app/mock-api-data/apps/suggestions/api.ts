import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@api/mock-api.service';
import { suggestions } from './data';
import { cloneDeep } from 'lodash-es';
import { assign } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class SuggestionsMockApi {
    private _suggestions: any[] = suggestions;

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
            .onGet('api/suggestions')
            .reply(() => {
                // Clone the categories
                const suggestions = cloneDeep(this._suggestions);

                return [200, suggestions];
        });

        this._fuseMockApiService
            .onPatch('api/suggestions')
            .reply(({ request }) => {
                // Get the id and chat
                const id = request.body.id;
                const suggestion = cloneDeep(request.body.suggestion);

                // Prepare the updated chat
                let updatedSuggestion = null;

                // Find the chat and update it
                this._suggestions.forEach((item, index, suggestions) => {
                    if (item.id === id) {
                        debugger
                        // Update the chat
                        suggestions[index] = assign({}, suggestions[index], suggestion);

                        // Store the updated chat
                        updatedSuggestion = suggestions[index];
                    }
                });

            // Return the response
            return [200, updatedSuggestion];
        });

            this._fuseMockApiService
            .onGet('api/suggestions/suggestion')
            .reply(({request}) => {

                const id = request.params.get('id');
                // Clone the categories
                const suggestions = cloneDeep(this._suggestions);
                console.log(suggestions, 'suggestions');
                
                const suggestion = suggestions.filter(element => element.id === Number(id));

                return [200, suggestion];
            });

    }
}
