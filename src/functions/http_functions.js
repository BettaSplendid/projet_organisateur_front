

// Here are the HTTP requests

export function send_event_server(received_event) {
    console.log("send_event_server");
    console.log({received_event});
    // console.log(typeof received_event);
    var event_to_process = received_event;
    for (let index = 0; index < Object.keys(event_to_process).length; index++) {
        // console.log(Object.keys(event_to_process)[index] + ' : ' + event_to_process[Object.keys(event_to_process)[index]]);
        event_to_process[Object.keys(event_to_process)[index]] = event_to_process[Object.keys(event_to_process)[index]].trim();
        event_to_process[Object.keys(event_to_process)[index]] = event_to_process[Object.keys(event_to_process)[index]].toString();
    }
    console.log({event_to_process});
    console.log('sending the event to the server');
    
    // let response = fetch("http://localhost:3002" + '/event/create', {
    //     method: 'POST',

    // })
    //     .then()
    //     .catch();
    // console.log(response);
}