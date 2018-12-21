import * as React from "react";
import { withRouter } from "react-router-dom";
import { BottomNav } from "../components";
import { ProfileMenu } from "../components/layouts/profile-menu";
import { PageLoader } from "../components/loader";

interface IState {
    loading: boolean;
}

class Profile extends React.Component<{}, IState> {
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
                <h2 style={{ borderBottom: "1px solid #4a4a4a" }}>
                    My Profile
                </h2>
                <ProfileMenu />
                <BottomNav />
            </div>
        );
    }
}

export const ProfilePage = withRouter(Profile);
