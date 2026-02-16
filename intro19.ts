/* 1.Register a new APISource with the CSSContainerRule
2.Swap the implementation of the RSSFeedSource to APISource without changing the NewsAggregator code
3.Write a test that injects a mock source to verify the aggregator's behavior . */

interface NewsSource{
    loadNews(): Promise<string[]>;
}

class RSSFeedSource implements NewsSource{
    async loadNews(): Promise<string[]>{
        //Simulate fetching news from an Rss feed
        return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(["News from A ", "News from B","News from C"]);
            }, 1000);
        });
    }
}

//Adding APISource that implements the NewsSource interface
class APISource implements NewsSource{
    async loadNews(): Promise<string[]>{
        //Simulate fetching news from an API
        return new Promise((resolve)=> {
            setTimeout(()=> {
                resolve(["News from API A", "News from API B", "News from API C"]);
            },1000);
        });
    }
}

//Simple container to register and resoove dependencies
class Container{
    private static services= new Map<string, any>();

    static register(key: string, instance: any){
        this.services.set(key, instance);
    }
    static resolve<T>(key: string): T{
        const service = this .services.get(key);
        if(service === undefined){
            throw new Error(`Service ${key} not found`);
        }
        return service as T;
    }
}

class NewsAggregator{
    constructor(private source: NewsSource){}
    async getNews(){
        const news = await this.source.loadNews();
        console.log("Aggregated News: ",news);
        return news;
    }
}

Container.register("NewsSource", new APISource());
const agg1= new NewsAggregator(Container.resolve<NewsSource>("NewsSource"));
agg1.getNews();

Container.register("NewsSource",new RSSFeedSource());
const agg2 =new NewsAggregator(Container.resolve <NewsSource>("NewsSource"));
agg2.getNews();

