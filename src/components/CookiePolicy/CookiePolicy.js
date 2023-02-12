import "./CookiePolicy.css";

export default function CookiePolicy() {
  return (
    <div className="wrapper">
      <div className="container">
        <h2>Cookie Policy & Privacy Statement for</h2>
        <h1>Find-A-Match</h1>
        <br />
        <p>
          At <a href="/">Find-A-Match</a>, we are committed to protecting the
          privacy of our users and ensuring that their experience on our website
          is safe and enjoyable. This Cookie Policy & Privacy Statement outlines
          the types of information we collect, how we use it, and the steps we
          take to protect it.
        </p>
        <div className="section-title">1. Information We Collect</div>
        <p>
          The only information that is collected from the users is their name.
          However, users are free to use any anonymous name while sharing the
          game score.
        </p>

        <div className="section-title">2. Local Storage</div>
        <p>
          We use local storage on our website to store the name and score of the
          user. Local storage is a feature of the web browser that allows
          websites to store data on the user's device. The data stored in local
          storage remains on the user's device even after they close their
          browser.
        </p>

        <div className="section-title">
          3. How We Use the Information We Collect
        </div>
        <p>
          The information we collect is used to improve the user experience on
          our website. Name is used to identify the user. Score is used to
          determine the minimum number of moves used by the user to find all the
          matches in the game. Please note that we do not store any information
          at our end. The data stored in local storage remains on the user's
          device.
        </p>

        <div className="section-title">4. Data Security</div>
        <p>
          We take the security of the information we collect very seriously and
          have implemented measures to protect it from unauthorized access, use,
          or disclosure. However, no website or internet transmission is
          completely secure, and we cannot guarantee the security of the
          information we collect. Users are advised to use any anonymous name if
          they are not willing to give away any personal information. Please
          note that we do not store any information at our end. The data stored
          in local storage remains on the user's device. We are not liable for
          the security of the information stored on the user's device.
        </p>

        <div className="section-title">5. Changes to this Policy</div>
        <p>
          We may update this Cookie Policy & Privacy Statement from time to time
          to reflect changes in our privacy practices. We will notify users of
          any changes by posting the updated policy on our website.
        </p>

        <div className="section-title">6. Contact Us</div>
        <p>
          If you have any questions or concerns about this Cookie Policy &
          Privacy Statement, please raise an issue{" "}
          <a href="https://github.com/SandeepKrSuman/find-a-match/issues">
            here
          </a>
          .
        </p>

        <h4>
          By using our website, you consent to our use of local storage and the
          collection and use of the information we collect in accordance with
          this Cookie Policy & Privacy Statement.
        </h4>
      </div>
    </div>
  );
}
