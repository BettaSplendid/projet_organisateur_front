

import { useUserStore } from "../stores/user";
const user_store = useUserStore()

import { useEventsStore } from "../stores/events";
const events_store = useEventsStore()


import { useRouter } from "vue-router";

const router = useRouter();

// Here are the HTTP requests




// This function sends an event to be registered.
export async function send_event_server(received_event) {
    console.log("send_event_server");
    console.log({ received_event });
    var event_to_process = received_event;
    for (let index = 0; index < Object.keys(event_to_process).length; index++) {
        event_to_process[Object.keys(event_to_process)[index]] = event_to_process[Object.keys(event_to_process)[index]].toString();
        event_to_process[Object.keys(event_to_process)[index]] = event_to_process[Object.keys(event_to_process)[index]].trim();
    }

    let response = await fetch("http://localhost:3002" + '/event/create', {
        method: 'POST',
        body: JSON.stringify(event_to_process),
        headers: {
            'Content-Type': 'application/json'
        },

    })
        .then(response => response.json())
        .catch();
    if (response.status !== 201) {
        console.log("Error: " + response.status);
        return false;
    }
    get_events_server()
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
        return response
    } catch (error) {
        console.log(error);
    }
}

export async function get_event_guests(event_id) {
    console.log('Get user data');
    try {
        if (!user_store.token || !user_store.refresh_token) {
            console.log('No user data was provided.')
            return 'error'
        }
        console.log(event_id);
        if (!event_id) {
            console.log('No event was provided');
            return 'error'
        }

        var data = {
            token: user_store.token,
            refresh_token: user_store.refresh_token,
            event: event_id
        }
        console.log(data);
        let response = await fetch("http://localhost:3002" + '/guest/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })

            .then(response => response.json())
            .catch();
        // router.push("/dashboard");
        console.log(response);
        return response

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
        var response_message = ""

        if (!received_user.identifier || !received_user.password) {
            console.log("All the fields have to be filled");
            response_message = "All the fields have to be filled"
            return response_message;
        }

        if (typeof received_user.identifier !== 'string' || typeof received_user.password !== 'string') {
            response_message = "Incorrect data type. Please send only text."
            return response_message;
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
            .then()
            .catch();

        console.log(response);

        if (response.status != 200) {
            response_message = `An error has occured: ${response.status}`;
            console.log(response_message);
            return response_message;
        }

        var received_data = await response.json()

        console.log(received_data)
        console.log(received_data.user.email)



        user_store.token = received_data.token
        user_store.refresh_token = received_data.refresh_token
        user_store.id = received_data.user.id
        user_store.email = received_data.user.email
        user_store.name = received_data.user.name
        user_store.first_name = received_data.user.first_name
        user_store.city = received_data.user.city
        user_store.country = received_data.user.country

        events_store.events = received_data.events

        get_events_server()

        // console.log(received_data);

        return received_data;
    } catch (error) {
        console.log('Unexpected error' + error);
        return error
    }
}

//create a guest to an existing event
export async function create_guest(event_id, guest_data) {
    console.log('Create guest');
    try {
        const data = {
            event: event_id,
            guest: guest_data,
            user_id: user_store.id
        }
        console.log({data});
        // console.log(data.guest.event_id);

        var response = await fetch("http://localhost:3002" + '/guest', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then()
            .catch();
    } catch (error) {
        console.log(error);
    }
}