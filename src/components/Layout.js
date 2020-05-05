import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getPostMetadatas} from '../redux/actions/posts';
import Header from './Header';

const Layout = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostMetadatas());
    }, [dispatch]);

    return (
        <div className={'layout'}>
            <Header />
            <div className={'content'}>
                <div className={'container'}>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
