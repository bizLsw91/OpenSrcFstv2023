import React from 'react';
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle ? pageTitle+' || ' : ''}공개SW 페스티벌 2023 </title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="오픈소스로 바꾸는 세상 OpenSource 2023 공개SW페스티벌" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Helmet>
        </>
    );
};

export default PageHelmet;