import * as React from "react";
import { withRouter } from "react-router-dom";
import { BottomNav } from "../components/";
import { PageLoader } from "../components/loader";

interface IState {
    loading: boolean;
}

class Explore extends React.Component<{}, IState> {
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
                "Hello Explore Page!"
                <BottomNav />
            </div>
        );
    }
}

export const ExplorePage = withRouter(Explore);
