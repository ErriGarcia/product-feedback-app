import { DeleteSuggestionsMockApi } from './apps/suggestions/delete-api';
import { GetSuggestionsMockApi } from './apps/suggestions/get-api';
import { PatchSuggestionsMockApi } from './apps/suggestions/patch-api';
import { PostSuggestionsMockApi } from './apps/suggestions/post-api';

export const mockApiServices = [
    GetSuggestionsMockApi,
    PostSuggestionsMockApi,
    PatchSuggestionsMockApi,
    DeleteSuggestionsMockApi
];
