'use client';

import './plans.css'; // CSS dosyasını import ediyoruz

export default function PlansPage() {
  return (
    <div className="plans-container">
      <h1>Medium</h1>
      <h2>Support great writing and access all stories on Medium.</h2>

      <div className="plans-options">
        {/* Pay Monthly Kutusu */}
        <div className="plan-option">
          <h3>Pay monthly</h3>
          <div className="plan-details">
            <h4>AysuAsci</h4>
            <p>Member</p>
            <p><strong>$5 USD/month</strong></p>
            <p>Access member-only stories and enjoy an enhanced reading and writing experience.</p>
            <p>Cancel anytime.</p>
            <button className="select-button">Select</button>
            <ul>
              <li><span className="checkmark">✔</span> Read member-only stories</li>
              <li><span className="checkmark">✔</span> Support writers you read most</li>
              <li><span className="checkmark">✔</span> Earn money for your writing</li>
              <li><span className="checkmark">✔</span> Listen to audio narrations</li>
              <li><span className="checkmark">✔</span> Read offline with the Medium app</li>
              <li><span className="checkmark">✔</span> Access our Mastodon community</li>
              <li><span className="checkmark">✔</span> Connect your custom domain</li>
              <li><span className="checkmark">✔</span> Create your own publications</li>
            </ul>
          </div>
        </div>

        {/* Pay Annually Kutusu */}
        <div className="plan-option">
          <h3>Pay annually</h3>
          <p>Save up to $30</p>
          <div className="plan-details">
            <h4>AysuAsci</h4>
            <p>Friend</p>
            <p><strong>$15 USD/month</strong></p>
            <p>Contribute more to writers and strengthen your support for the Medium community.</p>
            <p>Cancel anytime.</p>
            <button className="select-button">Select</button>
            <ul>
              <li><span className="checkmark">✔</span> All Medium member benefits</li>
              <li><span className="checkmark">✔</span> Give 4x more to the writers you read</li>
              <li><span className="checkmark">✔</span> Share member-only stories with anyone</li>
              <li><span className="checkmark">✔</span> Customize app icon</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="free-account">
        <p>Or continue with a <span className="free-link">free account</span></p>
      </div>
    </div>
  );
}