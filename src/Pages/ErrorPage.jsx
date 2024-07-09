import React from 'react'

function ErrorPage() {
  return (
    <div className="Error">
      <h1>Sorry, this page does not exist!</h1>
    </div>
  );
}

export default ErrorPage;
/*

Routes>

  <Route path='*' element={ <Error/>} />
  </Routes>


ErrorPage.js: Page displayed when a route is not found or an error occurs.


*/