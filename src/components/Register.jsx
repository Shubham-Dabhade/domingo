import React from "react";
import "./css/Register.css";

const Register=()=>{
    return(
        <>
        <div className="kks">
                <div class="container">
                <div class="title">Registration</div>
                <div class="content">
                <form action="#">
                    <div class="user-details">
                    <div class="input-box">
                        <span class="details">Full Name</span>
                        <input type="text" placeholder="Enter your name" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Username</span>
                        <input type="text" placeholder="Enter your username" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Email</span>
                        <input type="text" placeholder="Enter your email" required/>
                    </div>
                    <div class="input-box">
                    <span class="details">Phone Number</span>
                    <input type="text" placeholder="Enter your number" required/>
                </div>
                    <div class="input-box">
                        <span class="details">Restaurant Name</span>
                        <input type="text" placeholder="Enter your restaurant name" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Restaurant Address</span>
                        <input type="text" placeholder="Enter your Restaurant address" required/>
                    </div>

                    <div class="input-box">
                        <span class="details">Password</span>
                        <input type="text" placeholder="Enter your password" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Confirm Password</span>
                        <input type="text" placeholder="Confirm your password" required/>
                    </div>
                    </div>
                    <div class="business-details">
                    <input type="radio" name="business" id="dot-1"/>
                    <input type="radio" name="business" id="dot-2"/>
                    <input type="radio" name="business" id="dot-3"/>
                    <span class="gender-title">Business Type</span>
                    <div class="category">
                        <label for="dot-1">
                        <span class="dot one"></span>
                        <span class="gender">Private</span>
                    </label>
                    <label for="dot-2">
                        <span class="dot two"></span>
                        <span class="gender">Franchise</span>
                    </label>
                    <label for="dot-3">
                        <span class="dot three"></span>
                        <span class="gender">Prefer not to say</span>
                        </label>
                    </div>
                    </div>
                    <div class="button">
                    <input type="submit" value="Register"/>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;