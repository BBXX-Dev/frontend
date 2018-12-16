import * as React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

export const PageLoader = () => {
    return (
        <Segment>
            <Dimmer active>
                <Loader />
            </Dimmer>
        </Segment>
    );
};
