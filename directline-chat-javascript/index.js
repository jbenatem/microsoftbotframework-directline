function CloseChat() {
    document.getElementById("chatbox").style.display = "none";
    document.getElementById("chatbutton").style.display = "flex";
}

function OpenChat() {
    document.getElementById("chatbutton").style.display = "none";
    document.getElementById("chatbox").style.display = "block";

    // Get welcome message
    // We are using a customized store to add hooks to connect event
    const store = window.WebChat.createStore({}, ({ dispatch }) => next => action => {
        //console.log(action);
        if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
            dispatch({
                type: 'WEB_CHAT/SEND_EVENT',
                payload: {
                    name: 'webchat/join',
                    value: { language: window.navigator.language }
                }
            });
        }

        return next(action);
    });
    
    window.WebChat.renderWebChat(
        {
            directLine: window.WebChat.createDirectLine({
            token: 'uzEqtToqsAY.jFKlI0ltLDzLjq0Kj_lD2YPTDempUQdxriJ7g3GWB-g'
        }),
        store,
        },
        document.getElementById('chatbody')
    );
}