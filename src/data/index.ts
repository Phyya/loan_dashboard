import settlement from "../assets/icons/settlements.svg";
import users from "../assets/icons/user-friends.svg";
import guarantors from "../assets/icons/guarantors.svg";
import loans from "../assets/icons/loans.svg";
import sack from "../assets/icons/sack.svg";
import handshake from "../assets/icons/handshake.svg";
import piggy from "../assets/icons/piggy-bank.svg";
import whitelist from "../assets/icons/whitelist.svg";
import karma from "../assets/icons/karma.svg";
import briefcase from "../assets/icons/briefcase.svg";
import saving_products from "../assets/icons/savings_products.svg";
import fees_charges from "../assets/icons/coins_fees.svg";
import transactions from "../assets/icons/transactions.svg";
import services from "../assets/icons/services.svg";
import services_account from "../assets/icons/service_accounts.svg";
import reports from "../assets/icons/reports.svg";
import preference from "../assets/icons/preferences.svg";
import fees_pricing from "../assets/icons/fees_pricing.svg";
import logs from "../assets/icons/audit_logs.svg";
import box_user1 from "../assets/icons/box_users.svg";
import box_user2 from "../assets/icons/box_users2.svg";
import box_user3 from "../assets/icons/box_users3.svg";
import box_user4 from "../assets/icons/box_users4.svg";

export const sidebarlinks = [
  [
    {
      section: "CUSTOMERS",
      links: [
        {
          name: "Users",
          icon: users,
          to: "users",
        },
        {
          name: "Guarantors",
          icon: guarantors,
          to: "guarantors",
        },
        {
          name: "Loans",
          icon: sack,
          to: "loans",
        },
        {
          name: "Decison Models",
          icon: handshake,
          to: "decison_models",
        },
        {
          name: "Savings",
          icon: piggy,
          to: "savings",
        },
        {
          name: "Loan Requests",
          icon: loans,
          to: "loan_requests",
        },
        {
          name: "Whitelist",
          icon: whitelist,
          to: "whitelist",
        },
        {
          name: "Karma",
          icon: karma,
          to: "karma",
        },
      ],
    },
  ],
  [
    {
      section: "BUSINESSES",
      links: [
        {
          name: "Organization",
          icon: briefcase,
          to: "organization",
        },
        {
          name: "Loan Products",
          icon: loans,
          to: "loan_products",
        },
        {
          name: "Savings Products",
          icon: saving_products,
          to: "savings_products",
        },
        {
          name: "Fees and Charges",
          icon: fees_charges,
          to: "fee_and_charges",
        },
        {
          name: "Transactions",
          icon: transactions,
          to: "transactions",
        },
        {
          name: "Services",
          icon: services,
          to: "services",
        },
        {
          name: "Service Account",
          icon: services_account,
          to: "service_account",
        },
        {
          name: "Settlements",
          icon: settlement,
          to: "settlements",
        },
        {
          name: "Reports",
          icon: reports,
          to: "reports",
        },
      ],
    },
  ],
  [
    {
      section: "SETTINGS",
      links: [
        {
          name: "Preferences",
          icon: preference,
          to: "preferences",
        },
        {
          name: "Fees and Pricing",
          icon: fees_pricing,
          to: "fees_and_pricing",
        },
        {
          name: "Audit Logs",
          icon: logs,
          to: "audit_logs",
        },
      ],
    },
  ],
];

export const summaryData = [
  {
    title: "USERS",
    icon: box_user1,
    figure: "2,453",
  },
  {
    title: "ACTIVE USERS",
    icon: box_user2,
    figure: "2,453",
  },
  {
    title: "USERS WITH LOANS",
    icon: box_user3,
    figure: "12,453",
  },
  {
    title: "USERS WITH SAVINGS",
    icon: box_user4,
    figure: "102,453",
  },
];
export const statuses = ["Inactive", "Pending", "Blacklisted", "Active"];
