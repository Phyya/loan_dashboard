import React from "react";
import Typography from "../../../../components/Typography/Typography";
import ColumnFlex from "../../../../components/UI/FlexItem/ColumnFlex";
import styles from "../../Users.module.scss";

interface GeneralInfoProps {
  userInfo: any;
}

const GeneralInfo: React.FC<GeneralInfoProps> = (props) => {
  const {
    userInfo: { education, email, guarantor, profile, socials },
  } = props;
  return (
    <div className={styles.usersDetailsTabInfo}>
      <div className={styles.usersDetailsColumnFlex}>
        <div>
          <Typography element="h5" text="Personal Information" />

          <div
            className={`${styles.usersDetailsGrid} 
            `}
          >
            <ColumnFlex
              title="FULL NAME"
              text={`${profile.firstName} ${profile.lastName}`}
            />
            <ColumnFlex title="PHONE NUMBER" text={profile.phoneNumber} />
            <ColumnFlex title="EMAIL ADDRESS" text={email} />
            <ColumnFlex title="BVN" text={profile.bvn} />
            <ColumnFlex title="GENDER" text={profile.gender} />
            <ColumnFlex title="MARITAL STATUS" text="N/A" />
            <ColumnFlex title="CHILDREN" text="N/A" />
            <ColumnFlex title="TYPE OF RESIDENCE" text="N/A" />
          </div>
        </div>
      </div>
      <div className={styles.usersDetailsColumnFlex}>
        <div>
          <Typography element="h5" text="Education and Employment" />

          <div
            className={`${styles.usersDetailsGrid} 
            `}
          >
            <ColumnFlex title="LEVEL OF EDUCATION" text={education.level} />
            <ColumnFlex
              title="EMPLOYMENT STATUS"
              text={education.employmentStatus}
            />
            <ColumnFlex title="SECTOR OF EMPLOYMENT" text={education.sector} />
            <ColumnFlex
              title="DURATION OF EMPLOYMENT"
              text={education.duration}
            />
            <ColumnFlex title="OFFICE EMAIL" text={education.officeEmail} />
            <ColumnFlex
              title="MONTHLY INCOME"
              text={`\u20A6${education.monthlyIncome[0]} - \u20A6${education.monthlyIncome[1]}`}
            />
            <ColumnFlex title="LOAN REPAYMENT" text={education.loanRepayment} />
          </div>
        </div>
      </div>
      <div className={styles.usersDetailsColumnFlex}>
        <div>
          <Typography element="h5" text="Socials" />

          <div
            className={`${styles.usersDetailsGrid} 
            `}
          >
            <ColumnFlex title="TWITTER" text={socials.twitter} />
            <ColumnFlex title="FACEBOOK" text={socials.facebook} />
            <ColumnFlex title="INSTAGRAM" text={socials.instagram} />
          </div>
        </div>
      </div>
      <div className={styles.usersDetailsColumnFlex}>
        <div>
          <Typography element="h5" text="Guarantors" />

          <div
            className={`${styles.usersDetailsGrid} 
            `}
          >
            <ColumnFlex
              title="FULL NAME"
              text={`${guarantor.firstName} ${guarantor.lastName}`}
            />
            <ColumnFlex title="PHONE NUMBER" text="N/A" />
            <ColumnFlex title="EMAIL ADDRESS" text="N/A" />
            <ColumnFlex title="RELATIONSHIP" text="N/A" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
