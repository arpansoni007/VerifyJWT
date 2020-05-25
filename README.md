# Tymon Verify-JWT Token 
This package will verify the authenticity of JWT in Client Side with issuer and inspired by Tymon/JWT Package.

## Installation
    npm i aks-verify-jwt --save
    

## Usage

    #Set the token in localstorage
    const VerifyJWT = require('../index');
    VerifyJWT.handleToken(token)  
    
    #To remove token
    VerifyJWT.removeToken()

    #To get token from localstorage
    VerifyJWT.getToken()

    #Verify that token is valid
    VerifyJWT.isValidToken()

## Tests
    npm test

## Contributing
    Arpan Kumar Soni