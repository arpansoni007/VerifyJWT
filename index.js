"use strict";

const baseUrl = 'http://localhost:8000';

const url =  baseUrl+'/jwt/verify';

const atob =require('atob');


module.exports = {

    /* -------------------------- Handle Incoming Token ------------------------- */

    handleToken(token) {
        this.setToken(token);
    },

    /* --------------------------- Set Incoming TOken --------------------------- */

    setToken(token) {

        localStorage.setItem('token', token);
    },

    /* --------------------------- Get Incoming Token --------------------------- */

    getToken() {
        return localStorage.getItem('token');
    },

    /* ------------------------------ Remove Token ------------------------------ */

    removeToken() {
        localStorage.removeItem('token');

    },

    /* ------------------------- Check if Token is Valid ------------------------ */


    isValidToken() {

        const token = this.getToken();
        if (token) {
            const payload = token.split('.')[1];
                if (payload) {
                    let payloadItem = null;
                    try{
                       payloadItem = JSON.parse(atob(payload));
                    }
                    catch(err) {
                        return false;
                    }
                    return payloadItem.iss === url ? true : false;
                }
               
        }

        return false;
    }
}