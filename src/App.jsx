import { Provider } from "react-redux";
import { Catalog } from "./components/Catalog/Catalog";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { store } from "./Store";

export const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <main>
                <Navigation />
                <Catalog />
            </main>
        </Provider>
    );
};
