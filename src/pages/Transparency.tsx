import React from "react";
import { useNavigate } from "react-router-dom";

function Transparency() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-gray-800 max-w-[90%] md:max-w-[50%] mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Transparency</h1>
      <p className="mb-6">
        At ALVEO 4P Charitable Trust, we are committed to transparency and
        accountability in all our operations. Below, you will find information
        about our governance, finances, and impact as we work to transform
        respiratory health through science, education, and community outreach.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Governance</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Board of Trustees:</strong> [Insert names and roles]
        </li>
        <li>
          <strong>Selection Process:</strong> [Explain how trustees are
          selected]
        </li>
        <li>
          <strong>Trust Registration:</strong> [Provide registration number and
          link to trust deed]
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Financial Reports</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Annual Financial Statements:</strong>
        </li>
        <li>
          <strong>Audit Reports:</strong>
        </li>
        <li>
          <strong>Tax Filings:</strong> [If applicable]
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Funding Sources</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Individual Donations: XX%</li>
        <li>Grants: XX%</li>
        <li>Corporate Sponsorships: XX%</li>
        <li>Other: XX%</li>
      </ul>
      <div className="mb-6">
        {/* <canvas ref={fundingChartRef} className="max-w-[300px] mx-auto"></canvas> */}
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Use of Funds</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Program Expenses: XX%</li>
        <li>Administrative Expenses: XX%</li>
        <li>Fundraising Expenses: XX%</li>
      </ul>
      <div className="mb-6">
        {/* <canvas ref={expensesChartRef} className="max-w-[300px] mx-auto"></canvas> */}
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Impact Reports</h2>
      <p className="mb-4">
        From rural villages to international symposium halls, we are laying the
        foundation for a future where respiratory diseases are preventable,
        manageable, and reversible. Our work includes:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Advanced diagnostics and AI-driven profiling of lung diseases.</li>
        <li>Community-based awareness campaigns and health education.</li>
        <li>Capacity building through educational programs and seminars.</li>
        <li>
          [Insert specific achievements and outcomes; link to detailed reports
          or case studies]
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Policies</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <a
            // href="[Link to Privacy Policy]"
            className="text-blue-600 hover:underline"
            onClick={() => {
              navigate("/privacy");
              window.scrollTo(0, 0);
            }}
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            // href="[Link to Terms of Service]"
            className="text-blue-600 hover:underline"
            onClick={() => {
              navigate("/terms");
              window.scrollTo(0, 0);
            }}
          >
            Terms of Service
          </a>
        </li>
        <li>Donation Policy [If applicable]</li>
        <li>Volunteer Policy [If applicable]</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        7. Contact for Inquiries
      </h2>
      <p className="mb-4">
        If you have any questions or would like more information, please contact
        us at:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Email:</strong> info@alveo4p.org
        </li>
        <li>
          <strong>Telephone:</strong> +91 12345 67890
        </li>
        <li>
          <strong>Postal Address:</strong> 123 Health Lane, Science City,
          Chennai, Tamil Nadu, India
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Our Commitment to Ethical Practices
      </h2>
      <p className="mb-4">
        ALVEO 4P Charitable Trust is dedicated to upholding the highest
        standards of ethics and integrity. We comply with all applicable laws
        and regulations governing charitable trusts in India, including the
        Indian Trusts Act and the Digital Personal Data Protection Act, 2023.
        Our financial statements are audited annually by an independent auditor,
        ensuring transparency and accountability to our donors, beneficiaries,
        and the public.
      </p>
    </div>
  );
}

export default Transparency;
