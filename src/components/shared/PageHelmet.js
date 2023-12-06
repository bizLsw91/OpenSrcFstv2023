import React from 'react';
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle, index, noindex, follow, nofollow }) => {
    const i = index ? 'index' : (noindex === undefined || noindex ? 'noindex' : 'index' )
    const f = follow ? 'follow' : (nofollow === undefined || nofollow ? 'nofollow' : 'follow' )

    return (
        <>
            <Helmet>
                <title>{pageTitle ? pageTitle+' || ' : ''}공개SW 페스티벌 2023 </title>
                <meta name="robots" content={`${i}, ${f}`} />
            </Helmet>
        </>
    );
};

export default PageHelmet;