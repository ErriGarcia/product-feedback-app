import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@api/mock-api.service';
import { suggestions } from './data';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class AcademyMockApi
{
    private _suggestions: any[] = suggestions;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/suggestions')
            .reply(() =>
            {
                // Clone the categories
                const suggestions = cloneDeep(this._suggestions);

                return [200, suggestions];
            });
        }
}
