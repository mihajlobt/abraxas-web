import React from 'react';
import Footer from "./Footer";
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';

export const initGA = () => {
    console.log('GA init')
    ReactGA.initialize('UA-109461543-1')
}

export const logPageView = () => {
    ReactGA.set({page : window.location.pathname})
    ReactGA.pageview(window.location.pathname)
}

class PrivacyPolicy extends React.Component {
    componentDidMount(){
        initGA();
        logPageView();
    }
    render() {
        return (
            <div className="main-container">
                <Helmet>
                <title>
                    Privacy Policy
                </title>
                </Helmet>
                <div className="privacy-policy">
                    <h1>Website Privacy Statement, effective as of May 2018</h1>
                    <div className="policy-section">
                        <p><b>Purpose:</b> This Privacy Policy explains how we use any personal information that is
                        collected about you, and your rights in relation to such information. We encourage
                        you to read the following in its entirety <b>prior </b> to browsing our website,
                        using our Services, or otherwise conducting business with us. Please note that this Privacy
                        Policy is intended to apply to visitors to our website, clients of Abraxas, and
                        individuals that may encounter an Abraxas device in a public space. Depending upon
                        your relationship with Abraxas, some of the information below may not apply to you.
                        We also recognize that it is possible that you may encounter an Abraxas device in a
                        public space prior to reading this notice; in such event, we wish to reassure you that
                        we respect your privacy and have implemented multiple measures to safeguard any
                        data that could conceivably be used to identify any individual human being.
                        </p>
                    </div>
                    <div className="policy-section">
                        <h2>Policy</h2>
                        <div>
                            <p><b>Abraxas Technology, Inc.</b> (“Abraxas”, “Abraxas Technology”, “us”, “our”, or “we”) is
                            committed to protecting the privacy of individuals who visit the abraxastechnology.com Site
                            (“Visitors”), individuals and companies associated with organizations who register to use the
                            Services as defined below (“Customers”), and members of the general public that may
                            encounter Abraxas services used to assist out-of-home (“OOH”) advertisers obtain metrics
                            regarding OOH advertising locations and / or campaigns (“Individuals”). Visitors, Customers,
                            and Individuals are collectively referred to in this Statement as “you” and “your” or as
                            “User(s)”. This Privacy Policy (“Statement” or “Privacy Policy”) describes Abraxas’ privacy
                            practices in relation to the use of Abraxas’ public Website at <a href='www.abraxastechnology.com'> www.abraxastechnology.com </a>
                            and the software, data, and / or portals made available to Users in connection with the
                            business services offered by Abraxas; this Privacy Policy also covers our collection and use of
                            MAC addresses as a means of generating OOH advertising information (collectively, the
                            “Services”).
                            </p>
                        </div>
                    </div>
                    <div className="policy-section">
                        <h2>Scope</h2>
                        <div>
                            <p>
                            This Statement covers only data collected through our website or Services.
                            </p>
                            <p>
                            For questions regarding this policy or to submit a privacy-related request: <a href="mailto:info@abraxastechnology.com" className='email-link'>CLICK HERE </a>
                            </p>
                            <p>
                            You acknowledge notice of this Statement and agree with and acknowledge the terms,
                            conditions and responsibilities as set out below.
                            </p>
                            <p>
                            We may make access available to third party sites through our Site. When accessing these
                            third party sites, the privacy policy of the third-party applies, and this Statement does not
                            apply
                            </p>
                        </div>
                    </div>
                    <div className="policy-section">
                        <h2>What Information do we collect about you? </h2>
                        <div>
                            Our Site does not use cookies. The only information we collect is: (1) the information you
                            actively submit to us through the Site, such as your email address with a request to contact
                            you; (2) information you actively submit to us in the course of being a customer, such as
                            contact or billing information; or (3) data from a mobile device that transmits cellular
                            communication signals. With respect to #3, we only collect mobile device identifiers that are
                            NOT readily associated with the device’s owner. In addition to the foregoing, we may collect
                            general information via Google Analytics about Site visits and activity on our Site.
                        </div>
                    </div>
                    <div className="policy-section">
                        <h2>How will we use the information about you? </h2>
                        <div>
                            <p>
                            We collect information about you to contact you, professionally maintain and manage our
                            Site, process your order, manage your account, provide data to OOH signage owners regarding
                            sign <em>visibility</em> (e.g. number of views per day), and to email you about other products and
                            services we think may be of interest to you. (<em>Please note that if you begin receiving emails
                            from us and no longer wish to receive them, click UNSUBSCRIBE in any email we send to you,
                            and you will be unsubcribed from our list immediately.</em>) In processing your order or
                            managing your account, we may send your details to, and also use information from, credit
                            reference agencies, payment processing firms, banking service providers, fraud prevention
                            agencies, and other third parties that are related to our business.
                            </p>
                            <p>
                            With respect to OOH advertising installations that use Abraxas technology, we only collect
                            information from mobile devices for the purpose of furnishing OOH advertisers with accurate
                            information regarding advertising views and customer conversion metrics. We do not seek to
                            personally identify you, or collect information that can be used to identify you without
                            substantial secondary processes.
                            </p>
                            <p>
                            When you submit information to us, it will only be used for the purposes of contacting you,
                            engaging in business with you as a client of our OOH technology, or using that information to
                            provide OOH advertisers (our clients) with data regarding views, impressions, and the overall
                            effectiveness / reach of OOH signage.
                            </p>
                        </div>


                    </div>
                    <div className="policy-section">
                        <h2>Marketing</h2>
                        <div>
                            We would like to send you information about products and services which may be of interest
                            to you. If you have consented to receive marketing information, you may opt out at a later
                            date. You have a right at any time to stop us from contacting you for marketing purposes or
                            giving your information to other members of our network. If you no longer wish to be
                            contacted for marketing purposes, please contact us or click UNSUBSCRIBE the next time you
                            receive an email from us.
                        </div>
                    </div>
                    <div className="policy-section">
                        <h2>Types of Data and Collection Methods </h2>
                        <div>
                            <p>
                            We receive data that you actively submit through the Site or Services (“Data”) as described
                            below, or in the case of data from OOH advertising installations equipped with Abraxas
                            technology, data that is passively collected from a person’s device.
                            </p>
                            <p>
                            When you request information or otherwise actively send us Data through the Abraxas public
                            Web site or through a third party host such as AWS (“actively submitted data”), we may
                            collect Data such as, but not limited to, name, e-mail address(es), telephone number(s), or
                            user profile information. You can opt-out of providing information by not entering it when
                            asked, and, if such information is required in order to allow us to respond to your inquiry, you
                            may not receive any response from us at all if we have no viable way to contact you, or you
                            will receive a notice advising you of this situation and the nature our request for additional
                            information. When you submit Data via the Services, you will know what Data we collect
                            through the Services, because you actively submit it. With respect to Data collected from
                            Individuals, we only collect Data from electronic devices that provides OOH advertisers with
                            data that can not readily be used to identify you. You may contact us at
                            <a href="mailto:info@abraxastechnology.com"> info@abraxastechnology.com</a> with further questions.
                            </p>
                            <p>
                            Additionally, when you visit the Abraxas public Web site(s), Google Analytics may passively
                            track information on your computer and Internet connection, such as the IP address of your
                            computer and/or Internet service provider, the date and time you access the Web site(s), the
                            Internet address of Web sites from which you link to our Services, the computer technology
                            you are using and your movements and preferences on our Web site(s).
                            </p>
                            <p>
                            Unless you also actively submit personal information such as your name or address, passively
                            tracked Data from Individuals does not typically allow us to identify you personally (even
                            though it can theoretically be done, we do not have the means or an interest to find out who
                            you are, unless you identify yourself voluntarily through an active submission of data). To the
                            extent permitted by applicable law, we reserve the right to combine passively tracked Data
                            with personal Data that you <em>actively</em> submit.
                            </p>

                        </div>

                        <div className="policy-section">
                            <h2>Collection Purposes and Use of Data </h2>
                            <div>
                                <p>
                                We collect Data via our Services primarily for purposes of administering, providing,
                                protecting, and improving our Services, to better understand the preferences of our Users, to
                                identify server problems, to compile aggregated statistics about site usage, to compile
                                aggregated statistics about OOH advertising, and to help personalize your experience with our
                                Services. We do not deliver third party online advertisements on our sites but we may
                                advertise our products and services on others’ Web site. Nevertheless, we may promote our
                                Customers or the existence of a business relationship between Abraxas and any other
                                organization or individual on our Site or within our Services.
                                </p>
                                <p>
                                Abraxas may also use Data you voluntarily provide to perform the services you request. For
                                example, if you fill out a “Contact Me” form, we will use the information provided to contact
                                you about your interest in the Services.
                                </p>
                            </div>
                        </div>
                        <div className="policy-section">
                            <h2>Web Site Navigational Information: Cookies, Web Beacons, and Analytics </h2>
                            <div>
                                Abraxas does not use commonly-used information-gathering tools, such as cookies and Web
                                beacons, to collect information as you navigate the Site (“Web Site Navigational
                                Information”). Abraxas does use Google Analytics to understand basic information regarding
                                visitors to our site. Please visit this<a href='https://support.google.com/analytics/#topic=3544906'> link </a> for
                                more information on Google Analytics.
                            </div>
                        </div>
                        <div className="policy-section">
                            <h2>Links to Other Web Sites </h2>
                            <div>
                                <p>
                                Abraxas occasionally provides links to other entities related to the Services for your
                                convenience in locating certain information, Services, and / or products. Please be advised
                                that when you access these other sites, you are leaving the Abraxas Site and / or Service(s)
                                and that these third party sites are maintained by organizations over which Abraxas has no
                                control.
                                </p>
                                <p>
                                Accordingly, a link provided by Abraxas does not constitute endorsement of the content,
                                viewpoint, policies, legality, products, or services provided or advertised on the third party
                                site. Once you link to a site not maintained by Abraxas, you are subject to the terms and
                                conditions of that site and all inquiries regarding such third party sites or services should be
                                directed to the owner of such site or services, not Abraxas.
                                </p>
                            </div>
                        </div>

                        <div className="policy-section">
                            <h2>Social Media </h2>
                            <div>
                                If you post material to a blog or other social media feed located on or accessed through the
                                Services, you should be aware that any personally identifiable information you submit can be
                                read, collected, or used by other users of this Site or our Services, and could be used to send
                                you unsolicited messages. We are not responsible for the personally identifiable information
                                you choose to submit via social media or any other publicly-available forum, online or not.

                            </div>
                        </div>
                        <div className="policy-section">
                            <h2>Opt-Out</h2>
                            <div>
                                <p>
                                Abraxas does not seek to conduct business or communicate with folks that are not interested
                                in working with Abraxas or hearing from Abraxas. You always have the right to opt-out. To
                                submit a request contact <a href="mailto:info@abraxastechnology.com"> info@abraxastechnology.com</a>
                                </p>
                                <p>
                                In connection with promotions or other projects, we may ask you specifically whether you
                                have objections against a certain kind of Data use or sharing. If you opt-out under such
                                circumstances, we will respect your decision. To opt-out of receiving marketing
                                communications from Abraxas via email please click on the “opt-out” link in the email
                                communication or submit a request to the email address you see throughout this notice.
                                Please be advised that communications sent by Abraxas via other means such as USPS mail are
                                initiated via lists maintained by Abraxas from explicit opt-in scenarios such as website
                                downloads or tradeshows. These lists provide for an opt-out option at the time you submit
                                your information. Please note that our affiliates and other data recipients have their own
                                data privacy policies, which may differ from ours and you would have to contact them
                                separately with respect to opt-out requests. If you are having difficulty opting out of any
                                lists, communications, promotions, or from any Services, please contact us at
                                <a href="mailto:info@abraxastechnology.com"> info@abraxastechnology.com </a> for further assistance.
                                </p>
                                Please note that it is not possible to opt out of any services that do not personally identify
                                you.

                            </div>
                        </div>
                        <div className="policy-section">
                            <h2>Correcting and Updating Your Information </h2>
                            <div>

                                <h3>Customer Data</h3>
                                <div>
                                    Abraxas’ Customers may electronically submit Data or information, including payment
                                    information, for hosting and processing purposes (“Customer Data”). Abraxas is not
                                    responsible for Customer Data data submitted to and / or maintained by third party sites such
                                    as, but not limited to, AWS. Abraxas will not host or retain payment information or any
                                    personal data collected by a third party seller for the purpose of accessing, purchasing, using,
                                    or maintaining the Services, except to the extent that information such as, but not limited to,
                                    payment information, may need to be retained for some limited time per legal requirements.
                                    Customer Data may include Customer contact information (such as email address, name,
                                    phone number), financial information (such as credit card information), or other requested
                                    information. Abraxas will not review, share, distribute, or reference any such Customer Data
                                    except as provided in this policy, through another agreement, or as may be required by law. In
                                    accordance with the Terms of Service and this Privacy Policy, Abraxas may access Customer
                                    Data only for the purpose of providing the Services, or preventing or addressing service or
                                    technical problems, or as may be required by law. If you wish to correct or update your Data,
                                    please contact us at <a href="mailto:info@abraxastechnology.com"> info@abraxastechnology.com</a>
                                </div>

                                <h3>Your California Privacy Rights</h3>
                                <div>
                                    California law provides that California residents have a right to request businesses to tell
                                    them how their personal information has been shared, if at all, with third parties for the third
                                    parties’ direct marketing purposes. While Abraxas does not collect or share or personal
                                    information, you are still welcome to contact us at <a href="mailto:info@abraxastechnology.com"> info@abraxastechnology.com </a> to submit
                                    a formal request and receive a formal response.
                                </div>

                                <h3>Your Texas Privacy Rights </h3>
                                <div>
                                    <b>The Texas Identity Theft Enforcement and Protection Act</b> does not technically apply to
                                    Abraxas because we do not collect - unless you actively submit it to us - your name, address,
                                    social security number, credit card number, or other similar information. Nonetheless, we
                                    believe in following the spirit of this law, protecting the identity of people, and notifying
                                    people impacted by any type of data breach. For more information and your rights in Texas,
                                    you may visit: <a href='https://www.texasattorneygeneral.gov/cpd/protecting-consumers-personaldata'> www.texasattorneygeneral.gov </a>
                                </div>

                                <h3>Privacy Rights in other States & Countries</h3>
                                <div>
                                    If you live in one of the 48 States that isn’t Texas or California, or a foreign country, you may
                                    also have unique privacy or data rights. If you wish to contact us pursuant to another state or
                                    foreign law, please contact us at  <a href="mailto:info@abraxastechnology.com"> info@abraxastechnology.com </a> and be sure to provide a
                                    citation or link to any law you reference so we can do our best to help you.
                                </div>
                            </div>

                        </div>

                        <div className="policy-section">
                            <h2>General Data Protection Regulation (GDPR)</h2>
                            <div>
                                <p>
                                Abraxas has a legitimate commercial interest in processing data for the purpose of providing
                                valuable professional services to our clients, namely data regarding views and impresions of
                                OOH advertising. To achieve this Service for our clients, we collect and process minimal data
                                from mobile devices (MAC addresses only), and we utilize measures to ensure that the data
                                we do collect, can not be associated with any particular human being. We recognize that
                                your privacy is important, and to help protect your interests, Abraxas is guided by
                                incorporating privacy protections wherever possible into our data collection and data
                                processing practices.
                                </p>
                                <p>
                                If you are a European citizen or otherwise entitled to the protection of European laws, you
                                may have additional rights under the GDPR. In honor of those rights, Abraxas furnishes the
                                following information:
                                </p>
                                <p>
                                You have the right to be informed of what data we may have, how we process it for business
                                purposes, and how we store it. Reading this Privacy Policy carefully will provide all such information,
                                but if you are having trouble finding it yourself within this document, you may contact us here: <a href="mailto:info@abraxastechnology.com">
                                info@abraxastechnology.com </a>
                                </p>
                                <p>
                                You also have the right to contact us and inquire if we have any data about you, and how any
                                such data is used. We will do our best to respond to any such inquiries in a timely manner. If
                                you make an inquiry, please understand that it is very well possible that we will have no data
                                associated with you because our data collection and processing methods seek to minimize the
                                data we collect, and much of the data we collect can not readily be associated with a
                                particular human being.
                                </p>
                                <p>
                                You have the right to correct any data we do possess about you. Who wants incorrect data??
                                Not us, and not you either! Please email us with any rectification requests:
                                <a href="mailto:info@abraxastechnology.com"> info@abraxastechnology.com</a> In the event that any of your information is incorrect, you
                                may also request that we discontinue processing of your data.
                                </p>
                                <p>
                                You also have the right to contact us and request that we simply erase any data associated
                                with you. (Please note that if you are a paying client of Abraxas, such a request will require
                                conversation, as certain information such as how we can contact you can not practicably be
                                deleted while we are doing business together.)
                                </p>
                                <p>
                                You also have the right to object to our use of your data. If you wish to submit an objection,
                                you must provide an explanation for your objection so we can determine how to best service
                                your request. Please send objections and explanations to  <a href="mailto:info@abraxastechnology.com"> info@abraxastechnology.com</a>
                                </p>
                                *Abraxas does not intend for its software or services to be used for any automated decisionmaking
                                purposes.

                            </div>
                        </div>

                        <div className="policy-section">
                            <h2>Do Not Track</h2>
                            <div>
                                Certain web browsers and other devices you may use to access the Services may permit you to
                                indicate your preference that you do not wish to be “tracked” online. At this time, the
                                Services do not respond to “Do Not Track” signals.
                            </div>
                        </div>

                        <div className="policy-section">
                            <h2>Security & Transfers </h2>
                            <div>
                                Transmissions over the Internet are never 100% secure or error-free. However, we take
                                reasonable steps to protect your Data and our Services from loss, misuse, and unauthorized
                                access, disclosure, alteration, and destruction.
                            </div>
                        </div>

                        <div className="policy-section">
                            <h2>Children Under 13 </h2>
                            <div>
                                Abraxas is committed to protecting the privacy needs of children, and we encourage parents
                                and guardians to take an active role in their children’s online activities and interests. Neither
                                the Abraxas public website nor are our Services directed to children under 13 years old, and
                                we do not market to or knowingly collect any personally identifiable information from a child
                                under the age of 13 without the consent of the child’s parent or legal guardian. If a parent or
                                guardian becomes aware that his or her child has provided us with personal or contact
                                information without their consent, the parent or guardian should contact us immediately at
                                <a href="mailto:info@abraxastechnology.com"> info@abraxastechnology.com</a>. If we become aware that we have inadvertently collected
                                personally identifiable information from a child under the age of 13, we will immediately take
                                reasonable steps to delete such information from our Site and / or Services.

                            </div>
                        </div>

                        <div className="policy-section">
                            <h2>Amendments </h2>
                            <div>
                                We reserve the right to change, modify, add or remove portions of this Statement from time
                                to time and in our sole discretion, but will alert you that changes have been made by
                                indicating on the Statement the date it was last updated. When you visit the Services, you are
                                accepting the current version of this Statement as posted on the Service at that time.
                                <em>Especially due to the fluid nature of data security compliance, we recommend that users
                                    revisit this Statement on occasion to learn of any changes.</em>
                            </div>
                        </div>

                        <div className="policy-section">
                            <h2>Contact Us </h2>
                            <div>
                                <p>If you have any questions about this Statement, please email us at  <a href="mailto:info@abraxastechnology.com"> info@abraxastechnology.com</a>, or you may
                                    contact us at the following address:</p>
                                <p>
                                    Abraxas Technology
                                </p>
                                <p>
                                    4009 Banister Lane, #430
                                </p>
                                <p>
                                    Austin, TX 78704 USA
                                </p>
                                <p>
                                    ATTN: Privacy
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        )
    }
}

export default PrivacyPolicy;