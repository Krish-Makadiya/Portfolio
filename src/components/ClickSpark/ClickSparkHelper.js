import React from "react";
import ClickSpark from "./ClickSpark";

const ClickSparkHelper = ({children}) => {
    return (
        <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}>
            {children}
        </ClickSpark>
    );
};

export default ClickSparkHelper;
