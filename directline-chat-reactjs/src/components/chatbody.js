import React, {useMemo} from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

export default () => {
    const directLine = useMemo(() => createDirectLine({ token: 'DIRECT_LINE_SECRET' }), []);
    return (
        <div className="chatbody">
            <ReactWebChat directLine={directLine}/>
        </div>
    );
};