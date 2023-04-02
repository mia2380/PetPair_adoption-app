import React from 'react';
import '../assets/styles/page/adoption-process.css'

export default function AdoptionProcess() {
    return (
        <div className='container-fluid content-container'>
            <div className='adoption-content'>
                <div>
                    <h3>Our Adoption Process</h3>
                </div>
                <div className="adoption-content-image">
                    <img src={require('../assets/images/dog_kitty.webp')} alt="Puppy being petted" />
                </div>
                <div className="adoption-content-block">
                    <h5>Step 1: Interested in Adopting?</h5>
                    <p>Contact the foster family or organization for all inquiries about the pet. The names and email addresses can be found in the pet's information card.</p>
                </div>
                <div className="adoption-content-block">
                    <h5>Step 2: Arrange for a visit to meet your potential pet to spend time and find out all about them</h5>
                    <p>Arrangements can be made directly with the current foster family or organization and all visits are by appointment only. <strong>ALL</strong> members of the household, which the pet will be adopted into, must be present during the visit. Should you have existing pets in your household, they can be brought down on a subsequent visit</p>
                </div>
                <div className="adoption-content-block">
                    <h5>Step 3: You are ready to adopt!</h5>
                    <p>Email the foster family or organization about your decision to adopt. They would then send you a preadoption form to fill out. The caretaker will look through the form submission and evaluate the best fit for the animal. This is determined by the adopter's experience and lifestyle, temperament of pet and other factors.</p>
                    <p>If your application is successful, the caretaker will contact you and will come by with your selected animal for a home visit. If everything goes well, the animal can stay for a weeklong settling-in period.</p>
                </div>
                <div className="adoption-content-block">
                    <h5>Step 4: Adoption confirmed!</h5>
                    <p>Congratulations! The adoption can be finalized. The foster organization will continue to stay connected and is happy to provide help and information as needed.</p>
                </div>
                <div className="adoption-content-block">
                    <h5>After Adoption: Training</h5>
                    <p>It is strongly encouraged that all adopters attend pet training classes, especially first-time pet owners. A small investment in training goes a long way in improving you and your pet the best start of your journey. Training is not just for your pet, but for the adopters as well.</p>
                </div>
            </div>
        </div>

    )
}