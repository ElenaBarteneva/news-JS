import { IOptions, ResponseStatus, Methods, TMethod, TCallback } from '../additional'

class Loader {

    private baseLink: string;
    private options:  IOptions;



    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: {endpoint: string, options?: IOptions},
        callback: TCallback = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load(Methods.GET, endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === ResponseStatus.Unauthorized || res.status === ResponseStatus.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: IOptions, endpoint: string): string {
        const urlOptions: IOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof object]}&`;
        });

        return url.slice(0, -1);
    }

    protected load(method: TMethod, endpoint: string, callback: TCallback, options: IOptions = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
