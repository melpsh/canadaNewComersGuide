import React from "react";
import InfoBlock from "./InfoBlock";
import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import Accordion from "./Accordion";

const healthCardData = [
  {
    id: 1,
    title: 'Step 1: Determine Your Province or Territory',
    desc: `Identify the province or territory you are settling in as the health insurance process and requirements differ by location.`
  },
  {
    id: 2,
    title: 'Step 2: Check Eligibility',
    desc: `Ensure you meet the residency requirements for the province or territory. Typically, you need to be physically present and intend to make the province your home.`
  },
  {
    id: 3,
    title: 'Step 3: Gather Required Documents',
    desc: `You'll need to present various documents to prove your identity, residency, and legal status in Canada. These documents typically include:
    <ul>
      <li>Proof of Identity (one or more of the following):
        <ul>
          <li>Passport</li>
          <li>Birth certificate</li>
          <li>Permanent resident card</li>
        </ul>
      </li>
      <li>Proof of Residency (one or more of the following):
        <ul>
          <li>Utility bill</li>
          <li>Rental agreement or lease</li>
          <li>Bank statement</li>
        </ul>
      </li>
      <li>Proof of Legal Status:
        <ul>
          <li>Visa</li>
          <li>Work permit</li>
          <li>Study permit</li>
          <li>Permanent resident card</li>
        </ul>
      </li>
    </ul>`
  },
  {
    id: 4,
    title: 'Step 4: Complete the Application Form',
    desc: `Visit the provincial or territorial health insurance website to access the application form. Below are links and specific steps for each province and territory:
    <ul>
      <li>Ontario: <a href="https://www.ontario.ca/page/apply-ohip-and-get-health-card" target="_blank">OHIP</a></li>
      <li>Quebec: <a href="https://www.ramq.gouv.qc.ca/en/citizens/health-insurance/registration/Pages/registration.aspx" target="_blank">RAMQ</a></li>
      <li>British Columbia: <a href="https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/msp" target="_blank">MSP</a></li>
      <li>Alberta: <a href="https://www.alberta.ca/ahcip.aspx" target="_blank">AHCIP</a></li>
      <li>Manitoba: <a href="https://www.gov.mb.ca/health/mhsip/" target="_blank">Manitoba Health</a></li>
      <li>Saskatchewan: <a href="https://www.ehealthsask.ca/residents/health-cards/Pages/default.aspx" target="_blank">Saskatchewan Health</a></li>
      <li>Nova Scotia: <a href="https://novascotia.ca/dhw/msi/" target="_blank">MSI</a></li>
      <li>New Brunswick: <a href="https://www2.gnb.ca/content/gnb/en/departments/health/MedicarePrescriptionDrugPlan.html" target="_blank">Medicare</a></li>
      <li>Prince Edward Island: <a href="https://www.princeedwardisland.ca/en/service/register-pei-health-card" target="_blank">PEI Health</a></li>
      <li>Newfoundland and Labrador: <a href="https://www.gov.nl.ca/hcs/mcp/" target="_blank">MCP</a></li>
      <li>Northwest Territories: <a href="https://www.hss.gov.nt.ca/en/services/nwt-health-care-plan/apply-health-care-card" target="_blank">NWT Health</a></li>
      <li>Yukon: <a href="https://yukon.ca/en/health-and-wellness/health-care-insurance-plan" target="_blank">Yukon Health</a></li>
      <li>Nunavut: <a href="https://www.gov.nu.ca/health/information/health-care-card" target="_blank">Nunavut Health</a></li>
    </ul>`
  },
  {
    id: 5,
    title: 'Step 5: Submit Your Application',
    desc: `Follow the submission instructions for your specific province or territory. This usually involves mailing your application and supporting documents or applying in person.`
  },
  {
    id: 6,
    title: 'Step 6: Wait for Processing',
    desc: `Processing times vary by province and territory, typically ranging from a few weeks to a couple of months.`
  },
  {
    id: 7,
    title: 'Step 7: Receive Your Health Card',
    desc: `Once your application is processed and approved, you will receive your health card by mail.`
  },
  {
    id: 8,
    title: 'Additional Tips and Resources',
    desc: `Interim Health Coverage: Purchase private health insurance to cover you during any waiting period before your provincial or territorial health coverage begins.
    Healthcare Services: Familiarize yourself with local healthcare services, including family doctors, clinics, and hospitals.
    Update Information: Ensure you update your address with your provincial or territorial health authority if you move.
    Community Support: Look for newcomer services and community resources in your area for additional support.`
  }
];

