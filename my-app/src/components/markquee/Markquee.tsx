import cn from 'classnames';
import Marquee from "react-fast-marquee";
import { useQuery } from 'react-query';
import './markquee.css'
import { useContext } from 'react';
import { TodoContext } from '../../context';
import { NewsService } from '../../services/news.service';




export const Markquee = () => {
    const {showMarquee} = useContext(TodoContext)
    const {isLoading, data, isError} = useQuery('news data', () =>{
        return NewsService.getAllNews()
    })
    const articles = data?.data.articles
    
    if(isLoading){
        return <div className={cn('markquee-wrapper', {'markquee-wrapper-hidden': !showMarquee})}><p>'Loading ...'</p></div>
    }
    if(isError){
        return <div className={cn('markquee-wrapper', {'markquee-wrapper-hidden': !showMarquee})}><p>'Somethink wrong!'</p></div>
    }

    return (
        <div className={cn('markquee-wrapper', {'markquee-wrapper-hidden': !showMarquee})}>
                <Marquee gradient={false} speed={40}>
                    {articles.map((i:any) => {
                        return <p key={i.url}>{i.content}</p>
                    })}
                </Marquee>
        </div>
    )

}