import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@api/mock-api.service';
import { cloneDeep } from 'lodash-es';
import { suggestions } from './data';
import { Suggestion } from 'app/pages/suggestion-detail/suggestion.interface';

@Injectable({ providedIn: 'root' })
export class GetSuggestionsMockApi {
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
        
        /**
         * Get all suggestions
         */
        this._fuseMockApiService
            .onGet('api/suggestions')
            .reply(() => {
                // Clone the suggestions
                const suggestions = cloneDeep(this._suggestions);

                return [200, suggestions];
        });

        /**
         * Get suggestion detail
         */
        this._fuseMockApiService
        .onGet('api/suggestions/suggestion')
        .reply(({request}) => {
            const id = request.params.get('id');
            // Clone the suggestions
            const suggestions = cloneDeep(this._suggestions);
            
            const suggestionSelected = suggestions.filter((element: Suggestion) => {
                return element.id === Number(id);
            });

            return [200, suggestionSelected];
        });

    }
}
