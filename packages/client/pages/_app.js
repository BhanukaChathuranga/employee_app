import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';

import {  wrapper } from 'src/store/store';
import { NavBar } from '@components';
import { theme } from '@utils';

export default function App({ Component, ...rest }) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

    return <>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NavBar title={'Employee Manager'} />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    </>
}

