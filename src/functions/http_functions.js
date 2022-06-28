

import { useUserStore } from "../stores/user";
const user_store = useUserStore()

import { useEventsStore } from "../stores/events";
const events_store = useEventsStore()

// Here are the HTTP requests




// This function sends an event to be registered.
export async function send_event_server(received_event) {
    console.log("send_event_server");
    console.log({ received_event });
    // console.log(typeof received_event);
    var event_to_process = received_event;
    for (let index = 0; index < Object.keys(event_to_process).length; index++) {
        // console.log(Object.keys(event_to_process)[index] + ' : ' + event_to_process[Object.keys(event_to_process)[index]]);
        event_to_process[Object.keys(event_to_process)[index]] = event_to_process[Object.keys(event_to_process)[index]].trim();
        event_to_process[Object.keys(event_to_process)[index]] = event_to_process[Object.keys(event_to_process)[index]].toString();
    }
    console.log({ event_to_process });
    console.log('sending the event to the server');

    // let response = await fetch("http://localhost:3002" + '/event/create', {
    //     method: 'POST',

    // })
    //     .then()
    //     .catch();
    // console.log(response);
}

// This function sends a request to the server to get the events.
export async function get_events_server() {
    try {
        console.log("requesting events for user from servers");
        // if (r_token == null || refresh_token == null) {
        //     console.log("user_data.token is null");
        //     return;
        // }
        // // We only verify that we are sending a token. The validation of those credentials is in the back end. 
        // // We can't do it here.

        var data = {
            token: user_store.token,
            refresh_token: user_store.refresh_token
        };


        console.log('sending the request to the server');
        console.log({ data });
        let response = await fetch("http://localhost:3002" + '/event/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            // body: user_store.token
        })
            .then(response => response.json())
            .catch();
        console.log(response);
        events_store.events = response;

    } catch (error) {
        return error;
    }
}

// This function attempts to register the user
export async function register_user(received_user) {

    try {

        console.log("register_user");
        console.log({ received_user });
        console.log("Verifying user data");


        if (!received_user.email || !received_user.password || !received_user.country) {
            console.log("All the fields have to be filled");
            return false;
        }

        if (received_user.email < 5) {
            console.log("Email is too short");
            return false;
        }
        if (!received_user.email.includes("@")) {
            console.log("Email is not valid");
            return false;
        }

        if (received_user.password < 3) {
            console.log("Password is too short");
            return false;
        }
        if (!received_user.country) {
            console.log("Country is required");
            return false;
        }
        console.log("User is valid");
        console.log('sending the request to the server');
        let response = await fetch("http://localhost:3002" + '/register', {
            method: 'POST',
            body: JSON.stringify(received_user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .catch();
        // If it is a success, we need to inform the parent function, so we can put a lil display thing.
        console.log(response);
        // console.log(response.status);


        // console.log(response.token);
        // console.log(response.refresh_token);
        // console.log(response.result)

        user_store.token = response.token
        user_store.refresh_token = response.refresh_token

        // console.log(response.result.email);

        user_store.id = response.result.id
        user_store.email = response.result.email
        user_store.country = response.result.country;
        user_store.name = response.result.name;
        user_store.first_name = response.result.first_name;
        user_store.city = response.result.city;
        user_store.country = response.result.country;


        // get_user_data(user_store.token, user_store.refresh_token);

    } catch (error) {
        return error;
    }
}

export async function get_user_data(token, refresh_token) {
    console.log("get_user_data");
    try {
        if (!token || !refresh_token) {
            console.log('No user data was provided.')
            return 'error'
        }
        let response = await fetch("http://localhost:3002" + '/user', {
            method: 'POST',
            body: token, refresh_token
        })
        // .then(response => response.json())
        // .catch();


    } catch (error) {
        console.log(error);
    }
}

export async function login_user(received_user) {


    try {
        console.log("login_user");
        console.log({ received_user });
        console.log("Verifying user data");

        // This is to allow signing up with mail or username
        var mail_or_username = null;

        if (!received_user.identifier || !received_user.password) {
            console.log("All the fields have to be filled");
            return false;
        }
        if (received_user.identifier.includes("@")) {
            mail_or_username = "email";
        } else {
            mail_or_username = "username";
        }

        var data_to_send = {}

        if (mail_or_username == "email") {
            data_to_send = {
                email: received_user.identifier,
                password: received_user.password
            }
        } else {
            data_to_send = {
                username: received_user.identifier,
                password: received_user.password
            }
        }

        console.log({ data_to_send });
        var response = await fetch("http://localhost:3002" + '/login', {
            method: 'POST',
            body: JSON.stringify(data_to_send),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .catch();

        if (!response == 200) {
            console.log('error');
            const message = `An error has occured: ${response.status}`;
            return message;
        }

        console.log(response.user)
        console.log(response.user.email)



        user_store.token = response.token
        user_store.refresh_token = response.refresh_token
        user_store.id = response.user.id
        user_store.email = response.user.email
        user_store.name = response.user.name
        user_store.first_name = response.user.first_name
        user_store.city = response.user.city
        user_store.country = response.user.country

        events_store.events = response.events


        // console.log(response);
        // get_events_server()

        return response;
    } catch (error) {
        console.log('Unexpected error' + error);
        return error
    }
}