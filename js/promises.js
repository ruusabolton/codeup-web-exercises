// 1. Write a function named wait that accepts a number as a parameter,
//     and returns a promise that resolves after the passed number of milliseconds.


/////////create fx called wait that accepts a number
const wait= num => {
    return new Promise((resolve, reject)=> { /////////returns a promise that resolves after the passed # of ms.
            setTimeout(()=> {
                resolve()
                }, num);
                    });
                    };

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// 2. Create a function that accepts a github username, and returns a promise
// that resolves with the date of the last commit that user made.

//Important parameters necessary to execute the function
const username = `ruusabolton`;//define the username you are targetting in GH
const url = `https://api.github.com/users/${username}/events/public`;//URL of GH API
const token = "e2b0f460d867ba93b38a8c4fa575aaff96c7b629";//your GitHub token

//declare a function that
// 1. fetches the data for a specific username using url, username and auth token,
// 2. GH returns unfiltered data pertaining to username's entire GH profile in json format,
// 3. rename data to events - filter function so we can reduce it to collect onnly PushEvents,
// 4. console log the date of latest PushEvent at index position [0], which will be the most current
// 5. add error-catcher in case something goes wrong with the function execution
//lastly, call the function, so you can see the data

const getLastEvent = ((username)=> {
    fetch(url, {headers: {"Authorization": `token ${token}`}})
        .then(data => data.json())
        .then(events=>events.filter(event => event.type === "PushEvent"))
        .then(events => {
            console.log("Date of last event: " + events[0].created_at)
        })
        .catch(error => console.error("Something went wrong!!  " + error));
});
getLastEvent(username);


