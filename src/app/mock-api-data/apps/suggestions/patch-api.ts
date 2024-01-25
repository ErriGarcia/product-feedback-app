import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@api/mock-api.service';
import { suggestions } from './data';
import { cloneDeep } from 'lodash-es';
import { assign } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class PatchSuggestionsMockApi {
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
        // @ Categories - PATCH
        // -----------------------------------------------------------------------------------------------------

        /**
         * Edit suggestion
         */
        this._fuseMockApiService
            .onPatch('api/suggestions')
            .reply(({ request }) => {
                // Get the id and suggestion
                const id = request.body.id;
                const suggestion = cloneDeep(request.body.suggestion);

                // Prepare the updated suggestion
                let updatedSuggestion = null;

                // Find the suggestion and update it
                this._suggestions.forEach((item, index, suggestions) => {
                    if (item.id === id) {
                        debugger
                        // Update the suggestion
                        suggestions[index] = assign({}, suggestions[index], suggestion);

                        // Store the suggestion chat
                        updatedSuggestion = suggestions[index];
                    }
                });

            // Return the response
            return [200, updatedSuggestion];
        });

    }
}
