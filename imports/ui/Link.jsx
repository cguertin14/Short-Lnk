import React from 'react';
import { withRouter } from 'react-router';

// My Code
import { Links } from './../api/links';
import LinksList from './LinksList';
import AddLink from './AddLink';
import PrivateHeader from './PrivateHeader';
import LinksListFilter from './LinksListFilter';

export default withRouter(() => {
    return (
        <div>
            <PrivateHeader title="Your Links" />
            <LinksListFilter />
            <LinksList />
            <AddLink />
        </div>
    );
});