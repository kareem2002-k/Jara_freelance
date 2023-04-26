import React from "react";
import taxes1 from "../assets/taxes/taxes1.png";
import taxes2 from "../assets/taxes/taxes2.png";
import taxes3 from "../assets/taxes/taxes3.png";

const Taxes = () => {
  return (
    <div>
      <div className="components_section">
        <div
          data-aos="zoom-out"
          data-aos-delay="50"
          data-aos-duration="1000"
          style={{ color: "#fff", fontSize: 40, textAlign: "center" }}
          className="hero_heading"
        >
          Taxes
        </div>
      </div>
      <div className="section_content">
        <div className="taxes_container">
          <div className="taxes_text pr">
            <h2>HOTEL OCCUPANCY AND RESTAURANT CONSUMPTION TAX LAW</h2>
            <p>
              Effective 22nd June 2009, Lagos State Government has imposed a 5% consumption tax on
              all purchases of goods and services sold to consumers in any restaurant, hotel, event
              centre and entertainment venue (bars, clubs, lounges).
            </p>
            <p>
              The owner of the restaurant, hotel, event centre, etc is obligated to register with
              the Lagos State Internal Revenue Service (LIRS) as a collecting agent. The collecting
              agent must charge and collect 5% consumption tax on all consumables and personal
              services and remit to the LIRS monthly.
            </p>
            <p>
              Little Company Nigeria Ltd., the owners of Jara Beach Resort are registered with the
              LIRS as a collecting agent and must charge 5% consumption tax. All customers of the
              services provided by Little Company Nigeria Ltd. are obligated to pay the 5%
              consumption tax.
            </p>
            <p>
              You'll find copies of the LIRS Public Notice from March 2021 on Consumption Tax and
              the Hotel Occupancy and Restaurant Consumption Law in PDFs right / below.
            </p>
            <h2>VALUE ADDED TAX</h2>
            <p>
              Value Added Tax is a consumption tax on goods and services. The current rate of Value
              Added Tax (VAT) in Nigeria is 7.5%. The Federal Inland Revenue Service (FIRS) is the
              agency of the Federal Government that administers VAT.
            </p>
            <p>
              Little Company Nigeria Ltd., the owner of Jara Beach Resort is registered with the
              Federal Inland Revenue Service. Little Company Nigeria Ltd must charge 7.5% VAT on
              services rendered to customers. The VAT is remitted monthly to the FIRS. Section 2 (b)
              (i) and (ii) of the VAT Act states:
            </p>
            <p>
              (b) in respect of a service – (i) the service is rendered in Nigeria by a person
              physically present in Nigeria at the time of providing the service(ii) the service is
              provided to and consumed by a person in Nigeria, regardless of whether the service is
              rendered within or outside Nigeria or whether or not the legal or contractual
              obligation to render such service rests on person within or outside Nigeria.”
            </p>

            <p>
              Section 2A (1) states:(1) “For the purposes of this Act, supply shall be deemed to
              take place at the time an invoice or receipt is issued by the supplier, or payment of
              consideration is due to, or received by the supplier in respect of that supply,
              whichever occurs first.
            </p>
            <p>
              This means that Little Company Nigeria Ltd. must charge VAT on all supply of goods and
              services except those specifically listed as exempt in the VAT Act.
            </p>
            <p>
              Any customer who requires evidence of the remittance of the VAT paid over to Little
              Company Nigeria Ltd. can make a request. Our Tax Consultant will liaise with the
              customer and make the relevant evidence and documents available.
            </p>
            <h3>WITHHOLDING TAX</h3>
            <p>
              Withholding Tax is an advance payment of income tax. It is payment on account of the
              total income tax liability of the taxpayer. WHT is normally deducted at source when
              payment is made. The payer (acting as an agent to the relevant tax authority) is
              empowered by law to effect WHT deduction, and thereafter, pay to the beneficiary an
              amount less than the withholding tax deducted from the gross amount.
            </p>
            <p>
              The following transactions are to suffer withholding tax deductions at the following
              rates:
            </p>
            <h3>Witholding Tax Table</h3>
            <p>
              Little Company Nigeria Limited is a limited liability company. Customers are to deduct
              5% withholding tax from the cost of the service they are billed for. This is because
              the relationship with Little Company Nigeria Ltd falls under “All types of contracts
              and agency arrangements other than sales in the ordinary course of business.”
            </p>
            <p>
              The withholding tax deducted by customers must be remitted to the FIRS by the 21st day
              of the month following the month in which the payment for the service was made. Our
              Tax Consultant will follow up with each customer for the FIRS credit note which is
              evidence of the remittance of the withholding tax to FIRS.
            </p>
          </div>
          <div className="taxes_images">
            <img src={taxes1} alt="" />
            <img src={taxes2} alt="" />
            <img src={taxes3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taxes;
