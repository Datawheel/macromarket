import React from "react";
import "./Static.css";

export default class Terms extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-body">
        <h1>Terms of Service</h1>
        <p>
        By using the Macro.market website (&ldquo;Service&rdquo;), you are
        agreeing to be bound by the following terms and conditions (&ldquo;Terms of Service&rdquo;).
        </p>
        <p>
        If you are entering into this agreement on behalf of a company or
        other legal entity, you represent that you have the authority to bind
        such entity, its affiliates and all users who access our services
        through your account to these terms and conditions, in which case the
        terms &ldquo;you&rdquo; or &ldquo;your&rdquo; shall refer to such entity, its affiliates and
        users associated with it. if you do not have such authority, or if you
        do not agree with these terms and conditions, you must not accept this
        agreement and may not use the services.
        </p>
        <p>
        Violation of any of the terms below will result in the termination of
        your Account. While Macro Market prohibits such conduct and Content on the
        Service, you understand and agree that Macro Market cannot be responsible
        for the Content posted on the Service and you nonetheless may be
        exposed to such materials. You agree to use the Service at your own risk.
        </p>

        <h2>Conducting business</h2>
        <p>Macro Market is not responsible for any business conducted on our site, whether this includes buying or selling goods. The goal of the platform is to be an information hub, connecting vendors with buyers. Any business conducted via information conveyed on this platform is the sole responsibility of said parties. Take any necessary precautions before entering into a business agreement or transaction as this site does not guarentee the validity of any of the businesses listed herein.</p>

        <h2>Conditions for accounts</h2>
        <ol>
          <li>You must be 13 years or older to use this Service.</li>
          <li>Your login may only be used by one person - a single login shared by multiple people is not permitted.</li>
          <li>You are responsible for maintaining the security of your account and password. Macro Market cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.</li>
          <li>You are responsible for all Content posted and activity that occurs under your account (even when Content is posted by others who have accounts under your account).</li>
          <li>You may not use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright or trademark laws).</li>
        </ol>

        <h2>Cancellation and termination</h2>
        <ol>
          <li>Macro Market, in its sole discretion, has the right to suspend or terminate your account and refuse any and all current or future use of the Service, for any reason at any time. Such termination of the Service will result in the deactivation or deletion of your Account or your access to your Account, and the forfeiture and relinquishment of all Content in your Account. Macro Market reserves the right to refuse service to anyone for any reason at any time.</li>
        </ol>

        <h2>General conditions</h2>
        <ol>
          <li>Your use of the Service is at your sole risk. The service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.</li>
          <li>You understand that Macro Market uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.</li>
          <li>You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Macro Market.</li>
        </ol>
      </div>
    );
  }

}
