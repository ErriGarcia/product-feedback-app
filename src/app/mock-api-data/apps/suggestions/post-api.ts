import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@api/mock-api.service';
import { cloneDeep } from 'lodash-es';
import { suggestions } from './data';

@Injectable({ providedIn: 'root' })
export class PostSuggestionsMockApi {
    private _suggestions: any[] = suggestions;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Categories - POST
        // -----------------------------------------------------------------------------------------------------
        
        /**
         * Get all suggestions
         */
        this._fuseMockApiService
            .onPost('api/suggestions/suggestion/create')
            .reply(({ request }) => {
                debugger
                // Clone the suggestions
                const suggestions = cloneDeep(this._suggestions);

                return [200, suggestions];
        });

    }
}
