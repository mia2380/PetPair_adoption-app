import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { openInNewTab } from '../utils';
import "../assets/styles/page/footer.css"


export default function Footer() {
    return (
        <React.Fragment>
            <footer className="text-center text-white" style={{ backgroundColor: "#95b2e6" }}>
                {/* <!-- Grid container --> */}
                <div className="container pt-3">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-3">
                        {/* <!-- Linkedin --> */}
                        <IconButton onClick={() => openInNewTab("https://www.linkedin.com/in/brendaallemand//")}>
                            <LinkedInIcon style={{ color: 'white' }} />
                        </IconButton>
                        {/* <!-- Github --> */}
                        <IconButton onClick={() => openInNewTab("https://github.com/mia2380/petpair")}>
                            <GitHubIcon style={{ color: 'white' }} />
                        </IconButton>
                        {/* <!-- Email --> */}
                        <IconButton onClick={() => openInNewTab("mailto:brenda.allemand@gmail.com")}>
                            <EmailIcon style={{ color: 'white' }} />
                        </IconButton>
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center text-light p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © {new Date().getFullYear()} PetPair. All rights reserved.
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </React.Fragment >
    )
}