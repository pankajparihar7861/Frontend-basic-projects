import React, {useState} from 'react';

import './style.css'

function RegistrationForm() {

    return(

      <div className="form">

          <div className="form-body">

              <div className="username">

                  <label className="form__label" for="firstName">First Name </label>

                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>

              </div>

              <div className="lastname">

                  <label className="form__label" for="lastName">Last Name </label>

                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>

              </div>

              <div className="email">

                  <label className="form__label" for="email">Email </label>

                  <input  type="email" id="email" className="form__input" placeholder="Email"/>

              </div>

              <div className="phonenumber">

                  <label className="form__label" for="phoneNumber">Phone Number </label>
                  
<input type="text" id="phoneNumber" className="form__input" placeholder="PhoneNumber"/>
 </div>
<input type="radio" value="Male" name="gender" /> Male

<input type="radio" value="Female" name="gender" /> Female

 <div className="password">
 <label className="form__label" for="password">Password </label>
 <input className="form__input" type="password"  id="password" placeholder="Password"/>
 </div>
 <div className="confirm-password">
 <label className="form__label" for="confirmPassword">Confirm Password </label>
<input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
 </div>
 </div>
 <div class="footer">
 <button type="submit" class="btn">Register</button>
</div>
</div> 
 ) 
}
export default RegistrationForm;




