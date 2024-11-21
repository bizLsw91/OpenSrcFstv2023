import React from 'react';
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle, index, noindex, follow, nofollow }) => {
    const i = index ? 'index' : (noindex === undefined || noindex ? 'noindex' : 'index' )
    const f = follow ? 'follow' : (nofollow === undefined || nofollow ? 'nofollow' : 'follow' )

    return (
        <>
            <Helmet>
                <title>{pageTitle ? pageTitle+' || ' : ''}오픈소스 페스티벌</title>
                <meta name="robots" content={`${i}, ${f}`} />
            </Helmet>
        </>
    );
};

export default PageHelmet;