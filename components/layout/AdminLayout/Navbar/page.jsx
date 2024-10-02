import React from "react";
import Image from "next/image";
import Languages from "../../../admin-languages/page";
import styles from "./Navbar.module.scss";
import Button from "../../../shared/admin/Button/Button";
import {
  AddIcon,
  BurgerIcon,
} from "../../../../assets/images/admin/admin.vector";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__box}>
          <div className={styles.navbar__left}>
            <button className={styles.burger__button}>
              <BurgerIcon />
            </button>
            <Image
              src="/adminImgs/logo.svg"
              alt="logo"
              width={92}
              height={32}
            />
          </div>
          <div className={styles.navbar__right}>
            <Button icon={AddIcon} hideTextOnMobile={true} />
            <div className={styles.language}>
              <Languages />
            </div>
            <button>Admin</button>
          </div>
        </div>
      </div>
    </>
  );
}
