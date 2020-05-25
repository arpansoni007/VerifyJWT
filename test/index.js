const VerifyJWT = require('../index');
const chai = require('chai');
const localStorage = require('mock-local-storage');

const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvand0L3ZlcmlmeSJ9.5OMfT8V2UkeWLAJosxqYRyXwZI99KTNPscYXWbkDQL4';


/* ---------------------------- Get And Set Token --------------------------- */

describe('#token.getToken', () => {
  it('Return null if Token not found in localStorage',() => {
         chai.assert.notExists(VerifyJWT.getToken());
  });

  it('Return Token if found in localStorage',() => {
    VerifyJWT.setToken(mockToken);
    chai.assert.equal(VerifyJWT.getToken(),mockToken);
  });

});


/* ------------------------------- Rmove Token ------------------------------ */

describe('#verifyJWT.removeToken', () => {
    it('Remove the Token from localStorage',() => {
      VerifyJWT.setToken(mockToken);
      VerifyJWT.removeToken();
      chai.assert.notExists(VerifyJWT.getToken());
  });

});


/* --------------------------- Verify Valid Token --------------------------- */

describe('##verifyJWT.isValidToken', () => {
  it('Verify Token in localStorage',() => {
    VerifyJWT.setToken(mockToken);
    
    chai.assert.isTrue(VerifyJWT.isValidToken());
});

});