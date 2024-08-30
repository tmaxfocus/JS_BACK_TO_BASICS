import * as styleModule from './styleModule.js';





function Article({headline, authorName,bodyText}){

    return (
        <div>
            <h2 style={styleModule.headline}>{headline}</h2>
            <div style={styleModule.authorName}>by: {authorName}</div>
            <div style={styleModule.bodyText}>{bodyText}</div>
        </div>
    )
}

export default Article;