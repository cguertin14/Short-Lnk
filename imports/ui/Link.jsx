import React from 'react';
import { withRouter } from 'react-router';

// My Code
import LinksList from './LinksList';
import AddLink from './AddLink';
import PrivateHeader from './PrivateHeader';
import LinksListFilter from './LinksListFilter';

export default withRouter(() => {
    return (
        <div> 
            <PrivateHeader title="Short Lnk" />
            <div className="page-content">
                <LinksListFilter />
                <AddLink />
                <LinksList />
            </div>
        </div>
    );
});