import { INewsData, ISourcesData } from '../additional';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {

    public controller: AppController;
    public view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        (document
            .querySelector('.sources') as HTMLElement)
            .addEventListener('click', (e: Event) => this.controller.getNews(e, (data: INewsData) => this.view.drawNews(data)));
        this.controller.getSources((data: ISourcesData) => this.view.drawSources(data));
    }
}

export default App;
