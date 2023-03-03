import "./CookiePolicy.css";

export default function FamAppPrivacy() {
  return (
    <div className="wrapper">
      <div className="container">
        <h2>Cookie Policy & Privacy Statement for</h2>
        <h1>FamApp</h1>
        <br />
        <p>
          At FamApp, we are committed to protecting the privacy of our users and
          ensuring that their experience on our app is safe and enjoyable. This
          Cookie Policy & Privacy Statement outlines the types of information we
          collect, how we use it, and the steps we take to protect it.
        </p>
        <div className="section-title">1. Information We Collect</div>
        <p>
          At FamApp, protecting our users' privacy is our top priority. We do
          not collect or store any personal information from our users. We only
          collect data related to the usage of the app, such as analytics data
          and app crashes. The only information stored by the app is
          game-related data, such as high scores, which are saved locally on the
          user's device to enhance the user experience.
        </p>
        <p>
          We use Google's AdMob service to show advertisements in our mobile
          app. AdMob may collect certain information about you and your device,
          such as your device type, IP address, and advertising ID. This
          information may be used to show you personalized ads based on your
          interests and preferences. We do not collect or store any personal
          data about you ourselves.
        </p>

        <div className="section-title">2. Local Storage</div>
        <p>
          We use local storage to store the best score of the user. Local
          storage allows to store data on the user's device. The data stored in
          local storage remains on the user's device.
        </p>

        <div className="section-title">
          3. How We Use the Information We Collect
        </div>
        <p>
          The information we collect is used to improve the user experience on
          our app. The stored score is used to determine the minimum number of
          moves used by the user to find all the matches in the game. Please
          note that we do not store any information at our end. The data stored
          in local storage remains on the user's device.
        </p>
        <p>
          The information collected by AdMob may be used to show you
          personalized ads and to improve the effectiveness of our advertising
          campaigns. We do not use your personal data for any other purposes.
        </p>

        <div className="section-title">4. Data Sharing</div>
        <p>
          We do not share any personal data about you with third parties
          ourselves. However, AdMob may share certain information with its
          advertising partners and service providers in order to show you
          personalized ads.
        </p>

        <div className="section-title">5. Your Rights</div>
        <p>
          You have the right to control the data that AdMob collects about you
          and to opt-out of personalized advertising. You can do this by
          adjusting your device settings, using opt-out tools provided by AdMob,
          not giving the consent by clicking "do not consent" or closing the
          consent menu, etc.
        </p>

        <div className="section-title">6. Data Security</div>
        <p>
          We take the security of the information we collect very seriously and
          have implemented measures to protect it from unauthorized access, use,
          or disclosure. However, no website or internet transmission is
          completely secure, and we cannot guarantee the security of the
          information we collect.
          <br />
          <br />
          We strongly advise our users not to provide any personal information
          through the app, as we cannot guarantee the security of such
          information. Any information provided voluntarily by the user will be
          deemed to have been provided at the user's own risk. We encourage our
          users to exercise caution when sharing information, both within the
          app and elsewhere online.
          <br />
          <br />
          Please note that we do not store any information at our end. The data
          stored in local storage remains on the user's device. We are not
          liable for the security of the information stored on the user's
          device.
        </p>

        <div className="section-title">7. Children's Privacy</div>
        <p>
          The App is intended for use by general audiences. While we do not
          collect any personal information from our users, we believe that it is
          important for parents and guardians to be aware of their children's
          online activities and to help them make safe and responsible choices.
          We encourage parents and guardians to talk to their children about
          online privacy and security, and to set appropriate boundaries and
          guidelines for app usage.
        </p>

        <div className="section-title">8. Changes to this Policy</div>
        <p>
          We may update this Cookie Policy & Privacy Statement from time to time
          to reflect changes in our privacy practices. We will notify users of
          any changes by posting the updated policy on our website.
        </p>

        <div className="section-title">9. Contact Us</div>
        <p>
          If you have any questions or concerns about this Cookie Policy &
          Privacy Statement, please raise an issue{" "}
          <a href="https://github.com/SandeepKrSuman/find-a-match/issues">
            here
          </a>
          .
        </p>

        <h4>
          By using our app, you consent to our use of local storage and the
          collection and use of the information we collect in accordance with
          this Cookie Policy & Privacy Statement.
        </h4>
      </div>
    </div>
  );
}
