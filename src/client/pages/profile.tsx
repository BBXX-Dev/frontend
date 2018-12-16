import * as React from "react";
import { PageLoader } from "../components/loader";
import { ProfileMenu } from "../components/layouts/profile-menu";

interface IState {
    loading: boolean;
}

class ProfilePage extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        this.setState({
            loading: false,
        });
    }

    render() {
        return this.state.loading ? (
            <PageLoader />
        ) : (
            <div>
                <h2 style={{ borderBottom: "1px solid #4a4a4a" }}>My Profile</h2>
                <ProfileMenu />
            </div>
        );
    }
}

export { ProfilePage };
