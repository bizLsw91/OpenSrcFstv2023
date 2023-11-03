import React from 'react';
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle} || 공개SW 페스티벌 2023 </title>
                <meta name="robots" content="noindex, follow" />
                <meta name="description" content="open_src_fstv2023 - Consulting React Template" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Helmet>
        </>
    );
};

export default PageHelmet;