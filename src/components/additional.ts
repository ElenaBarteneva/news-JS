interface IOptions {
    apiKey?: string;
    sources?: string;
}

enum ResponseStatus {
    Unauthorized = 401,
    NotFound  = 404
}

enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

interface INews<T> {
    source: {
        id: number;
        name: T;
    };
    author: T;
    title: T;
    description: T;
    url: T;
    urlToImage: T;
    publishedAt: T;
    content: T;
}

interface ISources<T> {
    category: T;
    country: T;
    description: T;
    id: T;
    language: T;
    name: T;
    url: T;
}

interface INewsData {
    articles?: ReadonlyArray<INews<string>>;
}

interface ISourcesData {
    sources?: ReadonlyArray<ISources<string>>;
}

type TMethod = Methods.GET | Methods.POST | Methods.PUT | Methods.DELETE

// type TCallback = (data: INewsData | ISourcesData) => void;
type TCallback<T> = (data: T) => void;


export {IOptions, ResponseStatus, Methods, TCallback, TMethod, ISourcesData, INews, ISources, INewsData}