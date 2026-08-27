import { useEffect } from "react";
import { LegalPage, LegalSection, LegalList } from "../components/LegalPage";

export default function TermsOfUse() {
  useEffect(() => {
    document.title = "Terms of Use — Comfort With Chemotherapy";
  }, []);

  return (
    <LegalPage eyebrow="Legal" title="Terms of Use" lastUpdated="August 27, 2026">
      <p>
        Welcome to comfortwithchemotherapy.com, operated by Comfort With Chemotherapy Inc
        NPF ("Comfort With Chemotherapy," "we," "us," or "our"), a 501(c)(3) nonprofit
        organization. By using this website, you agree to these Terms of Use. If you do not
        agree, please do not use the site.
      </p>

      <LegalSection heading="Not Medical Advice">
        <p>
          <strong>
            Nothing on this website is medical advice, and Comfort With Chemotherapy does
            not provide medical care, diagnosis, or treatment.
          </strong>{" "}
          Our Comfort Care Packages contain comfort and personal care items — they are not
          medical products, treatments, or supplements, and they are not intended to treat
          any condition or relieve any symptom.
        </p>
        <p>
          Always talk with a qualified healthcare professional before using any item we
          send, particularly if you have allergies, sensitivities, or dietary restrictions,
          or if you are undergoing treatment. Never disregard or delay professional medical
          advice because of something you read here or received from us.
        </p>
      </LegalSection>

      <LegalSection heading="About Comfort Care Package Requests">
        <p>
          Submitting a request does not guarantee that a package will be provided. We are a
          nonprofit organization with limited resources, and we fulfill requests based on
          need, available donated and purchased items, and our capacity at the time.
        </p>
        <p>
          Because every package is personally curated, we do not publish a standard list of
          contents and cannot guarantee that any specific item will be included. Contents
          vary based on the information provided and what is available.
        </p>
        <p>
          You agree that the information you submit is accurate, and that if you are
          requesting a package on someone else's behalf, you have their permission to share
          their information with us.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable Use">
        <p>When using this site, you agree not to:</p>
        <LegalList
          items={[
            "Submit false, misleading, or fraudulent information.",
            "Submit another person's information without their permission.",
            "Use the site for any unlawful purpose.",
            "Attempt to disrupt, damage, or gain unauthorized access to the site or its systems.",
            "Copy, scrape, or reuse content from the site except as permitted below.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="Intellectual Property">
        <p>
          The content on this site — including text, graphics, logos, and the Comfort With
          Chemotherapy name — is owned by or licensed to Comfort With Chemotherapy and is
          protected by applicable intellectual property laws. You may view and share this
          content for personal, non-commercial purposes, provided you do not alter it or
          remove any attribution. Any other use requires our written permission.
        </p>
        <p>
          Stories and testimonials appearing on this site remain the words of the people
          who shared them. Please do not reproduce them elsewhere without our permission.
        </p>
      </LegalSection>

      <LegalSection heading="Third-Party Services and Links">
        <p>
          Our forms are hosted by Jotform, and portions of the site may link to or rely on
          services we do not control. We are not responsible for the content, availability,
          or practices of third-party services, and your use of them is subject to their
          own terms.
        </p>
      </LegalSection>

      <LegalSection heading="Donations">
        <p>
          Comfort With Chemotherapy Inc NPF is a 501(c)(3) nonprofit organization.
          Donations support our charitable work, including assembling and delivering
          Comfort Care Packages. Unless stated otherwise at the time of giving, donations
          are non-refundable and are not designated to a specific recipient.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimer and Limitation of Liability">
        <p>
          This website and everything on it are provided "as is" and "as available,"
          without warranties of any kind, whether express or implied, to the fullest extent
          permitted by law.
        </p>
        <p>
          To the fullest extent permitted by law, Comfort With Chemotherapy and its
          directors, officers, staff, and partners will not be liable for any
          indirect, incidental, special, or consequential damages arising out of your use
          of this site, your submission of a request, or your use of any item contained in
          a Comfort Care Package.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to These Terms">
        <p>
          We may update these Terms of Use from time to time. When we do, we will revise
          the "Last updated" date at the top of this page. Continuing to use the site after
          a change means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact Us">
        <p>Questions about these Terms of Use can be directed to:</p>
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
