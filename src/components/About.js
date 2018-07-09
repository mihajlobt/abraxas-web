import React from 'react';
import justin from '../images/Justin-G.png';
import joshua from '../images/Lawton-Belous.png';
import steve from '../images/Steve-Meyer.png';
import irene from '../images/irene-new.png';
import bradley from '../images/Bradley.png';
import aaron from '../images/Aaron.png';


class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            team: [
                {
                    open: false,
                    memberName: 'Justin Gilfus',
                    memberPosition: 'CEO',
                    memberImage: justin,
                    memberAbout: ' After joining the Army in 2010 as a Cavalry Scout, Justin deployed to Afghanistan in 2011 and was honorably discharged in 2013. After returning home, he began pursuing his education and developed a career as a successful entrepreneur. Justin was invited to become a part of Ads For The Road, where he transformed the company into an outdoor digital media platform that has forever changed the Texas outdoor advertising market. During his time at Ads For The Road, Justin recognized a need for improved outdoor advertisement metrics and began developing ABRAXAS Technology. A champion for other veteran entrepreneurs, Justin is heavily involved in the Austin startup community, working with organizations such as Techstars, Patriot Boot Camp, and Bunker Labs.',

                },
                {
                    open: false,
                    memberName: 'Joshua Lawton-Belous',
                    memberPosition: 'COO',
                    memberImage: joshua,
                    memberAbout: '\n' +
                    'Joshua is a recovering Trekkie, lifelong investor, part-time writer, and a once upon a time combat medic. He is a member of Forbes Technology Council and OAAA’s Innovations Committee. Josh is the recipient of Wells Fargo’s Clean Technology Award in 2016. Joshua led a national pilot for a Presidential Major Initiative as a senior government official, served as a Senior Consultant at Booz Allen Hamilton focusing on managing high-risk, high-reward research and development efforts to include commercializing game changing technologies, and most recently as the Director of Project Management at Global Cyber Alliance managed a team that built, according to CTO Vision, from scratch one of the Top 4 managed DNS services in the world. He is the COO and Co-Founder of Abraxas Technology, a startup that focuses on providing state of the art validation for the Out of Home Media market. Joshua holds a Masters of Business Administration from Johns Hopkins University and a Masters in Technology Commercialization from McCombs School of Business at the University of Texas at Austin. He also is a Project Management Professional (PMP), a Certified ScrumMaster (CSM), Certified Scrum Product Owner (CSPO), and a Certified Scrum Professional (CSP). ',
                },

                {
                    open: false,
                    memberName: 'Steve Meyer',
                    memberPosition: 'CTO',
                    memberImage: steve,
                    memberAbout: 'Steve has more than 30 years of experience developing emerging technologies, has founded multiple startups, and is a legendary mentor in Techstars. An uncommon combination of hands on business, marketing, and technical expertise acquired over three decades of experience founding and bootstrapping technology startups to success. Sole Founder or Co-Founder of multiple startups which reached prominent market leadership positions before exiting. Assembled and led incredible teams which achieved exceptional goals using lean and agile methods before they were common. Created global product distribution networks by identifying new market opportunities and recruiting VARs across the U.S. and on 4 continents.',
                },
                {
                    open: false,
                    memberName: 'Irene Velasquez',
                    memberPosition: 'Vice President of Sales',
                    memberImage: irene,
                    memberAbout: ' After leaving Texas A&M University to gain real world experience and knowledge, building companies became her passion. She has experience with many industries including industrial, hotel, military, government, fintech and most recently SaaS software technologies at NASDAQ. Her experience in marketing and businesses development,  navigating and developing new strategies for growth is proven. Irene is on her way to developing a brand and company of her own and is excited about the experience she’ll gain with Abraxas and the team. She’s looking forward to building a sales team of her own using proven ideologies and metrics to grow the Abraxas bottom line.',
                },
                {
                    open: false,
                    memberName: 'Bradley Gold',
                    memberPosition: 'Data Privacy Officer',
                    memberImage: bradley,
                    memberAbout: ' Bradley is a new father, an experienced business attorney, skilled in construction trades, and an enthusiast for spending as much time outdoors as possible. When he\'s not protecting the data and legal interests of Abraxas, Bradley dedicates himself to teaching business law, business ethics, and business management skills to students at the The University of Texas, including students in the nation\'s #1 Masters of Accounting Program. Bradley also has a 20+ year history as an entrepreneur running companies ranging from fashion design to financial services, and has won Loyola University\'s Family Business of the Year Award. Bradley was a 2018 finalist for the Austin Chamber of Commerce\'s Changemaker Award, and has made press appearances in the following: KXAN (NBC Austin), Daily Texan print and podcasts, Black Enterprise Magazine, Austin Business Journal, GE Economics, and French Morning Today. As a steward of professional compliance regulations, Bradley focuses upon GDPR, PCI DSS, AML, GLB, Privacy Shield, cGMP, and private compliance structures such as ISO.',
                },

                {
                    open: false,
                    memberName: 'Aaron Tao',
                    memberPosition: 'Product Manager',
                    memberImage: aaron,
                    memberAbout: 'Aaron is an entrepreneur, writer, and enthusiast for emerging technologies. Though he wasn’t born in Texas, he got here as fast as he could. Prior to joining Abraxas, he worked in marketing for healthcare, biotech, and nonprofit organizations. He earned his M.S. from the McCombs School of Business at the University of Texas at Austin and a B.A. from Case Western Reserve. University.',
                }


            ]
        };


    }

    isOpened(member, index) {
        this.state.team[index].open = !this.state.team[index].open;
        this.setState(this.state)

    }

    render() {

        let renderTeam = this.state.team.map((member, index) => {
            return (
                <div key={index} className="member" onClick={this.isOpened.bind(this, member, index)}>
                    <div className="member-info">
                        <div className="member-image"><img src={member.memberImage}/></div>
                        <div className="member-text">
                            <span>{member.memberName}</span>
                            <span>{member.memberPosition}</span>
                        </div>

                    </div>
                    {member.open ? (<div className="member-about">{member.memberAbout}</div>) : null}
                </div>


            )
        });

        return (
            <div className="about-section" id="about">
                <div className="about-main-text">
                    <h1>About ABRAXAS Technology</h1>
                    <span>ABRAXAS Technology was founded in Austin, Texas, in 2017. After helping build the largest network of digital billboards in Austin at Ads For The Road, Justin Gilfus recognized a need for better analytics within outdoor advertising. We believe digital billboard customers deserve the same engagement and ROI metrics available for online advertisements, and now ABRAXAS Technology can provide them. Our leadership team is committed to bringing
                    real-time data and consumer behavior analytics to the analog world of outdoor advertising.
                    </span>
                </div>
                <div className="our-team">
                    <div className="about-us-grid">
                        {renderTeam}

                    </div>

                </div>
            </div>
        )
    }
}


export default About;