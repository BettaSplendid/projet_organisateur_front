// This file contains functions which are too long to handle on the main pages.

const restrictions_template = [
    'milk',
    'meat',
    'gluten',
    'eggs',
    'fish',
    'nuts',
    'shellfish',
    'soy',
    'wheat',
    'tree_nuts',
    'peanuts',
    'sesame',
    'alcohol',
    'coconut',
    'sugar',
    'sulfites',
    'fruit',
    'garlic',
    'celery',
    'mustard',
    'poultry',
    'red_meat',
]


export function encode_diet_restrictions(data) {
    console.log("encode_diet_restrictions for storage");
    console.log(data);
    if (!Object.keys(data).length == 22) {
        console.log("Data is not 22 keys. Some may have been lost");
        return
    }
    // console.log(restrictions_template);
    var fake_binary = 0
    console.log('Encoding data to fake binary');
    for (let index = 0; index < 22; index++) {
        // console.log(restrictions_template[index]);
        let temp = restrictions_template[index];
        // console.log(data[temp]);
        if (data[temp] == true) {
            fake_binary = `${fake_binary}${1}`
        }
        else {
            fake_binary = `${fake_binary}${0}`

        }
    }
    fake_binary = fake_binary.slice(1);
    console.log(fake_binary);
}

export function decode_diet_restrictions(data) {
    try {
        // console.log('Decoding');
        // console.log({ data });
        var to_decode = data;
        to_decode = to_decode.split('');
        // console.log({ to_decode });
        var decoded = {};
        var answer = []
        for (let index = 0; index < 22; index++) {
            let temp = restrictions_template[index];
            if (to_decode[index] == 1) {
                decoded[temp] = true;
                answer.push(temp)
            }
            else {
                decoded[temp] = false;
            }
        }
        // console.log(decoded);
        // console.log(answer);

        return answer;

    } catch (error) {
        console.log(error);
    }
}

export function decode_and_present_restrictions(arg) {
    var decoded = decode_diet_restrictions(arg)
    var bababa = ""
    decoded.forEach(element => {
        // console.log(element);
        // console.log(capitalizeFirstLetter(element));
        element = (capitalizeFirstLetter(element))
        bababa += element + ", "
    });
    // console.log(decoded);
    return bababa
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}









// var diet_restrictions = {
//     1: 'Milk',
//     2: 'Meat',
//     3: 'Gluten',
//     4: 'Eggs',
//     5: 'Fish',
//     6: 'Nuts',
//     7: 'Shellfish',
//     8: 'Soy',
//     9: 'Wheat',
//     10: 'Tree Nuts',
//     11: 'Peanuts',
//     12: 'Sesame',
//     13: 'Alcohol',
//     14: 'Coconut',
//     15: 'Sugar',
//     16: 'Sulfites',
//     17: 'fruit',
//     18: 'Garlic',
//     19: 'Celery',
//     20: 'Mustard',
//     21: 'Peanut',
//     22: 'Poultry',
//     23: 'Red meat',
//     24: 'Other'
// }