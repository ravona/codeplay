"use strict";

/*
* Given a valid (IPv4) IP address, return a defanged version of that IP address.
* A defanged IP address replaces every period "." with "[.]".
*/

// https://leetcode.com/problems/defanging-an-ip-address/
let address = "192.168.1.1";

function formatIpAdress1(address) {
    return address.replace(/\./g, '[.]');
}

console.log(formatIpAdress1(address));


function formatIpAdress2(address) {
    return address.split('.').join('[.]');
}

console.log(formatIpAdress2(address));