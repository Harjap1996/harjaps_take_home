import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/app.css";

export default function App<P>({
    Component,
    pageProps,
}: {
    Component: React.ComponentType<P>;
    pageProps: P;
}) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
