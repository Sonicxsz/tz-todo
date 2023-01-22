import './title.css'
import cn from 'classnames'
export const Title = ({title, completed}: {title:string, completed?:boolean}) => {

    return (
        <h2 className={cn('title', {'title-completed': completed})}>{title}</h2>
    )
}