import * as React from "react";
import styles from "./TestComponent.css";

export class TestComponent extends React.Component {
    public render() {
        return <div style={styles.redBg}>test</div>;
    }
}
