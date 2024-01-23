import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { APP_INITIALIZER, EnvironmentProviders, Provider } from "@angular/core";
import { FUSE_MOCK_API_DEFAULT_DELAY } from "@api/mock-api.constants";
import { mockApiInterceptor } from "@api/mock-api.interceptor";

export type ProviderConfig = {
    mockApi?: {
        delay?: number;
        services?: any[];

}};

export const provideEnrica = (
    config: ProviderConfig
): Array<Provider | EnvironmentProviders> => {
    const providers: Array<Provider | EnvironmentProviders> = [
        {
            provide: FUSE_MOCK_API_DEFAULT_DELAY,
            useValue: config?.mockApi?.delay??0,
        }
    ];
    if (config?.mockApi?.services) {
        providers.push(
            provideHttpClient(withInterceptors([mockApiInterceptor])),
            {
                provide: APP_INITIALIZER,
                deps: [...config.mockApi.services],
                useFactory: () => (): any => null,
                multi: true,
            }
        );
    };
    return providers
}