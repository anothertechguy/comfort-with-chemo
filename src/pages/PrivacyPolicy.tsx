import { useEffect } from "react";
import { LegalPage, LegalSection, LegalList } from "../components/LegalPage";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy — Comfort With Chemotherapy";
  }, []);

  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" lastUpdated="August 27, 2026">
      <p>
        Comfort With Chemotherapy Inc NPF ("Comfort With Chemotherapy," "we," "us," or
        "our") is a 501(c)(3) nonprofit organization that provides personalized Comfort
        Care Packages to individuals undergoing cancer treatment. This Privacy Policy
        explains what information we collect through comfortwithchemotherapy.com, why we
        collect it, and how we handle it.
      </p>

      <LegalSection heading="Information We Collect">
        <p>We collect information you choose to give us, which may include:</p>
        <LegalList
          items={[
            "Contact details for the person submitting a request, such as name, email address, and phone number.",
            "Recipient details needed to create and deliver a package, such as name, age, mailing address, and contact information.",
            "Personalization details, such as favorite colors, interests, preferences, allergies, dietary restrictions, and product sensitivities.",
            "Limited treatment-related context, such as the type of cancer and the stage of the treatment journey, used only to tailor the contents of a package.",
            "Partnership inquiry details, such as organization name, role, and how an organization would like to partner with us.",
            "Email addresses submitted to receive updates from us.",
          ]}
        />
        <p>
          We ask that you <strong>do not</strong> send us medical records, medication
          information, test results, insurance information, Social Security numbers, or
          detailed treatment information. We do not need this information and do not want
          to receive it.
        </p>
      </LegalSection>

      <LegalSection heading="A Note About Health Information">
        <p>
          Some of the information we request, such as the type of cancer a recipient is
          navigating, is sensitive. We collect it for one reason only: to thoughtfully
          personalize a Comfort Care Package. We do not use it for any other purpose.
        </p>
        <p>
          Comfort With Chemotherapy is not a healthcare provider, health plan, or
          healthcare clearinghouse, and we do not provide medical care. As a result, we are
          not a "covered entity" under the Health Insurance Portability and Accountability
          Act (HIPAA), and information you share with us is not protected health
          information under that law. Please share only what you are comfortable sharing.
        </p>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <p>We use the information you provide to:</p>
        <LegalList
          items={[
            "Review and process Comfort Care Package requests.",
            "Personalize the contents of a package for its recipient.",
            "Coordinate delivery and follow up about a request.",
            "Respond to partnership inquiries and general questions.",
            "Send updates, stories, and news to people who ask to receive them.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="How We Share Information">
        <p>
          <strong>We do not sell, rent, or trade your personal information.</strong>
        </p>
        <p>
          We share information only when it is necessary to carry out our work, including
          with service providers that help us operate, such as our form and email
          providers, and with shipping carriers in order to deliver a package. Our online
          forms are hosted by Jotform, and information submitted through them is processed
          and stored on Jotform's systems under their privacy practices.
        </p>
        <p>
          We may also disclose information if we are required to do so by law, or where we
          believe in good faith that disclosure is necessary to protect the safety or
          rights of any person.
        </p>
      </LegalSection>

      <LegalSection heading="How Long We Keep Information">
        <p>
          We keep request and partnership information for as long as needed to fulfill the
          purpose it was collected for and to maintain records of our charitable
          activities. You may ask us to delete your information at any time using the
          contact details below, and we will do so unless we are required to keep it.
        </p>
      </LegalSection>

      <LegalSection heading="Your Choices">
        <LegalList
          items={[
            "You can ask us what information we hold about you.",
            "You can ask us to correct information that is inaccurate.",
            "You can ask us to delete your information.",
            "You can unsubscribe from our emails at any time.",
          ]}
        />
        <p>To make any of these requests, contact us using the details below.</p>
      </LegalSection>

      <LegalSection heading="Children's Privacy">
        <p>
          Comfort Care Packages are sometimes requested for children by a parent, guardian,
          or caregiver, and we accept those requests. However, this website is not directed
          to children, and we ask that requests involving a minor be submitted by an adult
          who is authorized to do so.
        </p>
      </LegalSection>

      <LegalSection heading="Security">
        <p>
          We take reasonable steps to protect the information you share with us. No method
          of transmission or storage over the internet is completely secure, so we cannot
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="Links to Other Sites">
        <p>
          Our site may link to websites we do not operate. We are not responsible for the
          privacy practices or content of those sites, and we encourage you to read their
          policies.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise
          the "Last updated" date at the top of this page.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>
          If you have questions about this Privacy Policy or about information you have
          shared with us, please reach out:
        </p>
        <p>
          Comfort With Chemotherapy Inc NPF
          <br />
          Email:{" "}
          <a
            className="text-primary underline underline-offset-4"
            href="mailto:admin@comfortwithchemotherapy.com"
          >
            admin@comfortwithchemotherapy.com
          </a>
          <br />
          Phone:{" "}
          <a className="text-primary underline underline-offset-4" href="tel:4707981109">
            470.798.1109
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
