import React from 'react'


function Footer() {
  return (
    <>
    <footer>
      
    <div class="container">
     <ul>
       <li class="ps-2 pb-3">Questions? Call  000-800-040-1843</li>
     </ul>
      <div class="row">
        <div class="col-md-3 col-6">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Speed Test</a></li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <ul>
            <li>An active item</li>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Netflix Originals</li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <ul>
            <li>Media Centre</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row ps-4 pb-4">
        <div class="col-lg-2 col-md-4 col-6">
          <select class="form-select" aria-label="Default select example">
            <option selected class="text-white">English</option>
            <option value="1" class="text-white">Español</option>
          </select>
        </div>
      </div>
    </div>
  </footer>
  </>
 
  )
}

export default Footer
