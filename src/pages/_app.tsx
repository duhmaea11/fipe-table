import React from "react";
import store from "@/store";
import { AppProps } from "next/app";
import theme from "@/styles/ts/theme";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import GlobalStyle from "@/styles/ts/global";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
