import React, {useMemo} from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

export default () => {
    const directLine = useMemo(() => createDirectLine({ token: 'YOUR_DIRECT_LINE_TOKEN' }), []);
    return (
        <div className="chatbody">
            <ReactWebChat directLine={directLine}/>
        </div>
    );
};