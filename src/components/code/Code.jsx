import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Code({ code, language }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div className="Code hd__codes">
            <pre>
                <code className={`language-javascript`}>{code}</code>
            </pre>
        </div>
    );
}
