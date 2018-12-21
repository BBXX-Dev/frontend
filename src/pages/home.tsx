import * as React from "react";
import { withRouter } from "react-router-dom";
import { BottomNav, HomepageLayout } from "../components";
import { PageLoader } from "../components/loader";

interface IState {
    loading: boolean;
}

class Home extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    public componentDidMount() {
        this.setState({
            loading: false
        });
    }

    public render() {
        return this.state.loading ? (
            <PageLoader />
        ) : (
            <div>
                <HomepageLayout />
                <BottomNav />
            </div>
        );
    }
}

export const HomePage = withRouter(Home);
