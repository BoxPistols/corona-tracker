import { Header } from "../components/Header";
import { Results } from "../components/Results";
import { Selector } from "../components/Selector";
import { Title } from "../components/Title";

export const Top = () => {
    return (
        <div className="Top">
            <h1>Top</h1>
            <Header/>
            <Title/>
            <Selector/>
            <Results/>
        </div>
    );
};
